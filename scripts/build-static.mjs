import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argument = process.argv.find(value => value.startsWith('--origin='));
const origin = new URL(argument ? argument.slice(9) : 'https://serenite-redesign.vercel.app').origin;
if (!/^https?:/.test(origin)) throw new Error('Use an HTTP or HTTPS site origin.');
const location = { href:origin+'/', origin, pathname:'/', search:'', hash:'' };
// Gallery IDs must stay identical when rebuilding the same release source.
let randomSeed = 1;
const buildMath = Object.create(Math);
buildMath.random = () => {
  randomSeed = (Math.imul(randomSeed,1664525)+1013904223) >>> 0;
  return randomSeed / 4294967296;
};
const context = vm.createContext({
  URL, URLSearchParams, Date, console, location, Math:buildMath,
  window:{SERENITE_STATIC_BUILD:true,addEventListener(){}},
  document:{addEventListener(){},getElementById(){return {hidden:true};}}
});
const sourceFiles = ['content-data.js','content-refinements.js','routes.js','app.js'];
for (const file of sourceFiles) vm.runInContext(await readFile(resolve(root,file),'utf8'),context,{filename:file});
const runtimeSources = await Promise.all(sourceFiles.map(file=>readFile(resolve(root,file),'utf8')));
await writeFile(resolve(root,'site-runtime.js'), runtimeSources.join('\n;\n'));
const routes = vm.runInContext('ROUTES',context);
const shell = await readFile(resolve(root,'page-shell.html'),'utf8');
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const jsonScript = value => JSON.stringify(value).replaceAll('<','\\u003c');
const head = meta => `<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex,nofollow">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
<title>${escape(meta.title)}</title>
<meta name="description" content="${escape(meta.description)}">
<link rel="canonical" href="${escape(meta.url)}">
<link rel="icon" href="/img/logo.svg" type="image/svg+xml">
<link rel="stylesheet" href="/fonts.css">
<link rel="preload" href="/fonts/jost-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/cormorant-garamond-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/cormorant-garamond-italic.woff2" as="font" type="font/woff2" crossorigin>
<meta property="og:type" content="website">
<meta property="og:site_name" content="Serenité Wellness Medicine">
<meta property="og:title" content="${escape(meta.title)}">
<meta property="og:description" content="${escape(meta.description)}">
<meta property="og:url" content="${escape(meta.url)}">
<meta property="og:image" content="${escape(meta.image)}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Serenité Wellness Medicine, aesthetics and wellness in Ontario, California.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escape(meta.title)}">
<meta name="twitter:description" content="${escape(meta.description)}">
<meta name="twitter:image" content="${escape(meta.image)}">
<script type="application/ld+json" id="page-schema">${jsonScript(meta.schema)}</script>
<link rel="stylesheet" href="/styles.css">`;

const pages = [];
for (const [key, route] of Object.entries(routes)) {
  location.pathname=route.path; location.href=origin+route.path;
  context.buildKey=key; context.buildOrigin=origin;
  const output=vm.runInContext(`state={v:"a",p:buildKey}; ({markup:siteMarkup(),meta:seoMeta(buildKey,buildOrigin)})`,context);
  // A server-rendered sample form must remain inert when JavaScript is disabled.
  const markup=output.markup.replace(/(<form\b[^>]*>)([\s\S]*?)(<\/form>)/g,(_,start,body,end)=>start+'<fieldset class="preview-static-fields" disabled>'+body+'</fieldset><noscript><p>This sample form requires JavaScript. Nothing can be submitted from this preview.</p></noscript>'+end);
  const html=shell.replace('<!-- page:head -->',()=>head(output.meta)).replace('<!-- page:body -->',()=>'<div id="site" class="v-a">'+markup+'</div>').replace(/^[ \t]+$/gm,'');
  const file=route.path==='/'?'index.html':route.path.slice(1)+'.html';
  await mkdir(dirname(resolve(root,file)),{recursive:true});
  await writeFile(resolve(root,file),html);
  pages.push({key,path:route.path,file,title:output.meta.title,description:output.meta.description,canonical:output.meta.url,sha256:createHash('sha256').update(html).digest('hex')});
}
const notFound='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Page not found — Serenité Wellness Medicine</title><link rel="stylesheet" href="/fonts.css"><link rel="stylesheet" href="/styles.css"></head><body><main class="sec"><div class="wrap"><p class="eyebrow">Serenité Wellness Medicine</p><h1>Page not found</h1><p>The address may have changed. Choose a starting point below.</p><div class="actions"><a class="btn btn-primary" href="/">Home</a><a class="btn btn-ghost" href="/wellness-clinic-team">Our team</a><a class="btn btn-ghost" href="/wellness-clinic-pricing">Pricing</a></div></div></main></body></html>';
await writeFile(resolve(root,'404.html'),notFound);
await writeFile(resolve(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>'  <url><loc>'+escape(p.canonical)+'</loc></url>').join('\n')+'\n</urlset>\n');
await writeFile(resolve(root,'GENERATED-PAGES.json'),JSON.stringify({mode:'public-design-demo',origin,pages},null,2)+'\n');
const manifestFile=resolve(root,'ASSET-MANIFEST.json');
const manifest=JSON.parse(await readFile(manifestFile,'utf8'));
const entries=new Map(manifest.files.map(entry=>[entry.path,entry]));
const added=['site-runtime.js','img/hd/morpheus8-banner.jpg','img/hd/attiva-banner.jpg','img/hd/hair-banner.jpg','video/serenite-opening-v19.mp4','img/v/serenite-opening-v19.jpg','content-data.js','content-refinements.js','routes.js','page-shell.html','scripts/build-static.mjs','scripts/preview_server.py','sitemap.xml','404.html','GENERATED-PAGES.json',...pages.map(page=>page.file)];
for (const path of [...new Set([...entries.keys(),...added])]) {
  const bytes=await readFile(resolve(root,path));
  const sha256=createHash('sha256').update(bytes).digest('hex');
  const old=entries.get(path);
  const entry={...old,path,bytes:bytes.length,sha256};
  if (old && old.sha256!==sha256 && !old.previous_sha256) entry.previous_sha256=old.sha256;
  if (path.endsWith('.html') && path!=='page-shell.html') entry.generated=true;
  entries.set(path,entry);
}
manifest.revision='Atelier approved V19 opening film with retained typography and interaction refinements';
manifest.publication_status='User-authorized V19 film release through the existing branch and separate-preview workflow. Building does not publish. Clinician portraits remain excluded; introduction playback stays user-initiated.';
manifest.files=[...entries.values()];
await writeFile(manifestFile,JSON.stringify(manifest,null,2)+'\n');
console.log(`Generated ${pages.length} static design-demo pages, metadata and sitemap for ${origin}. No files were published by this build.`);
