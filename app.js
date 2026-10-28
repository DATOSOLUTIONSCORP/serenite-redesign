const C = { ...window.SERENITE_CONTENT, ...window.SERENITE_REFINEMENTS };
const ROUTES = window.SERENITE_SITE.routes;
const H = C._home;

const SITE = {
  phone: "909-947-1216",
  email: "Ador.Mansat@SereniteWellnessMed.com",
  addr1: "1910 S Archibald Ave., Ste. M2",
  addr2: "Ontario, CA 91761",
  hours: "By appointment only. Closed weekends and holidays.",
  book: "https://www.serenitewellnessmed.com/wellness-clinic-book-an-appointment",
  store: "https://serenitewellnessmed.gethealthy.store/",
  account: "https://www.serenitewellnessmed.com/wellness-clinic-my-account",
  cart: "https://www.serenitewellnessmed.com/wellness-clinic-cart",
  map: "https://www.google.com/maps/search/?api=1&query=1910+S+Archibald+Ave+Ste+M2+Ontario+CA+91761",
  ig: "https://www.instagram.com/serenitewellnessmedicine/",
  fb: "https://www.facebook.com/profile.php?id=61557265752233",
  yt: "https://www.youtube.com/@SereniteWellnessMed"
};

/* Videos live in the artifact's asset store; posters are published images. */
const VID = {
  hero: { src: "/video/hero-bg.mp4", poster: "/img/v/hero-bg.jpg" },
  popup: { src: "/video/serenite-opening-v19.mp4", poster: "/img/v/serenite-opening-v19.jpg", seconds: 34 },
  attiva: { src: "/video/attiva-promo.mp4", poster: "/img/v/attiva-promo.jpg" },
  music: "/video/background-music.mp4",
  patients: [
    "8d4a1afa3e3c7193e1aedf5e73c5053c", "c38ad2f77ee8db45db72beae761ccae8", "2838602ff924d97552a170f04421bc29",
    "9732198eeaa91afc18965e7f28fdee9c", "a82caae61e6c8617ec248db962bbf7f3", "4abc2df0e116e040bc06532f7797b96b",
    "1bdedc6c6b848395a6187f25fdb91ada", "5d3d748e9615a79d2a9e76c4a3145849", "b16e53f7d072c5ddace0362d19f286b9",
    "97b03c8b7cae63287b5c6db8588bbdb4"
  ].map((id, i) => ({ src: `/video/patient-${i + 1}.mp4`, poster: `/img/v/patient-${i + 1}.jpg` }))
};

const VERSIONS = {
  a: { name: "Atelier", note: "Editorial and refined. White space, serif headlines, gold for the booking button." },
  b: { name: "Clinic", note: "Clean and clinical. Royal blue from the logo, prices up front, a booking card beside every headline." },
  c: { name: "Gold Hour", note: "Dark and luxurious. Deep navy, gold, large high-contrast type, photo-led bands." }
};

/* Every treatment card from the original homepage (breast augmentation and liposuction removed). */
const CARDS = {
  beauty: [
    ["morpheus8", "Morpheus8", "From $1,200", 0, "Experience advanced skin tightening and wrinkle reduction with this minimally invasive radiofrequency treatment."],
    ["attiva", "Attiva", "From $2,000", 1, "Significantly enhances skin tightness and elasticity and effectively reduces sagging skin, wrinkles, and signs of aging."],
    ["lumecca", "Lumecca / IPL", "From $300", 2, "Effectively treat pigmented and vascular lesions and improve skin complexion and clarity."],
    ["nsfacelift", "NS (Non-Surgical) Face Lift", "From $400", 3, "Enhance your natural beauty with a treatment designed to lift and tighten your skin, revealing a more youthful appearance."],
    ["bodysculpt", "Body Sculpting and Body Contouring", "From $400", 4, "Refine your physique with our body sculpting and contouring treatments, designed to help you achieve your desired body shape."],
    ["laserhair", "Laser Hair Removal", "From $200", 5, "Explore our laser hair removal options to remove excess hair such as bikini lines and underarms."],
    ["microneedling", "Microneedling", "From $700", 6, "Stimulate collagen production and improve skin texture with this minimally invasive treatment for wrinkles, scars, and enlarged pores."],
    ["pico", "Pico Laser: Tattoo and Pigmentation Removal", "Tattoo: from $100 / sq in", 7, "Tattoo removal starts at $100 per square inch. Skin pigmentation removal starts at $200 per session."],
    ["facials", "Facial / Chemical / Carbon Peel / Acne Treatment", "From $250", 8, "Experience the revitalizing benefits of our facial and chemical peels, tailored to refresh and rejuvenate your skin with expert care."],
    ["hair", "New Hair Growth", "From $1,500", 9, "Discover hair restoration options to promote new hair growth and achieve a fuller head of hair."]
  ],
  longevity: [
    ["lyl", "LYL Serenite Wellness Program", "$88 / month", 13, "Live Younger Longer. Discover your path to optimal wellness."],
    ["weightloss", "Medical Weight Loss", "$675 / month", 14, "Achieve lasting weight loss with our doctor-supervised program."],
    ["bhrt", "Bio-Identical Hormone Replacement Therapy", "$600 / month", 15, "Restore balance and vitality with natural hormone solutions."],
    ["iv", "IV Therapy", "From $300", 16, "Get a boost of essential nutrients delivered directly into your bloodstream."],
    ["nutra", "Nutraceuticals", "Varies", 17, "Support your health from the inside out with high-quality supplements."],
    ["meals", "Healthy Gourmet Meals", "Varies", 18, "Enjoy delicious, nutritious meals designed to support your weight loss goals."],
    ["sexual", "Sexual Rejuvenation", "From $300", 19, "Enhance intimacy and rediscover your confidence."],
    ["skin", "Serenite Skin Care Products", "Varies", 20, "Experience a radiant complexion with our skincare line."],
    ["haircare", "Serenite Hair Care Products", "Varies", 21, "Nourish and revitalize your hair with our effective haircare products."]
  ]
};
const TEAM = [
  ["t-heidi", "Dr Heidi, MD", "Founder and Medical Director"],
  ["t-ador", "Ador, DNP", "Doctor of Nursing Practice, FNP-C"],
  ["t-bel", "Admin Bel, MBA", "Administrator"],
  ["t-arnold", "RN Arnold", "Clinical Director"],
  ["t-romella", "LVN Romella", "Clinical Director"],
  ["t-donna", "RN Donna", "Master Injector"],
  ["t-ron", "RN Ron", "Clinician"],
  ["t-ninette", "RN Ninette", "Clinician"],
  ["t-myrtle", "LVN Myrtle", "Clinician"],
  ["t-matthew", "MA Matthew", "Medical Assistant"],
  ["t-josh", "MA Josh", "Medical Assistant"],
  ["t-joyce", "MA Joyce", "Medical Assistant"]
];
const CLINIC = [["mobile", "Mobile Clinic"], ["pricing", "Pricing"], ["membership", "Membership"], ["news", "News"], ["concepts", "Key Concepts"], ["location", "Location and Hours"], ["book", "Book an Appointment"], ["privacy", "Privacy Policy"]];

const CURATED = { home: "Home", morpheus8: "Morpheus8", attiva: "Attiva", hair: "New Hair Growth", skin: "Serenite Skin Care Products", team: "Our team" };
const TITLES = Object.assign({}, CURATED);
Object.keys(C).forEach(k => { if (k[0] !== "_" && !k.startsWith("o-")) TITLES[k] = C[k].title; });
TITLES.book = "Book a consultation";
const PRICE = {};
[...CARDS.beauty, ...CARDS.longevity].forEach(c => { PRICE[c[0]] = c[2]; });
const GROUP = {};
CARDS.beauty.forEach(c => { GROUP[c[0]] = "Beauty"; });
CARDS.longevity.forEach(c => { GROUP[c[0]] = "Longevity"; });


const NAV = [
 {label:"Beauty",menu:CARDS.beauty.map(c=>[c[0],c[1]])},
 {label:"Longevity",menu:CARDS.longevity.map(c=>[c[0],c[1]])},
 {label:"Our team",p:"team"},
 {label:"Pricing",p:"pricing"},{label:"Visit",p:"location"}
];

const TIERS = [
  { name: "Gold", amt: "$288", yr: "$3,456 for the year", note: "5% off a la carte prices, or choose a Gold treatment package." },
  { name: "Platinum", amt: "$388", yr: "$4,656 for the year", note: "10% off a la carte prices, or choose a Platinum treatment package." },
  { name: "Emerald", amt: "$688", yr: "$8,256 for the year", note: "Choose from the Emerald treatment packages.", feat: true },
  { name: "Diamond", amt: "$888", yr: "$10,656 for the year", note: "Our most complete plan, with the Diamond treatment packages." }
];

const FEATURED = [
  { p: "morpheus8", name: "Morpheus8", img: "m8-jaw", alt: "Clinician treating the jawline with a Morpheus8 handpiece", from: "From $1,200", blurb: "Microneedling with radiofrequency for wrinkles, loose skin and acne scars." },
  { p: "attiva", name: "Attiva", img: "attiva-device", alt: "Attiva radiofrequency system by Reveal Lasers", from: "From $2,000", blurb: "Deep radiofrequency skin tightening for the face, neck and body, without surgery." },
  { p: "hair", name: "Hair restoration", img: "hair-scalp", alt: "Hair and scalp treatment illustration", from: "From $1,500", blurb: "Discuss thinning hair, scalp health and possible approaches at a consultation." },
  { p: "skin", name: "Serenite skin care", img: "skin-dropper", alt: "Amber dropper bottle of facial serum", from: "Shop online", blurb: "Made in the USA, paraben free, sulfate free and cruelty free." }
];

/* ---------- curated landing page content ---------- */
const LP = {
  morpheus8: {
    eyebrow: "Morpheus8 by InMode",
    h1: "Firmer, smoother skin, <em>built from within</em>",
    lead: "Morpheus8 pairs microneedling with fractional radiofrequency to remodel collagen deep below the surface. It treats wrinkles, loose skin, acne scars and uneven texture on the face and body, with minimal downtime.",
    imgs: [["m8-jaw", "Morpheus8 treatment along the jawline"], ["m8-neck", "Morpheus8 treatment on the neck"]],
    facts: [["Starting at", "$1,200"], ["Areas", "Face, neck, underarms, body"], ["Comfort", "Numbing plus optional laughing gas"], ["Downtime", "Minimal"]],
    badges: ["Morpheus8 Center of Excellence", "Suitable for most skin tones"],
    benefitsEyebrow: "What it treats",
    benefitsTitle: "One treatment, four common concerns",
    benefits: [
      ["Wrinkles and fine lines", "Energy delivered below the surface smooths lines from the deeper layers up."],
      ["Loose or sagging skin", "New collagen firms and tightens skin over the weeks after treatment."],
      ["Acne scars and texture", "Remodeling softens scarring and evens out rough, uneven texture."],
      ["Underarm sweating", "A dedicated underarm treatment addresses hyperhidrosis."]
    ],
    steps: [
      ["Consult", "We review your skin, goals and history, then map the areas to treat."],
      ["Numb", "Premium topical numbing cream, with laughing gas available if you want it."],
      ["Treat", "Fine needles deliver radiofrequency energy at a depth set for each area."],
      ["Recover", "Most people return to their routine quickly while collagen keeps building."]
    ],
    why: {
      eyebrow: "Why Serenite",
      title: "A recognized Center of Excellence for Morpheus8",
      body: "Treatments are performed by Dr. Heidi, Ador, RN Arnold, RN Donna and our clinical team. Comfort is part of the plan from the start.",
      checks: ["Premium topical numbing cream on every treatment", "Laughing gas available for a more relaxed session", "Settings tailored to each area of the face and body", "Color-blind technology designed for a wide range of skin tones"],
      img: ["m8-cheek", "Clinician performing Morpheus8 on a patient's cheek"]
    },
    skip: /^(Welcome to the Future|What Does Morpheus8 Do|Before and After Gallery|Testimonials$|Book Your)/i,
    pricing: { title: "Morpheus8 pricing", note: "Price per session. Your treatment plan and number of sessions are set at your consultation.", rows: [["Face", "$1,200"], ["Neck", "$1,200"], ["Underarms (hyperhidrosis)", "$1,200"], ["Body", "$2,000"]] },
    quotes: [
      ["After my sessions with Morpheus8, I noticed a significant improvement in my skin texture and firmness. It really has changed the way I feel about myself.", "Jane D."],
      ["I was nervous at first, but the staff explained every pain management step. The numbing cream and laughing gas made the procedure comfortable, and the results were fantastic.", "Samantha L."]
    ],
    faq: [
      ["Does Morpheus8 hurt?", "We apply a premium numbing cream before every treatment, and laughing gas is available. Our goal is a comfortable, relaxed session."],
      ["How much does Morpheus8 cost?", "Sessions start at $1,200 for the face, neck or underarms and $2,000 for the body. Members can save with a Serenite membership."],
      ["How much downtime should I expect?", "Downtime is minimal. Most people return to normal activities quickly. We go over aftercare at your visit."],
      ["Is it right for my skin?", "Morpheus8 is designed for a wide range of skin types and tones. A consultation is the best way to confirm it fits your goals."]
    ]
  },
  attiva: {
    eyebrow: "Attiva by Reveal Lasers",
    h1: "Skin tightening <em>without surgery</em>",
    lead: "Attiva uses patented radiofrequency technology to reach deep layers of the skin and stimulate collagen and elastin. It firms sagging skin on the face, neck and body, and you can get back to your day shortly after.",
    imgs: [["face-portrait", "Woman with firm, smooth skin along the jaw and neck"], ["attiva-device", "The Attiva system by Reveal Lasers"]],
    facts: [["Starting at", "$2,000"], ["Areas", "Face, neck, arms, thighs, abdomen"], ["Monitoring", "Live thermal camera"], ["Downtime", "Minimal"]],
    badges: ["Attiva Center of Excellence", "Among the first on the West Coast"],
    benefitsEyebrow: "The advantages",
    benefitsTitle: "Firmer skin, on your schedule",
    benefits: [
      ["Non-surgical", "Tighten loose skin without incisions or general anesthesia."],
      ["Minimal downtime", "Return to your daily activities shortly after treatment."],
      ["Long-lasting results", "New collagen and elastin keep improving firmness over time."],
      ["Wide range of skin tones", "Designed to be used safely across many skin types and tones."]
    ],
    steps: [
      ["Consult", "We assess skin laxity and agree on the areas and goals."],
      ["Comfort", "Premium numbing cream, with laughing gas available."],
      ["Treat", "Radiofrequency energy heats deep tissue while a thermal camera tracks temperature live."],
      ["Results", "Skin continues to firm over the following weeks as collagen rebuilds."]
    ],
    why: {
      eyebrow: "Why Serenite",
      title: "Trained by the medical director of Attiva",
      body: "Dr. Heidi, Ador and RN Arnold were trained and certified by Dr. Jack Zamora, MD, Medical Director of Attiva by Reveal Lasers. Serenite was among the first clinics on the West Coast to offer Attiva and is a recognized Center of Excellence.",
      checks: ["Certified by the device's own medical director", "Center of Excellence for Attiva", "Numbing cream and laughing gas for comfort", "Live thermal monitoring on every treatment"],
      img: ["attiva-thermal", "Attiva thermal camera interface"]
    },
    skip: /^(Serenite Wellness Medicine Medical Clinic is a Center|The Advantages of Attiva|Patient Testimonials$)/i,
    galleryCredit: "Photos courtesy of Dr. Jack Zamora, Denver, CO, via Reveal Lasers. Individual results vary.",
    pricing: { title: "Attiva pricing", note: "Price per session. Your plan is set at your consultation.", rows: [["Neck", "$2,000"], ["Face", "$4,500"], ["Arms or thighs", "$4,500"], ["Abdomen, body or buttocks", "$5,000"]] },
    quotes: [
      ["I was amazed at how comfortable the Attiva treatment was. The numbing cream and laughing gas made the entire process pain-free, and the care from the whole team was top-notch.", "Maria M."],
      ["Not only does my skin look years younger, I feel incredible. It's like turning back the clock.", "Michael P."],
      ["Thanks to Ador and the team, I had a wonderful experience with Attiva. The results exceeded my expectations.", "Rey O."]
    ],
    faq: [
      ["How is Attiva different from Morpheus8?", "Both use radiofrequency to build collagen. Attiva focuses on deep heating for tightening larger areas, monitored with a thermal camera. Morpheus8 adds microneedling and is strong on texture and scarring. We recommend one or both at your consultation."],
      ["Does it hurt?", "We use premium numbing cream and offer laughing gas so the treatment stays comfortable."],
      ["What does Attiva cost?", "Sessions start at $2,000 for the neck and $4,500 for the face. Larger body areas start at $5,000."],
      ["When will I see results?", "Some patients see a difference right away, and skin keeps firming over the following weeks as new collagen forms."]
    ]
  },
  hair: {
    eyebrow: "Hair restoration",
    h1: "Thicker, fuller hair, <em>no surgery</em>",
    lead: "Our exosome treatment delivers growth factors and proteins to the scalp to wake up hair follicles, improve density and support a healthier scalp. Sessions are quick, with no downtime.",
    imgs: [["hair-scalp", "Exosome treatment being applied to the scalp"], ["hair-wash", "Woman washing her hair"]],
    facts: [["Starting at", "$1,500"], ["Approach", "Non-surgical"], ["Downtime", "None"], ["At home", "Serenite hair care"]],
    badges: ["No downtime", "Suitable for most hair types"],
    benefitsEyebrow: "Why exosomes",
    benefitsTitle: "A gentler path to new growth",
    benefits: [
      ["Growth factors, delivered", "Exosomes are tiny vesicles rich in growth factors and proteins that help stimulate follicles."],
      ["No surgery", "Avoid the discomfort and recovery of surgical hair restoration."],
      ["Quick sessions", "Treatments are fast and fit into a busy schedule, with no downtime."],
      ["Healthier scalp", "Beyond growth, exosomes support overall scalp health for stronger hair."]
    ],
    steps: [
      ["Assess", "We look at your scalp, pattern of thinning and history."],
      ["Treat", "Exosomes are applied to the scalp in a quick, comfortable session."],
      ["Watch it grow", "Many people notice thicker coverage within weeks, with gains over time."],
      ["Maintain", "Maintenance sessions and home care help sustain density."]
    ],
    why: {
      eyebrow: "At home",
      title: "Serenite Hair Care keeps the results going",
      body: "Our own hair care line is made in the USA and free of sulfates and parabens. Use it between visits to nourish the scalp and protect new growth.",
      checks: ["Deep nourishment and hydration", "Strengthens strands to reduce breakage", "Adds volume to thinning or fine hair", "Protects color and shine"],
      img: ["hair-tools", "Serenite hair care products"],
      shop: true, more: "haircare"
    },
    skip: /^(Discover New Hair Growth|The Value Proposition)/i,
    galleryCredit: "Photos courtesy of AnteAGE. Individual results vary.",
    pricing: { title: "Hair restoration pricing", note: "Price per session. Your plan is set at your consultation.", rows: [["New hair growth with exosomes", "$1,500"], ["Serenite hair care products", "Varies"]] },
    quotes: null,
    faq: [
      ["Who is a good candidate?", "Men and women with thinning hair or early hair loss. We confirm fit at a consultation."],
      ["Is there downtime?", "No. Sessions are quick, and you can return to your day right after."],
      ["When will I see results?", "Many people begin to see improvements in thickness and coverage within weeks, with continued gains over time."],
      ["How much does it cost?", "Exosome hair treatment starts at $1,500 per session."]
    ]
  },
  skin: {
    eyebrow: "Serenite Skin Care",
    h1: "Everyday skin care that <em>keeps results going</em>",
    lead: "Serenite Skin Care is made in the USA with natural, high-quality ingredients. Every formula is paraben free, sulfate free and cruelty free, and gentle enough for sensitive skin.",
    imgs: [["skin-dropper", "Serenite facial serum in an amber dropper bottle"], ["skin-rose", "Skin care products arranged with rose petals"]],
    facts: [["Made in", "USA"], ["Free of", "Parabens and sulfates"], ["Testing", "Cruelty free"], ["Skin types", "All, including sensitive"]],
    badges: ["Made in the USA", "Cruelty free"],
    benefitsEyebrow: "What it does",
    benefitsTitle: "Healthy skin between treatments",
    benefits: [
      ["Deep hydration", "Intense moisture that leaves skin soft and supple."],
      ["Anti-aging", "Reduces the look of fine lines, wrinkles and other signs of aging."],
      ["Brightening", "Evens tone and texture for a luminous glow."],
      ["Calming", "Soothes irritated or sensitive skin."]
    ],
    standards: ["Made in the USA", "Paraben free", "Sulfate free", "Cruelty free", "Eco-friendly packaging", "Safe for sensitive skin"],
    why: {
      eyebrow: "Our standards",
      title: "Natural ingredients, nothing harsh",
      body: "Every Serenite product is formulated without parabens, sulfates or animal testing and packaged in environmentally friendly materials.",
      checks: ["Natural, high-quality ingredients", "Gentle enough for sensitive skin", "Developed without animal testing", "Eco-friendly packaging"],
      img: ["skin-jars", "Serenite skin care jars and bottles"],
      shop: true
    },
    skip: /^(Serenite Skin Care Products: Naturally|What Serenite Skin Care Products Can Do)/i,
    pair: [
      ["morpheus8", "Morpheus8", "Support skin as collagen rebuilds after treatment."],
      ["attiva", "Attiva", "Keep tightened skin hydrated and nourished."],
      ["facials", "Facials and peels", "Extend the glow of your in-clinic facial."]
    ],
    faq: [
      ["Where can I buy Serenite Skin Care?", "Shop online at our store or pick up products at your next visit to the clinic."],
      ["Is it safe for sensitive skin?", "Yes. The line is formulated to be gentle, without parabens or sulfates."],
      ["Which products should I use after a treatment?", "Ask your clinician at your visit. We will match products to your treatment and skin type."]
    ]
  }
};

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const src = n => (n.includes("/") ? n : `img/${n}.jpg`);
const IMAGE_SIZES = {"img/ador.jpg":[467,350],"img/attiva-ba-abdomen.jpg":[1100,619],"img/attiva-ba-eyes.jpg":[1100,619],"img/attiva-ba-neck.jpg":[1100,619],"img/attiva-device.jpg":[302,351],"img/attiva-thermal.jpg":[467,350],"img/band-model.jpg":[1600,653],"img/dr-heidi.jpg":[467,350],"img/face-portrait.jpg":[325,485],"img/facial.jpg":[467,350],"img/hair-ba.jpg":[800,400],"img/hair-scalp.jpg":[302,351],"img/hair-tools.jpg":[302,351],"img/hair-wash.jpg":[467,350],"img/logo-light.png":[415,153],"img/logo.png":[415,153],"img/m8-cheek.jpg":[300,302],"img/m8-jaw.jpg":[302,351],"img/m8-neck.jpg":[467,350],"img/o/1-7fad0.jpg":[1100,425],"img/o/2-28dd1.jpg":[1100,425],"img/o/AnteAGE_HairB_A_HMN_HomeHair_1_HQ_93f72e-9c225.jpg":[800,400],"img/o/AnteAGE_HairB_A_HMN_HomeHair_2B_HQ_d2f8d-6590c.jpg":[800,400],"img/o/AnteAGE_HairB_A_HMN_HomeHair_3A_HQ_2b26d-39fea.jpg":[800,400],"img/o/AnteAGE_HairB_A_HMN_HomeHair_4_HQ_499838-a685d.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_11B_HQ_800x-0d835.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_1_HQ_4b1fff2a-8ffa-48-2206f.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_2_HQ_2ad15351-6b50-4a-2279c.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_5B_HQ_f1f7f9dd-61ba-4-08961.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_6_HQ_629d5dbf-e8dc-4a-5b03c.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_7_HQ_3225e227-44bc-48-d99a5.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_8_HQ_800x-b2acb.jpg":[800,400],"img/o/AnteAGE_HairB_A_MN_9_HQ_800x-cc65e.jpg":[800,400],"img/o/american-express-d5565.png":[65,41],"img/o/attiva-image1-f2174.jpg":[467,350],"img/o/attiva-image2-89356.jpg":[302,351],"img/o/attiva-image3-54ca8.jpg":[300,302],"img/o/attiva-image4-a1b67.jpg":[445,397],"img/o/attiva-logo-20b36.png":[500,131],"img/o/attiva-slide-1-78348.jpg":[1100,619],"img/o/attiva-slide-2-62623.jpg":[1100,619],"img/o/attiva-slide-3-2425b.jpg":[1100,619],"img/o/attiva-slide-4-f3423.jpg":[1100,619],"img/o/attiva-slide-5-a84c7.jpg":[1100,619],"img/o/attiva-slide-6-6d8d3.jpg":[1100,619],"img/o/attiva-slide-7-d4cba.jpg":[1100,619],"img/o/btm1-21111514635Ue2853i-fea6c.jpg":[325,485],"img/o/btm1-2172630320U435t70-0321c.jpg":[325,485],"img/o/btm1-2172633150U794m53-f2a77.jpg":[325,485],"img/o/btm1-2172644928U2m6i0s-71e93.jpg":[325,485],"img/o/btm1-22102133936U938a61-a9ca0.jpg":[325,485],"img/o/btm1-22110315235U85e14t-f8750.jpg":[325,485],"img/o/btm1-22209122902Us9m0a3-d6b32.jpg":[325,485],"img/o/btm1-2221713344U52aei7-0d242.jpg":[325,485],"img/o/btm1-2222192824U56470a-e8b5b.jpg":[325,485],"img/o/btm1-23103123810U65a1s7-7bfc3.jpg":[325,485],"img/o/btm1-2310524928Ue26ias-a0325.jpg":[325,485],"img/o/btm1-231221110527U273tes-7b929.jpg":[325,485],"img/o/btm1-23410111609Us274i0-11399.jpg":[325,485],"img/o/btm1-236542772-a336a.jpg":[325,485],"img/o/btm1-2381611346U1is0e2-e1a5f.jpg":[325,485],"img/o/btm1-2382911532U93e46s-bcc07.jpg":[325,485],"img/o/btm1-2411110211U3m57se-248a1.jpg":[325,485],"img/o/btm1-24527112835Ua01547-08c47.jpg":[325,485],"img/o/btm1-449403043-3c7ee.jpg":[325,485],"img/o/btm1_box_img11-3b09c.jpg":[325,485],"img/o/btm1_box_img2-86f53.jpg":[325,485],"img/o/btm1_box_img3-1e685.jpg":[325,485],"img/o/btm3_box1-4738f.jpg":[393,460],"img/o/btm3_box2-a290f.jpg":[393,460],"img/o/btm3_box3-e6f3d.jpg":[393,460],"img/o/btm3_box4-6a1ae.jpg":[393,460],"img/o/btm5-img1-ce7fa.jpg":[526,325],"img/o/btm5-img2-f43e3.jpg":[526,325],"img/o/btm5-img3-5358a.jpg":[526,325],"img/o/discover-a837b.png":[65,41],"img/o/dr-ador-mansat-8ea38.jpg":[467,350],"img/o/dr-heidi-regenass-1-380f7.jpg":[467,350],"img/o/fb-icon-3839e.png":[37,37],"img/o/footer_rate-12140.jpg":[436,164],"img/o/instagram-icon-3e9ca.png":[37,37],"img/o/logos-1be86.png":[800,129],"img/o/lumecca-before-after-8445-med-spa-previe-6fa4a.jpg":[1100,475],"img/o/lumecca-before-after-dr-h-roberts-previe-24f2b.jpg":[1100,487],"img/o/lumecca-before-after-dr-h-roberts-previe-3a29f.jpg":[1100,789],"img/o/lumecca-before-after-dr-h-roberts-previe-4e30e.jpg":[1100,906],"img/o/lumecca-before-after-dr-l-hartman-previe-9cc3c.jpg":[688,311],"img/o/lumecca-before-after-dr-l-hartman-previe-b38a8.jpg":[714,310],"img/o/lumecca-before-after-dr-m-taylor-preview-617fb.jpg":[476,272],"img/o/lumecca-before-after-dr-m-taylor-preview-b1288.jpg":[384,267],"img/o/lumecca-before-after-dr-m-taylor-preview-c9a56.jpg":[384,267],"img/o/lumecca-before-after-dr-toni-burke-cosme-dee19.jpg":[1100,856],"img/o/lumecca-before-after-dr-toni-burke-cosme-e610c.jpg":[1100,779],"img/o/lumecca-before-after-lauren-abramowitz-r-9d7b0.jpg":[1100,1100],"img/o/lumecca-before-after-lux-skin-lab-previe-722f2.jpg":[1100,475],"img/o/lumecca-before-after-lux-skin-lab-previe-d1264.jpg":[1100,475],"img/o/lumecca1-aeac4.jpg":[445,468],"img/o/lumecca2-25917.jpg":[302,303],"img/o/lumecca3-bfe24.jpg":[445,468],"img/o/lumecca4-92250.jpg":[302,303],"img/o/mastercard-3e3a9.png":[65,41],"img/o/morpheus8-logo-bea4f.png":[800,131],"img/o/morpheus8-sec1-img-1-42de4.jpg":[467,350],"img/o/morpheus8-sec1-img-2-c301b.jpg":[302,351],"img/o/morpheus8-sec3-img-1-d2e13.jpg":[300,302],"img/o/morpheus8-sec3-img-2-c13ed.jpg":[445,397],"img/o/paypal-dbb85.png":[65,41],"img/o/qr-1f5fd.png":[800,800],"img/o/thumb-100108361-921c6.jpg":[302,351],"img/o/thumb-1041373417-e6585.jpg":[300,302],"img/o/thumb-116344397-a6f51.jpg":[467,350],"img/o/thumb-137818778-f3095.jpg":[467,350],"img/o/thumb-150555911-944e2.jpg":[445,397],"img/o/thumb-1559872667-5a1ce.jpg":[467,350],"img/o/thumb-161447406-95ca8.jpg":[467,350],"img/o/thumb-161745336-d2089.jpg":[445,397],"img/o/thumb-162498106-4739b.jpg":[445,397],"img/o/thumb-1676154958-b22d1.jpg":[300,302],"img/o/thumb-169682885-d8d55.jpg":[445,397],"img/o/thumb-173972051-f807a.jpg":[467,350],"img/o/thumb-177784327-c9826.jpg":[467,350],"img/o/thumb-17918531-6828e.jpg":[445,397],"img/o/thumb-181443529-525ee.jpg":[302,351],"img/o/thumb-1907135956-fea63.jpg":[300,302],"img/o/thumb-1911727348-e6ffb.jpg":[300,302],"img/o/thumb-2041974179-a6696.jpg":[302,351],"img/o/thumb-204857167-a00b1.jpg":[300,302],"img/o/thumb-20730149-e2f67.jpg":[467,350],"img/o/thumb-211208114235Uea6s81-d9d6b.jpg":[467,350],"img/o/thumb-2127115895-df72b.jpg":[467,350],"img/o/thumb-213366151-35f97.jpg":[302,351],"img/o/thumb-214074611-ebc4e.jpg":[302,351],"img/o/thumb-21716113644U3aes59-5d43c.jpg":[300,302],"img/o/thumb-2172611815U53s109-77c36.jpg":[300,302],"img/o/thumb-218664293-e3acf.jpg":[302,351],"img/o/thumb-22102133901U2078et-d9e0f.jpg":[445,397],"img/o/thumb-22102134057U497am6-2c656.jpg":[302,351],"img/o/thumb-2212760430U0s24t9-3fdb2.jpg":[445,397],"img/o/thumb-2230444818U61i9ta-457e3.jpg":[302,351],"img/o/thumb-2271324859U6e375t-00429.jpg":[445,397],"img/o/thumb-227692381-ba676.jpg":[445,397],"img/o/thumb-23410111609Us274i0-7d4fa.jpg":[467,350],"img/o/thumb-2341340757U9emi13-79ce1.jpg":[445,397],"img/o/thumb-2371311607U62amts-76c0e.jpg":[467,350],"img/o/thumb-240603233-34306.jpg":[445,397],"img/o/thumb-2410212320Ue145am-e2c08.jpg":[302,351],"img/o/thumb-24123102944U643t1m-bfef4.jpg":[300,302],"img/o/thumb-24145648-11150.jpg":[302,351],"img/o/thumb-24424105839U1476ts-c3a3d.jpg":[300,302],"img/o/thumb-24424105850Ue904ai-dadbe.jpg":[445,397],"img/o/thumb-2450842529U23a761-9c5bf.jpg":[302,351],"img/o/thumb-2450842544Uie145s-b9b51.jpg":[300,302],"img/o/thumb-24522104847U9s1a05-8f9db.jpg":[302,351],"img/o/thumb-2452490529Us24i57-65bfd.jpg":[467,350],"img/o/thumb-24529124348U3am502-9e21a.jpg":[467,350],"img/o/thumb-253477555-6dd65.jpg":[445,397],"img/o/thumb-27202133-3a116.jpg":[467,350],"img/o/thumb-27387557-1d85a.jpg":[302,351],"img/o/thumb-31423634-fbad5.jpg":[300,302],"img/o/thumb-319723513-273d3.jpg":[445,397],"img/o/thumb-339499739-c38ca.jpg":[302,351],"img/o/thumb-393550841-71f1c.jpg":[302,351],"img/o/thumb-433221062-bd1de.jpg":[300,302],"img/o/thumb-472159589-bafc0.jpg":[467,350],"img/o/thumb-4751995-7bb7e.jpg":[300,302],"img/o/thumb-51325312-2621f.jpg":[445,397],"img/o/thumb-526933915-0e924.jpg":[300,302],"img/o/thumb-98381505-32947.jpg":[300,302],"img/o/visa-6ad8d.png":[65,41],"img/o/yt-icon-a2332.png":[37,37],"img/skin-dropper.jpg":[467,350],"img/skin-jars.jpg":[302,351],"img/skin-rose.jpg":[445,397],"img/v/attiva-promo.jpg":[720,405],"img/v/hero-bg.jpg":[720,294],"img/v/patient-1.jpg":[405,720],"img/v/patient-10.jpg":[405,720],"img/v/patient-2.jpg":[405,720],"img/v/patient-3.jpg":[405,720],"img/v/patient-4.jpg":[405,720],"img/v/patient-5.jpg":[405,720],"img/v/patient-6.jpg":[405,720],"img/v/patient-7.jpg":[405,720],"img/v/patient-8.jpg":[405,720],"img/v/patient-9.jpg":[405,720],"img/v/welcome-popup.jpg":[720,480]};
const HD_PHOTOS = {
  hero: "img/hd/attiva-banner.jpg",
  morpheus8: "img/hd/morpheus8-banner.jpg",
  attiva: "img/hd/attiva-banner.jpg",
  hair: "img/hd/hair-banner.jpg"
};
Object.values(HD_PHOTOS).forEach(path => { IMAGE_SIZES[path] = [1920, 600]; });
const img = (n, alt, attrs = "") => {
  const url = src(n), size = IMAGE_SIZES[url];
  const dimensions = size ? ` width="${size[0]}" height="${size[1]}"` : "";
  const loading = /\bloading\s*=/.test(attrs) ? "" : ' loading="lazy"';
  return `<img src="${url}" alt="${esc(alt || "")}"${dimensions}${loading} decoding="async" ${attrs}>`;
};
const go = (p, label, cls = "", anchor = "") => `<a href="${esc(routeUrl(state.v,p,anchor))}" data-go="${p}"${anchor ? ` data-anchor="${anchor}"` : ""}${cls ? ` class="${cls}"` : ""}>${label}</a>`;
const ext = (href, label, cls = "") => `<a href="${href}" target="_blank" rel="noopener"${cls ? ` class="${cls}"` : ""}>${label}</a>`;
const bookBtn = (label = "Book a consultation") => go("book", label, "btn btn-primary");
const secHd = (eyebrow, title, sub = "") => `<header class="sec-hd">${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}<h2>${title}</h2>${sub ? `<p class="lead">${sub}</p>` : ""}</header>`;
const video = (v, attrs = "") => `<video class="vid" controls playsinline preload="none" poster="${v.poster}" src="${v.src}" ${attrs}></video>`;
const dropBracketed = t => t.split(/(?<=[.!?])\s+/).filter(x => !/\[[^\]]*\]/.test(x)).join(" ");
const ICON = {
 info:'<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>',
 menu:'<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
 arrow:'<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>',
 chevron:'<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>',
 external:'<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14 4h6v6m0-6L9 15M10 4H4v16h16v-6"/></svg>',

  search: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  user: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  cart: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
  sparkle: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/></svg>',
  shield: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  clock: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  heart: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  leaf: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z"/><path d="M5 19l7-7"/></svg>',
  drop: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  star: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
  tag: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/></svg>',
  pin: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  phone: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>',
  mail: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  calendar: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  play: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/></svg>',
  close: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  left: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7"/></svg>',
  right: '<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7"/></svg>'
};
const ICON_RULES = [
  [/risk|complication|evidence|limitation|suitability|assess|safe|clinical|skin type|results|effective/i, "info"],
  [/price|cost|starting|value|afford/i, "tag"],
  [/time|downtime|minute|schedule|booking|recovery/i, "clock"],
  [/nutri|meal|ingredient|natural|eco/i, "leaf"],
  [/hydrat|moist|iv |fluid|drip/i, "drop"],
  [/goal|confiden|self|well-being|relationship/i, "heart"],
  [/location|area|where/i, "pin"]
];
const iconFor = text => ICON[(ICON_RULES.find(([re])=>re.test(text)) || [null,"info"])[1]];
const ico = (text, i) => `<span class="ico" aria-hidden="true">${iconFor(text, i)}</span>`;
/* "Welcome to X: The Future of Y" becomes a short headline plus a subtitle; no words are dropped */
function splitHead(h) {
  const i = h.indexOf(": ");
  if (i < 0) return { main: h, sub: "" };
  const a = h.slice(0, i), b = h.slice(i + 2);
  if (/^(welcome|discover|reveal|testimonial)/i.test(a) || a.length > b.length * 1.6) return { main: b, sub: a };
  return { main: a, sub: b };
}

let state = { v: "a", p: "home" };

/* One route catalog drives native links, static pages and client navigation. */
function routeUrl(v, p, anchor = "") {
  const path = (ROUTES[p] || ROUTES.home).path;
  const params = new URLSearchParams();
  if (v !== "a" && VERSIONS[v]) params.set("design", v);
  if (new URLSearchParams(location.search).get("review") === "1") params.set("review", "1");
  return path + (params.size ? "?" + params : "") + (anchor ? "#" + encodeURIComponent(anchor) : "");
}
function rootAssets(html) {
  return html.replace(/\b(src|poster|href)="((?:img|video|fonts)\/[^"<>]*)"/g, '$1="/$2"');
}
function breadcrumbItems(p, origin = location.origin) {
  const route = ROUTES[p];
  const items = [{ name: "Home", url: new URL("/", origin).href, key: "home" }];
  if (p === "home") return items;
  if (route.group === "Beauty" || route.group === "Longevity") {
    const anchor = route.group.toLowerCase();
    items.push({ name: route.group, url: new URL("/#" + anchor, origin).href, key: "home", anchor });
  } else if (p.startsWith("t-")) items.push({ name: "Our team", url: new URL(ROUTES.team.path, origin).href, key: "team" });
  items.push({ name: route.label, url: new URL(route.path, origin).href, key: p });
  return items;
}
function breadcrumbs() {
  if (state.p === "home") return "";
  const items = breadcrumbItems(state.p);
  return `<nav class="breadcrumbs wrap" aria-label="Breadcrumb"><ol>${items.map((item,i) => `<li>${i === items.length-1 ? `<span aria-current="page">${esc(item.name)}</span>` : go(item.key,esc(item.name),"",item.anchor || "")}</li>`).join("")}</ol></nav>`;
}
function seoMeta(p, origin = location.origin) {
  const route = ROUTES[p];
  const url = new URL(route.path, origin).href;
  const clinicId = new URL("/#clinic", origin).href;
  const graph = [
    { "@type":"MedicalClinic", "@id":clinicId, name:"Serenité Wellness Medicine", url:new URL("/",origin).href,
      logo:new URL("/img/logo.svg",origin).href, telephone:"+1-909-947-1216",
      address:{ "@type":"PostalAddress", streetAddress:SITE.addr1, addressLocality:"Ontario", addressRegion:"CA", postalCode:"91761", addressCountry:"US" } },
    { "@type":"WebPage", "@id":url+"#webpage", url, name:route.title, description:route.description, inLanguage:"en", about:{"@id":clinicId} }
  ];
  if (p !== "home") graph.push({ "@type":"BreadcrumbList", "@id":url+"#breadcrumb", itemListElement:breadcrumbItems(p,origin).map((item,i)=>({"@type":"ListItem",position:i+1,name:item.name,item:item.url})) });
  return { title:route.title, description:route.description, url, image:new URL("/img/social-preview.jpg",origin).href, schema:{"@context":"https://schema.org","@graph":graph} };
}
function updateMetadata() {
  const meta = seoMeta(state.p);
  document.title = meta.title;
  const setMeta = (selector,value) => { const node=document.querySelector(selector); if(node) node.setAttribute("content",value); };
  setMeta('meta[name="description"]',meta.description);
  setMeta('meta[property="og:title"]',meta.title);
  setMeta('meta[property="og:description"]',meta.description);
  setMeta('meta[property="og:url"]',meta.url);
  setMeta('meta[property="og:image"]',meta.image);
  setMeta('meta[name="twitter:title"]',meta.title);
  setMeta('meta[name="twitter:description"]',meta.description);
  setMeta('meta[name="twitter:image"]',meta.image);
  document.querySelector('link[rel="canonical"]').href=meta.url;
  document.getElementById("page-schema").textContent=JSON.stringify(meta.schema);
}
function teamOverview() {
  return pageHead("Our team","People at Serenité","Meet the clinic’s existing clinicians and staff, then read their individual profiles.") +
    `<section class="sec"><div class="wrap">${teamGrid(TEAM)}</div></section>` + cta() + visit();
}
function relatedPages() {
  const keys = ROUTES[state.p]?.related || [];
  if (!keys.length) return "";
  return `<section class="sec sec-alt related-pages"><div class="wrap">${secHd("More to explore","Keep useful information close.","Compare the listed services, check costs or meet the team before your consultation.")}<ul class="related-list">${keys.map(key=>`<li>${go(key,esc(ROUTES[key].label)+" "+ICON.arrow)}</li>`).join("")}</ul></div></section>`;
}
function siteMarkup() {
  return rootAssets(header() + `<main id="main-content" data-page="${esc(state.p)}" tabindex="-1">${breadcrumbs()}${page()}${relatedPages()}</main>` + footer());
}


/* ---------- flyouts: open beside the control, right if room, else left ---------- */

let fly=null,flyAnchor=null,flyReturnFocus=null;
function closeFly(restoreFocus=false){
 const back=flyReturnFocus,panel=fly;fly=null;panel?.remove();
 document.querySelectorAll("[data-search]").forEach(el=>el.setAttribute("aria-expanded","false"));
 flyAnchor=null;flyReturnFocus=null;if(restoreFocus&&back?.isConnected)back.focus();
}
function placeBeside(el){
 const hd=document.querySelector(".hd").getBoundingClientRect();
 el.style.top=(hd.bottom+8)+"px";el.style.right="16px";
 el.style.maxHeight=Math.max(120,innerHeight-hd.bottom-24)+"px";
}
function openFly(anchor,html){
 closeFly();flyReturnFocus=anchor.closest(".mobile-nav")?document.querySelector("[data-mobile-toggle]"):anchor;
 closeMobileMenu();document.querySelectorAll(".nav-group[open]").forEach(d=>d.open=false);
 fly=document.createElement("section");fly.className="flyout search-panel";fly.setAttribute("aria-label","Site search");fly.innerHTML=html;
 document.querySelector(".hd").appendChild(fly);flyAnchor=anchor;
 document.querySelectorAll("[data-search]").forEach(el=>el.setAttribute("aria-expanded","true"));
 placeBeside(fly);return fly;
}
function menuHtml(i){
 const n=NAV[i],cards=Object.fromEntries([...CARDS.beauty,...CARDS.longevity].map(c=>[c[0],c]));
 return `<ul class="nav-rich">${n.menu.map(([p,l])=>{
 const c=cards[p],thumb=c?img(H.cardImgs[c[3]],""):"",meta=c?c[2]:"";
 return `<li><a href="${esc(routeUrl(state.v,p))}" data-go="${p}"${p===state.p?' aria-current="page"':""}><span class="fly-thumb">${thumb}</span><span class="fly-text"><strong>${esc(l)}</strong>${meta?`<small>${esc(meta)}</small>`:""}</span></a></li>`;
 }).join("")}</ul>`;
}
function searchHtml(){
 return `<label class="fly-label" for="site-search">Search the site</label><div class="search-field">${ICON.search}<input id="site-search" type="search" placeholder="Treatment, pricing or location" autocomplete="off"><button type="button" data-clear-search>Clear</button></div><p id="search-status" role="status" aria-live="polite"></p><div id="search-results"></div>`;
}
function runSearch(q){
 const box=document.getElementById("search-results");if(!box)return;
 q=q.trim().toLowerCase();const all=Object.keys(TITLES).map(k=>[k,TITLES[k]]);
 const hits=q?all.filter(([k,t])=>t.toLowerCase().includes(q)||k.includes(q)):all.filter(([k])=>CURATED[k]||GROUP[k]).slice(0,8);
 document.getElementById("search-status").textContent=hits.length?`${hits.length} ${hits.length===1?"page":"pages"} found.${hits.length>12?" Showing the first 12.":""}`:"No pages found. Try one of these starting points.";
 box.innerHTML=hits.length?hits.slice(0,12).map(([k,t])=>`<a href="${esc(routeUrl(state.v,k))}" data-go="${k}" data-search-hit>${esc(t)}</a>`).join(""):`<p class="fly-empty">Try a treatment name, or browse pricing and location details.</p>${go("pricing","Pricing")}${go("location","Location and hours")}`;
}

/* Client approved the supplied prices, credentials, designations, ratings and media
   on October 26, 2026. This does not establish scientific substantiation. */
Object.assign(LP.morpheus8, {
  h1: "Explore Morpheus8 <em>for your skin.</em>",
  badges: ["Morpheus8 Center of Excellence", "Individual assessment"],
  lead: "Morpheus8 combines microneedling with radiofrequency energy. Discuss your skin, treatment goals, possible benefits, risks and alternatives with a qualified clinician before deciding.",
  facts: [["Starting at", "$1,200"], ["Approach", "RF microneedling"], ["Suitability", "Individual assessment"], ["Recovery", "Varies by treatment"]],
  benefitsEyebrow: "Start with the right questions", benefitsTitle: "Make an informed choice.",
  benefits: [["Your goals", "Discuss the changes you hope to see and what may be realistic."], ["Your skin", "Review skin type, treatment history and factors that may affect suitability."], ["Risks and recovery", "Ask about possible complications, discomfort, downtime and aftercare."], ["Your plan", "Understand the proposed area, number of sessions, costs and alternatives."]],
  steps: [["Assess", "Review your goals, skin and relevant history with a clinician."], ["Discuss", "Talk through potential benefits, limitations and risks."], ["Prepare", "Ask which comfort measures and precautions are appropriate."], ["Plan aftercare", "Understand recovery instructions and when to seek help."]],
  faq: [["Does Morpheus8 hurt?", "Discomfort varies. Ask your clinician about appropriate comfort measures and what to expect during and after treatment."], ["How much does it cost?", "Listed sessions start at $1,200 for the face, neck or underarms and $2,000 for the body. Your clinician confirms the proposed plan and total cost."], ["How much recovery time should I plan for?", "Recovery varies by the treatment area, settings and individual. Ask about downtime, aftercare and possible complications before proceeding."], ["Is it suitable for every skin tone?", "Suitability requires an individual assessment. No procedure is free of risk, including the possibility of pigment changes or scarring."]]
});
Object.assign(LP.attiva, {
  badges: ["Attiva Center of Excellence", "Individual assessment"],
  lead: "Attiva uses radiofrequency energy for aesthetic skin treatment. Ask a qualified clinician about suitability, the proposed technique, possible benefits, risks and recovery for your treatment area.",
  facts: [["Starting at", "$2,000"], ["Approach", "Radiofrequency"], ["Suitability", "Individual assessment"], ["Recovery", "Varies by treatment"]],
  benefitsTitle: "Understand the proposed treatment.",
  benefits: [["Your goals", "Explain the changes you would like to discuss."], ["The technique", "Ask how the treatment is performed and what it involves."], ["Comfort and recovery", "Discuss discomfort, aftercare, downtime and possible complications."], ["Expected results", "Ask what may be realistic for you. Outcomes are not guaranteed."]],
  steps: [["Assess", "Discuss your goals and relevant history."], ["Compare", "Consider treatment options and alternatives."], ["Understand", "Review the proposed technique, risks and recovery."], ["Decide", "Take time to consider the plan and costs."]],
  faq: [["How does it differ from Morpheus8?", "Both use radiofrequency, but the techniques and proposed uses differ. A qualified clinician should explain which option, if any, fits your goals."], ["Will it be comfortable?", "Discomfort and recovery vary. Discuss appropriate comfort measures and risks before treatment."], ["What does Attiva cost?", "Listed sessions start at $2,000 for the neck and $4,500 for the face. Your clinician confirms the treatment plan and total cost."], ["When will I see results?", "The timing and degree of change vary. Ask your clinician what may be realistic for the proposed treatment."]]
});
Object.assign(LP.hair, {
  h1: "Understand your <em>hair-care options.</em>",
  badges: ["Consultation first", "Discuss evidence and risks"],
  lead: "Start with an assessment of thinning hair and scalp health. Discuss possible approaches, the evidence behind them, limitations, costs and follow-up with a qualified clinician.",
  facts: [["First step", "Consultation"], ["Suitability", "Individual assessment"], ["Results", "Not guaranteed"], ["Home care", "Discuss your routine"]],
  benefitsEyebrow: "Questions worth asking", benefitsTitle: "A plan built around your questions.",
  benefits: [["Possible causes", "Ask about factors that may contribute to thinning hair."], ["Available options", "Compare the evidence, limitations and regulatory status of each option."], ["Costs and follow-up", "Understand the proposed costs and any ongoing care."], ["Realistic expectations", "Discuss uncertainty and how progress would be assessed."]],
  steps: [["Assess", "Talk through your scalp, hair concerns and relevant history."], ["Compare", "Ask about potential options, evidence and alternatives."], ["Review", "Understand possible risks, limitations and costs."], ["Choose", "Decide on a next step after reviewing the information."]],
  pricing: { title: "Listed hair-treatment pricing", note: "Existing service pricing retained for client review. A listing is not an FDA approval or efficacy claim; discuss evidence, regulatory status and suitability before treatment.", rows: [["Exosome scalp treatment", "$1,500"], ["Serenite hair care products", "Varies"]] },
  faq: [["Where should I start?", "Discuss your concerns and possible contributing factors with a qualified clinician before choosing a treatment."], ["Are exosome products FDA-approved?", "The FDA states that there are no FDA-approved exosome products. Ask about regulatory status, evidence, risks and alternatives."], ["Can hair growth be guaranteed?", "No. Results depend on the cause of thinning and the approach taken. Review realistic expectations before deciding."], ["Is there recovery time?", "Recovery depends on the specific approach. Ask about discomfort, downtime and aftercare rather than assuming there is none."]]
});

FEATURED.slice(0,3).forEach(item => {
  item.img=HD_PHOTOS[item.p];
  item.alt={morpheus8:"Illustrative aesthetic consultation",attiva:"Illustrative skin-care portrait",hair:"Illustrative scalp-care procedure"}[item.p];
});
LP.morpheus8.imgs[0]=[HD_PHOTOS.morpheus8,"Illustrative aesthetic consultation"];
LP.attiva.imgs[0]=[HD_PHOTOS.attiva,"Illustrative skin-care portrait"];
LP.hair.imgs[0]=[HD_PHOTOS.hair,"Illustrative scalp-care procedure"];

/* ---------- shared blocks ---------- */


function header(){
 const logo=state.v==="c"?"logo-light.svg":"logo.svg";
 const links=NAV.map((n,i)=>n.menu?`<details class="nav-group"><summary class="nav-dd">${n.label}${ICON.chevron}</summary>${menuHtml(i)}</details>`:go(n.p,n.label)).join("");
 const mobileLinks=NAV.map(n=>n.menu?`<details><summary>${n.label}${ICON.chevron}</summary>${n.menu.map(([p,l])=>go(p,esc(l))).join("")}</details>`:go(n.p,n.label)).join("");
 return `<header class="hd"><div class="wrap hd-in"><a class="brand" href="${esc(routeUrl(state.v,"home"))}" data-go="home"><img src="img/${logo}" alt="Serenite Wellness Medicine" width="114" height="42"></a>
 <nav class="nav" aria-label="Main">${links}</nav><div class="hd-cta"><div class="hd-icons"><button type="button" class="icon-btn" data-search aria-label="Search" aria-expanded="false">${ICON.search}</button></div>${bookBtn()}
 <button type="button" class="mobile-toggle" data-mobile-toggle aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">${ICON.menu}</button></div></div>
 <nav class="mobile-nav" id="mobile-menu" aria-label="Mobile navigation" hidden>${go("home","Home")}${mobileLinks}<button type="button" data-search aria-expanded="false">Search the site${ICON.search}</button>
 ${go("membership","Membership")}${go("mobile","Mobile Clinic")}${go("news","News")}<div class="mobile-utilities">${ext(SITE.store,"Store "+ICON.external)}${ext(SITE.account,"Clinic account "+ICON.external)}${ext(SITE.cart,"Clinic cart "+ICON.external)}</div></nav></header>`;
}
function closeMobileMenu(restoreFocus=false){
 const menu=document.getElementById("mobile-menu"),button=document.querySelector("[data-mobile-toggle]");
 if(!menu||!button)return;menu.hidden=true;button.setAttribute("aria-expanded","false");button.setAttribute("aria-label","Open menu");button.innerHTML=ICON.menu;if(restoreFocus)button.focus();
}
function reviewUrl(){
 const url=new URL(location.href);if(url.searchParams.has("review"))url.searchParams.delete("review");else url.searchParams.set("review","1");
 return url.pathname+url.search+url.hash;
}

function facts(list) {
  return `<dl class="facts">${list.map(([k, v], i) => `<div><dt>${ico(k + " " + v, i)}${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`;
}

function landingHero(d) {
  const long = d.h1.replace(/<[^>]+>/g, "").length > 64 ? " long" : "";
  const media = `<div class="lh-media">${d.imgs.map(([n, a]) => img(n, a, 'loading="eager"')).join("")}</div>`;
  const copy = `<div class="lh-copy">
      <p class="eyebrow">${d.eyebrow}</p>
      <h1 class="${long}">${d.h1}</h1>
      ${d.sub ? `<p class="h1-sub">${d.sub}</p>` : ""}
      ${d.lead ? `<p class="lead">${d.lead}</p>` : ""}
      ${state.v === "b" && d.badges ? `<div class="badges">${d.badges.map(b => `<span>${b}</span>`).join("")}</div>` : ""}
      <div class="actions">${bookBtn()}${state.v === "b" || !d.pricingLink ? "" : `<a class="btn btn-ghost" href="#pricing" data-anchor="pricing">See pricing</a>`}</div>
    </div>`;
  if (state.v === "b") {
    return `<section class="lh"><div class="wrap">
      <div class="lh-in">${copy}
        <aside class="lh-card" aria-label="At a glance"><h2>At a glance</h2>${facts(d.facts)}${bookBtn("Book a consultation")}<small>Call ${SITE.phone}. ${SITE.hours}</small></aside>
      </div>
      ${d.imgs.length ? `<div class="lh-photos">${d.imgs.map(([n, a]) => img(n, a, 'loading="eager"')).join("")}</div>` : ""}
    </div></section>`;
  }
  if (state.v === "c") {
    return `<section class="lh"><div class="wrap lh-in">${copy}${d.imgs.length ? media : ""}</div></section>
      <div class="facts-band"><div class="wrap">${facts(d.facts)}</div></div>`;
  }
  return `<section class="lh"><div class="wrap"><div class="lh-in${d.imgs.length ? "" : " solo"}">${copy}${d.imgs.length ? media : ""}</div>${facts(d.facts)}</div></section>`;
}

function benefits(d, alt = false) {
  return `<section class="sec${alt ? " sec-alt" : ""}"><div class="wrap">${secHd(d.benefitsEyebrow, d.benefitsTitle)}
    <div class="benefits">${d.benefits.map(([h, p], i) => `<div class="benefit">${ico(h + " " + p, i)}<h3>${h}</h3><p>${p}</p></div>`).join("")}</div></div></section>`;
}

function steps(d, alt = false) {
  if (!d.steps) return "";
  return `<section class="sec${alt ? " sec-alt" : ""}"><div class="wrap">${secHd("What to expect", "Your visit, step by step")}
    <ol class="steps">${d.steps.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join("")}</ol></div></section>`;
}

function why(d, cls = "") {
  const w = d.why;
  const act = w.shop
    ? `<div class="actions">${ext(SITE.store, "Shop the store", "btn btn-primary")}${w.more ? go(w.more, "See the hair care line", "btn btn-ghost") : go("book", "Ask at your visit", "btn btn-ghost")}</div>`
    : `<div class="actions">${bookBtn()}</div>`;
  return `<section class="sec ${cls}"><div class="wrap split">
    <div class="split-copy"><p class="eyebrow">${w.eyebrow}</p><h2>${w.title}</h2><p class="muted">${w.body}</p>
      <ul class="checks">${w.checks.map(c => `<li>${c}</li>`).join("")}</ul>${act}</div>
    <div class="split-media">${img(w.img[0], w.img[1])}</div></div></section>`;
}

function pricing(d, cls = "") {
  const pr = d.pricing;
  if (!pr) return "";
  const table = `<div class="price-wrap"><table class="price"><caption>${pr.note}</caption><tbody>${pr.rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join("")}</tbody></table></div>`;
  return `<section class="sec ${cls}" id="pricing"><div class="wrap split">
    <div class="split-copy"><p class="eyebrow">Pricing</p><h2>${pr.title}</h2>
      <p class="muted">Members save on every treatment. Ask about Gold, Platinum, Emerald and Diamond plans.</p>
      <div class="actions">${bookBtn()}${go("membership", "Compare memberships", "btn btn-ghost")}</div></div>
    <div>${state.v === "b" ? `<div class="price-box">${table}</div>` : table}</div></div></section>`;
}

function quoteGrid(list, cls = "", eyebrow = "Patient stories", title = "In their words") {
  if (!list || !list.length) return "";
  const stars = state.v === "b" ? `<span class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>` : "";
  const n = list.length;
  return `<section class="sec ${cls}"><div class="wrap">${secHd(eyebrow, title)}
    <div class="quotes${n === 2 || n === 4 ? " two" : ""}">${list.map(([q, by, t]) => `<figure class="quote">${stars}${t ? `<h3 class="quote-title">${t}</h3>` : ""}<blockquote>${esc(q)}</blockquote>${by ? `<figcaption>${esc(by)}</figcaption>` : ""}</figure>`).join("")}</div></div></section>`;
}

function faq(d, cls = "") {
  return `<section class="sec ${cls}"><div class="wrap">${secHd("Questions", "Frequently asked")}
    <div class="faq">${d.faq.map(([q, a], i) => `<details${i === 0 ? " open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></div></section>`;
}

function standards(d) {
  if (!d.standards) return "";
  return `<section class="sec sec-alt"><div class="wrap">${secHd("The details", "What goes in, and what never does")}
    <div class="standards">${d.standards.map(s => `<span>${s}</span>`).join("")}</div></div></section>`;
}

function pair(d) {
  if (!d.pair) return "";
  return `<section class="sec"><div class="wrap">${secHd("Better together", "Pairs with your treatments")}
    <div class="pair">${d.pair.map(([p, t, s]) => `<a href="${esc(routeUrl(state.v,p))}" data-go="${p}"><strong>${t}</strong><span>${s}</span></a>`).join("")}</div></div></section>`;
}

function reel(items, wide = false) {
  const id = "reel-" + Math.random().toString(36).slice(2, 8);
  return `<div class="reel${wide ? " wide" : ""}" id="${id}" tabindex="0" aria-label="Scrollable gallery">${items.join("")}</div>
    <div class="reel-nav"><button type="button" data-reel="${id}" data-dir="-1" aria-label="Previous">&#8249;</button><button type="button" data-reel="${id}" data-dir="1" aria-label="Next">&#8250;</button></div>`;
}

function gallery(imgs, credit = "Individual results vary.") {
  return reel(imgs.map(p => `<figure>${img(p.src, p.alt || "Before and after result")}</figure>`), true) + `<p class="credit">${credit}</p>`;
}

function cta() {
  return `<section class="cta"><div class="wrap cta-in">
    <div><h2>Start with a consultation</h2><p>Meet our team, talk through your goals and get a plan with clear pricing. ${SITE.hours}</p></div>
    <div class="actions">${bookBtn("Book a consultation")}<a class="btn btn-ghost" href="tel:9099471216">Call ${SITE.phone}</a></div>
  </div></section>`;
}

function visit() {
  return `<section class="sec" id="visit"><div class="wrap">${secHd("Visit", "Find us in Ontario")}
    <div class="visit">
      <div><h3><span class="ico">${ICON.pin}</span>Address</h3><p>${SITE.addr1}<br>${SITE.addr2}</p><p class="gap-top">${go("location", "Map and directions")}</p></div>
      <div><h3><span class="ico">${ICON.clock}</span>Hours</h3><p>${SITE.hours}</p><p class="gap-top">Mobile clinic visits to your home or office are available. ${go("mobile", "Learn more")}</p></div>
      <div><h3><span class="ico">${ICON.phone}</span>Contact</h3><p class="tnum"><a href="tel:+19099471216">${SITE.phone}</a></p><p class="wrap-any"><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
    </div></div></section>`;
}

function footer() {
  const col = (h, items) => `<div><h4>${h}</h4><ul>${items.map(x => `<li>${x}</li>`).join("")}</ul></div>`;
  const m = H.misc;
  return `<footer class="ft"><div class="wrap">
    <div class="ft-in">
      <div><img src="img/logo-light.svg" alt="Serenite Wellness Medicine" width="125" height="46"><p>${SITE.addr1}<br>${SITE.addr2}</p><p class="gap-top tnum"><a href="tel:+19099471216">${SITE.phone}</a></p><p class="wrap-any"><a href="mailto:${SITE.email}">${SITE.email}</a></p><p class="gap-top">${go("location", "View map and directions")}</p></div>
      ${col("Explore", [go("home", "Home"), go("home", "Beauty", "", "beauty"), go("mobile", "Mobile Clinic"), go("home", "Longevity", "", "longevity"), go("team", "Team"), go("pricing", "Pricing"), go("membership", "Membership"), ext(SITE.store, "Store"), go("news", "News")])}
      ${col("Featured", [go("morpheus8", "Morpheus8"), go("attiva", "Attiva"), go("hair", "New hair growth"), go("skin", "Skin care products"), go("haircare", "Hair care products"), go("concepts", "Key concepts"), go("book", "Book a consultation")])}
      ${col("Follow", [ext(SITE.ig, "Instagram"), ext(SITE.fb, "Facebook"), ext(SITE.yt, "YouTube"), ext(SITE.account, "Clinic account"), ext(SITE.cart, "Clinic cart")])}
    </div>
    <div class="ft-base"><span>&copy; 2026 Serenite Wellness Medicine. Individual results vary.</span>${go("privacy", "Privacy Policy")}<a href="${esc(reviewUrl())}">${document.getElementById("review-tools").hidden?"Design review":"Hide review tools"}</a><span class="demo-footnote">Design preview. Demo forms do not send or store information.</span></div>
  </div></footer>`;
}

/* ---------- home ---------- */

function homeHero() {
  const portrait = `<div class="lh-media">${img(HD_PHOTOS.hero,"Illustrative skin-care portrait",'class="hero-portrait" loading="eager" fetchpriority="high"')}${img("skin-dropper", "Serenite facial serum", 'class="hero-product" loading="lazy"')}</div>`;
  const copy = `<div class="lh-copy"><p class="eyebrow hero-eyebrow"><span>Aesthetics and longevity</span><span>Ontario, California</span></p>
    <h1>Look younger.<br><em>Live younger, longer.</em></h1>
    <p class="lead">Serenite brings physician-led aesthetic treatments and wellness care together in one calm, personal clinic.</p>
    <div class="actions">${bookBtn()}${go("home", "Explore treatments "+ICON.arrow, "text-action", "treatments")}</div>
    <button type="button" class="watch-intro" data-watch-intro>${ICON.play}<span>Watch our introduction <small>${VID.popup.seconds} seconds · play when you’re ready</small></span></button>
    <div class="marks"><span>Morpheus8 Center of Excellence</span><span>Attiva Center of Excellence</span></div></div>`;
  return `<section class="lh home-hero"><div class="wrap"><div class="lh-in">${copy}${portrait}</div></div></section>`;
}

function trustBar() {
  return `<div class="trust"><div class="wrap trust-in">
    <img src="${H.misc.seenon}" alt="As seen on Fox News, CBS, NBC and ABC" width="800" height="129" loading="lazy">
    <div class="rating-summary" role="img" aria-label="Rated 5.0 out of 5, from more than 500 reviews"><span class="rating-score" aria-hidden="true">5.0</span><span class="rating-detail" aria-hidden="true"><span class="rating-stars">${ICON.star.repeat(5)}</span><span>500+ reviews</span></span></div>
  </div></div>`;
}


function featured() {
  return `<section class="sec" id="treatments"><div class="wrap">${secHd("Signature treatments", "Find your starting point", "Explore a few of our most-requested services, then talk through your goals with the team.")}
    <div class="tiles signature-tiles">${FEATURED.slice(0, 3).map(f => `<a class="tile" href="${esc(routeUrl(state.v,f.p))}" data-go="${f.p}"><span class="ph">${img(f.img, f.alt)}</span><div class="tile-body"><h3>${f.name}</h3><p>${f.blurb}</p><span class="more">Explore ${esc(f.name)} ${ICON.arrow}</span></div></a>`).join("")}</div>
    <div class="service-index"><details id="beauty"><summary>More aesthetic treatments</summary><ul>${CARDS.beauty.filter(c => !FEATURED.slice(0, 3).some(f => f.p === c[0])).map(c => `<li>${go(c[0], esc(c[1]))}</li>`).join("")}</ul></details>
    <details id="longevity"><summary>Wellness and longevity programs</summary><ul>${CARDS.longevity.map(c => `<li>${go(c[0], esc(c[1]))}</li>`).join("")}</ul></details></div>
  </div></section>`;
}

function serviceCards() {
  const card = ([p, t, from, i, blurb]) => `<a class="card" href="${esc(routeUrl(state.v,p))}" data-go="${p}"><span class="ph">${img(H.cardImgs[i], t)}</span>
    <span class="card-body"><h3>${t}</h3><span class="from">${from}</span><p>${blurb}</p></span></a>`;
  return `<section class="sec sec-alt" id="treatments"><div class="wrap">
    <div class="cards-group" id="beauty">${secHd("Beauty services", "Beauty Services", "Explore our range of services designed to enhance your well-being. Here, we offer comprehensive solutions tailored to your unique health and wellness needs.")}
      <div class="cards">${CARDS.beauty.map(card).join("")}</div></div>
    <div class="cards-group" id="longevity">${secHd("Longevity services", "Longevity Services", "Discover your path to longevity. Serenite offers personalized programs combining medicine, weight management, and cutting-edge therapies. Explore and invest in a longer, healthier you.")}
      <div class="cards">${CARDS.longevity.map(card).join("")}</div></div>
  </div></section>`;
}

function healthIs() {
  const blocks = [
    ["Wealth", "The truest form of wealth lies not in material possessions but in a healthy body and mind."],
    ["Beauty", "Beyond cosmetic appearances, genuine beauty emanates from a state of inner well-being."],
    ["Longevity", "Nurture your health. Good health is the foundation for a long, fulfilling, and happy life."],
    ["Wellness", "Health is not merely the absence of disease but the presence of vitality and well-being."]
  ];
  return `<section class="sec"><div class="wrap">${secHd("Key concepts", "What health means to us")}
    <div class="health">${blocks.map(([w, t]) => `<div><h3><small>Health</small>is ${w}</h3><p>${t}</p>${go("concepts", "Read more")}</div>`).join("")}</div></div></section>`;
}

function excellence() {
  return `<section class="sec sec-dark" id="excellence"><div class="wrap">
    ${secHd("Center of Excellence", "Our medical clinic is a Center of Excellence for Morpheus8 and Attiva")}
    ${spotlight(true)}
    <div class="split coe-split">
      <div class="split-copy"><img class="coe-logo" src="${H.misc.attlogo}" alt="Attiva" loading="lazy"><h2>Trained and certified for Attiva</h2>
        <p class="muted">Our Attiva team was trained and certified by Dr. Jack Zamora, MD, Medical Director of Attiva by Reveal Lasers, and Serenite was among the first clinics on the West Coast to offer it.</p>
        <ul class="checks"><li>Numbing cream and laughing gas for comfortable treatments</li><li>Physician and nurse practitioner oversight</li><li>Clear, published pricing</li></ul>
        <div class="actions">${go("morpheus8", "Morpheus8", "btn btn-ghost")}${go("attiva", "Attiva", "btn btn-ghost")}</div></div>
      <div class="split-media">${video(VID.attiva, 'aria-label="Attiva at Serenite video"')}</div>
    </div>
  </div></section>`;
}

/* Celebrities who have spoken publicly about their own Morpheus8 treatments elsewhere.
   Each line is backed by a published source; none of them were treated at Serenite. */
const SPOTLIGHT = [
  { name: "Eva Longoria", tag: "InMode global ambassador", fact: "The face of InMode, the company behind Morpheus8, since 2022. She has shared that she uses Morpheus8 Body to keep her skin firm.", src: "https://www.medestheticsmag.com/news/news/22485262/inmode-inmode-unveils-eva-longoria-as-global-brand-ambassador", label: "MedEsthetics" },
  { name: "Kim Kardashian", tag: "Morpheus8 user", fact: "Shared on Instagram in 2022 that she had Morpheus8 to tighten the skin on her stomach, and called the results worth it.", src: "https://www.nbcdfw.com/entertainment/entertainment-news/kim-kardashian-reveals-she-had-painful-stomach-tightening-procedure/3040294/", label: "NBC" },
  { name: "Jessica Simpson", tag: "Morpheus8 user", fact: "Had Morpheus8 on her jawline with a Beverly Hills plastic surgeon to keep it smooth and defined.", src: "https://newbeauty.com/jessica-simpson-treatments-jawline-abdomen-boobs/", label: "NewBeauty" }
];

function spotlight(withLogo) {
  return `${withLogo ? `<div class="coe-head"><img class="coe-logo chip" src="${H.misc.m8logo}" alt="Morpheus8" loading="lazy"><h3 class="spot-title">The treatment celebrities talk about</h3></div>` : ""}
  <div class="celebs">${H.celebs.map(([c, n]) => {
    const s = SPOTLIGHT.find(x => x.name === n);
    return `<figure>${img(c, n + ", Morpheus8")}<figcaption><strong>${n}</strong><span>Morpheus8</span>${s ? ext(s.src, "Source: " + s.label, "spot-src") : ""}</figcaption></figure>`;
  }).join("")}</div>
  <p class="spot-also">Also on Morpheus8: <strong>Eva Longoria</strong>, InMode's global brand ambassador (${ext(SPOTLIGHT[0].src, SPOTLIGHT[0].label)}), and <strong>Kim Kardashian</strong>, who shared her Morpheus8 stomach treatment on Instagram (${ext(SPOTLIGHT[1].src, SPOTLIGHT[1].label)}).</p>
  <p class="spot-note">The celebrities shown are publicly associated with Morpheus8 treatments with other providers. They have not been treated at Serenite Wellness Medicine and do not endorse our clinic.</p>`;
}

function patientReel(cls = "sec-alt") {
  const v0 = VID.patients[0], n = VID.patients.length;
  return `<section class="sec ${cls}" id="patients"><div class="wrap">${secHd("Patient videos", "Hear it from our patients", "Real patients at our Ontario clinic, in their own words. Pick a video to play it.")}
    <div class="pv">
      <div class="pv-main"><video id="pv-player" class="vid" controls playsinline preload="none" poster="${v0.poster}" src="${v0.src}" aria-label="Patient video 1"></video><p class="pv-cap" id="pv-cap">Patient video 1 of ${n}</p></div>
      <div class="pv-thumbs">${VID.patients.map((v, i) => `<button type="button" class="pv-thumb" data-pv="${i}" aria-label="Play patient video ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}><img src="${v.poster}" alt="" loading="lazy"><span class="pv-play">${ICON.play}</span><span class="pv-n">${i + 1}</span></button>`).join("")}</div>
    </div>
  </div></section>`;
}

function teamGrid(list) {
  return `<div class="team-grid team-directory">${list.map(([s, n, r]) => `<a class="member member-text" href="${esc(routeUrl(state.v,s))}" data-go="${s}"><span class="member-copy"><strong>${n}</strong><small>${r}</small></span><span class="member-link">View profile ${ICON.arrow}</span></a>`).join("")}</div>`;
}

function statsStrip() {
  const stats = [[20, "+", "Years of experience"], [500, "+", "Reviews, rated 5.0"], [12, "", "Clinicians and staff"], [19, "", "Treatments and programs"]];
  return `<section class="stats" aria-label="Serenite at a glance"><div class="wrap stats-in">${stats.map(([n, s, l]) => `<div class="stat"><p class="stat-n"><span data-count="${n}">${n}</span>${s}</p><p class="stat-l">${l}</p></div>`).join("")}</div></section>`;
}

function quoteBand() {
  return `<section class="qband"><img class="qband-bg" src="img/band-model.jpg" alt="" loading="lazy"><div class="wrap qband-in"><div class="qband-box">
    <figure class="qband-q"><blockquote>The care from Dr. Heidi, Ador, RN Arnold, RN Donna and their Serenite team was top-notch, making me feel at ease throughout the procedure. The results? Absolutely incredible.</blockquote><figcaption>Maria M., Attiva patient</figcaption></figure>
    ${go("attiva", "Read more patient stories", "btn btn-light")}</div></div></section>`;
}

function whyChoose() {
  return `<section class="sec sec-alt"><div class="wrap split">
    <div class="split-copy"><p class="eyebrow">Why choose us</p><h2>Why Choose Us?</h2>
      <p class="muted">Choose our wellness clinic in Ontario, California for our unparalleled commitment to holistic wellness, where we seamlessly blend conventional and integrative medicine to address the root causes of your health concerns, empowering you to live younger and longer.</p>
      <p class="muted">With a nurturing environment, personalized care, and a comprehensive range of services, we stand as your partner in achieving optimal well-being, guiding you toward a life filled with vitality, balance, and lasting wellness.</p>
      <div class="actions">${bookBtn()}</div></div>
    <div class="split-media"><div class="slides" data-slides>${H.why.map((s, i) => img(s, "Serenite Wellness Medicine", i === 0 ? 'class="on" loading="eager"' : "")).join("")}</div>
      <div class="slides-dots">${H.why.map((_, i) => `<button type="button" data-slide="${i}" aria-label="Show photo ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}></button>`).join("")}</div></div>
  </div></section>`;
}

function membership() {
  const cls = state.v === "c" ? "sec-dark" : "";
  return `<section class="sec ${cls}" id="membership"><div class="wrap">${secHd("Membership", "Save on the care you already plan for", "Annual plans, billed monthly, with a one-year minimum.")}
    <div class="tiers">${TIERS.map(t => `<div class="tier${t.feat ? " feat" : ""}"><h3>${t.name}</h3><p class="amt">${t.amt}<small> / month</small></p><p class="tnum">${t.yr}</p><p>${t.note}</p></div>`).join("")}</div>
    <div class="lyl"><div><h3>LYL Serenite Wellness Program</h3><p class="muted">Our Live Younger Longer program: $88 a month or $888 a year.</p></div><div class="actions">${go("membership", "See every package", "btn btn-ghost")}${go("lyl", "Join the program", "btn btn-primary")}</div></div></div></section>`;
}

function contactSection() {
  return `<section class="sec sec-alt" id="contact"><div class="wrap contact">
    <div>${secHd("Contact", "Send Us a Message", "Don't hesitate to reach out! Send us a message today to start the conversation and discover how we can support you in achieving your health and wellness goals.")}
      <form class="form" data-form="message" novalidate>
        <div class="row2">
          <div class="field"><label for="msg-name">Full name</label><input id="msg-name" name="name" type="text" autocomplete="name" required></div>
          <div class="field"><label for="msg-email">Email address</label><input id="msg-email" name="email" type="email" autocomplete="email" required></div>
        </div>
        <div class="field"><label for="msg-text">Message</label><textarea id="msg-text" name="message"></textarea></div>
        <label class="check" for="msg-privacy"><input id="msg-privacy" type="checkbox" required><span>By submitting this form you agree to the terms of the ${go("privacy", "Privacy Policy")}.</span></label>
        <div class="actions"><button type="submit" class="btn btn-primary">Submit</button></div>
        <p class="form-msg" role="status"></p>
      </form></div>
    <div class="contact-side">
      <h2 class="side-title">Get in touch</h2>
      <p class="muted">Reach out to us through our contact details. We're here to guide you toward wellness.</p>
      <div class="cs-row"><span class="ico">${ICON.phone}</span><div><h3>Phone number</h3><p class="tnum"><a href="tel:+19099471216">${SITE.phone}</a></p></div></div>
      <div class="cs-row"><span class="ico">${ICON.mail}</span><div><h3>Email address</h3><p class="wrap-any"><a href="mailto:${SITE.email}">${SITE.email}</a></p></div></div>
      <div class="cs-row"><span class="ico">${ICON.pin}</span><div><h3>Location</h3><p>${SITE.addr1}<br>${SITE.addr2}</p><p class="gap-top">${go("location", "View map and directions")}</p></div></div>
      <div class="cs-row"><span class="ico">${ICON.clock}</span><div><h3>Hours</h3><p>${SITE.hours}</p></div></div>
    </div>
  </div></section>`;
}

/* ---------- original-site sections, rendered in the current version's style ---------- */
function prepSections(secs) {
  const out = [];
  secs.forEach(s => {
    const prev = out[out.length - 1];
    const onlyP = s.h && s.parts.length === 1 && s.parts[0].t === "p" && s.h.length < 70;
    const onlyQuotes = s.h && s.parts.length && s.parts.every(p => p.t === "quote");
    if (prev && onlyP && (prev.parent || /Impacts/i.test(prev.h))) {
      prev.parts.push({ t: "item", label: s.h, text: s.parts[0].text });
      return;
    }
    if (prev && onlyQuotes && !/testimonial/i.test(s.h)) {
      s.parts.forEach(p => prev.parts.push(Object.assign({ title: s.h }, p)));
      return;
    }
    out.push({ h: s.h, parts: s.parts.slice(), parent: s.h && !s.parts.length });
  });
  return out;
}

function tableHtml(rows) {
  const keep = rows.filter(r => !/liposuction|breast aug/i.test(r.cells.join(" ")));
  return `<div class="datatable-wrap"><table class="datatable"><tbody>${keep.map(r => {
    const one = r.cells.length === 1;
    const sum = one && /^\$[\d,]+(\.\d+)?$/.test(r.cells[0]);
    const cls = sum ? "sum" : one || /services"?$|^You pay/i.test(r.cells[0]) ? "th" : "";
    return `<tr${cls ? ` class="${cls}"` : ""}>${r.cells.map((c, i) => `<td${one ? ' colspan="2"' : ""}${i > 0 && c.length < 24 ? ' class="num"' : ""}>${esc(c)}</td>`).join("")}</tr>`;
  }).join("")}</tbody></table></div>`;
}

function sectionBody(parts) {
  let html = "", buf = [];
  const flushTable = () => { if (buf.length) { html += tableHtml(buf); buf = []; } };
  parts.forEach(p => {
    if (p.t === "tr") { buf.push(p); return; }
    flushTable();
    if (p.t === "item" && !p.text) html += `<h3 class="tier-head">${esc(p.label)}</h3>`;
    else if (p.t === "item" && /MEMBERSHIP/.test(p.label)) html += `<div class="tier-head"><h3>${esc(p.label)}</h3><p class="muted">${esc(p.text)}</p></div>`;
  });
  flushTable();
  return html;
}

function renderSections(secs, opts = {}) {
  const list = prepSections(secs);
  let i = 0, splitN = 0;
  return list.map(s => {
    if (opts.skip && opts.skip.test(s.h)) return "";
    const ps = s.parts.filter(p => p.t === "p").map(p => dropBracketed(p.text)).filter(Boolean);
    const items = s.parts.filter(p => p.t === "item" && p.text);
    const lis = s.parts.filter(p => p.t === "li");
    const imgs = s.parts.filter(p => p.t === "img");
    const quotes = s.parts.filter(p => p.t === "quote");
    const vids = s.parts.filter(p => p.t === "video");
    const hasTable = s.parts.some(p => p.t === "tr");
    if (s.parent) {
      return `<section class="group-band"><div class="wrap"><h2>${esc(s.h)}</h2></div></section>`;
    }
    if (!s.h && !ps.length && !items.length && !hasTable && !quotes.length && !lis.length) return "";
    const alt = i++ % 2 === 1;
    if (/celebrit/i.test(s.h)) {
      return `<section class="sec ${state.v === "c" ? "sec-dark" : alt ? "sec-alt" : ""}"><div class="wrap">${secHd("In the spotlight", "The treatment celebrities talk about", "Morpheus8 is one of the most talked-about skin treatments in Hollywood. Here is what these public figures have shared about their own treatments.")}
        ${spotlight(false)}</div></section>`;
    }
    if (quotes.length && !items.length) {
      const extraP = ps.length ? `<div class="prose quote-intro">${ps.map(t => `<p>${esc(t)}</p>`).join("")}</div>` : "";
      return quoteGrid(quotes.map(q => [q.text, q.by, q.title]), state.v === "c" ? "sec-dark" : alt ? "sec-alt" : "", "Testimonials", esc(s.h || "In their words")).replace('<div class="quotes', extraP + '<div class="quotes');
    }
    const cls = alt ? "sec-alt" : "";
    const prose = (ps.length || lis.length) ? `<div class="prose">${ps.map(t => /fully booked/i.test(t) ? `<p class="notice">${esc(t)}</p>` : `<p>${esc(t)}</p>`).join("")}${lis.length ? `<ul>${lis.map(l => `<li>${esc(l.text)}</li>`).join("")}</ul>` : ""}</div>` : "";
    const itemsHtml = items.length ? `<div class="benefits gen-benefits${items.length > 4 ? " many" : ""}">${items.map((it, k) => `<div class="benefit">${ico(it.label + " " + it.text, k)}<h3>${esc(it.label)}</h3><p>${esc(it.text)}</p></div>`).join("")}</div>` : "";
    const quoteHtml = quotes.length ? `<div class="quotes inline-quotes">${quotes.map(q => `<figure class="quote">${q.title ? `<h3 class="quote-title">${esc(q.title)}</h3>` : ""}<blockquote>${esc(q.text)}</blockquote>${q.by ? `<figcaption>${esc(q.by)}</figcaption>` : ""}</figure>`).join("")}</div>` : "";
    const sh = splitHead(s.h || "");
    const eb = s.h ? sectionEyebrow(s.h, opts.group) : "";
    const head = s.h ? `<header class="gen-hd">${eb ? `<p class="eyebrow">${esc(eb)}</p>` : ""}<h2>${esc(sh.main)}</h2>${sh.sub ? `<p class="gen-sub">${esc(sh.sub)}</p>` : ""}</header>` : "";
    const vidHtml = vids.length ? `<div class="vid-wrap">${vids.map(v => /attiva/i.test(v.src) ? video(VID.attiva, 'aria-label="Attiva video"') : "").join("")}</div>` : "";
    const table = hasTable ? sectionBody(s.parts) : "";
    if (imgs.length >= 3) {
      return `<section class="sec ${cls}"><div class="wrap gen">${head}${prose}${itemsHtml}${gallery(imgs, opts.galleryCredit)}${quoteHtml}</div></section>`;
    }
    if (/^(book|join|reach us|ready)/i.test(s.h) && !imgs.length && !items.length && !quotes.length && !hasTable) {
      return `<section class="sec"><div class="wrap"><div class="gen-cta">${head}${prose}<div class="actions">${bookBtn()}<a class="btn btn-ghost" href="tel:9099471216">Call ${SITE.phone}</a></div></div></div></section>`;
    }
    if (imgs.length && !hasTable) {
      const flip = splitN++ % 2 === 1 ? " flip" : "";
      return `<section class="sec ${cls}"><div class="wrap split gen-split${flip}">
        <div class="split-copy gen">${head}${prose}${vidHtml}${quoteHtml}</div>
        <div class="split-media media-stack">${imgs.map(p => img(p.src, p.alt || s.h)).join("")}</div></div>
        ${itemsHtml ? `<div class="wrap">${itemsHtml}</div>` : ""}</section>`;
    }
    if (head && prose && !itemsHtml && !table && !quoteHtml && !vidHtml) {
      return `<section class="sec ${cls}"><div class="wrap gen side">${head}${prose}</div></section>`;
    }
    return `<section class="sec ${cls}"><div class="wrap gen">${head}${prose}${vidHtml}${itemsHtml}${table}${quoteHtml}</div></section>`;
  }).join("");
}

function sectionEyebrow(h, fallback) {
  const rules = [
    [/testimonial|stories/i, "Testimonials"], [/impact|result|gallery|before/i, "Results"],
    [/value|advantage|benefit|can do|why/i, "Benefits"], [/how .*work|works/i, "How it works"],
    [/included|package/i, "What's included"], [/book|join|reach|ready|contact/i, "Next step"],
    [/background|education|career|publication|success|programs|heroes/i, "About"]
  ];
  const r = rules.find(([re]) => re.test(h));
  return r ? r[1] : fallback || "";
}

function pageHead(title, eyebrow, lead = "", photo = "") {
  return `<section class="ph-hd"><div class="wrap ph-hd-in">
    <div class="ph-copy"><p class="crumbs">${eyebrow}</p><h1>${esc(title)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}</div>
    ${photo ? `<div class="ph-photo">${img(photo, title, 'loading="eager"')}</div>` : ""}
  </div></section>`;
}

function genericPage(slug) {
  const pg = C[slug];
  const secs = pg.secs.map(s => ({ h: s.h, parts: s.parts.slice() }));
  const intro = secs[0] && !secs[0].h ? secs.shift() : null;
  const introImgs = intro ? intro.parts.filter(p => p.t === "img") : [];
  const introRest = intro ? intro.parts.filter(p => p.t !== "img") : [];
  if (introRest.length) secs.unshift({ h: "", parts: introRest });

  if (pg.group === "beauty" || pg.group === "longevity") {
    const first = secs.find(s => s.h);
    let lead = "";
    if (first) {
      const pi = first.parts.findIndex(p => p.t === "p");
      if (pi > -1) lead = first.parts.splice(pi, 1)[0].text;
      else if (first.parts[0] && first.parts[0].t === "item") { const it = first.parts.shift(); lead = it.label + (it.text ? ". " + it.text : ""); }
    }
    const isProduct = /products/i.test(pg.title);
    const sh = splitHead(first ? first.h : pg.title);
    const hero = landingHero({
      eyebrow: pg.title,
      h1: esc(sh.main),
      sub: esc(sh.sub),
      lead: esc(dropBracketed(lead)),
      imgs: introImgs.slice(0, 2).map(p => [p.src, p.alt || pg.title]),
      facts: slug === "pico"
        ? [["Tattoo removal", "From $100 per square inch"], ["Pigmentation removal", "From $200 per session"], ["Booking", "By appointment"], ["Location", "Ontario, CA"]]
        : [["Starting at", PRICE[slug] || "Ask us"], ["Category", isProduct ? "Serenite product" : (GROUP[slug] || "") + " service"], ["Booking", "By appointment"], ["Location", "Ontario, CA"]],
      badges: [GROUP[slug] || "", "Ontario, CA"],
      pricingLink: false
    });
    if (first) first.h = "";
    const body = renderSections(secs, { group: pg.title });
    const shop = isProduct ? `<section class="sec"><div class="wrap cta-mini">${ext(SITE.store, "Shop the store", "btn btn-primary")}${go("book", "Ask at your visit", "btn btn-ghost")}</div></section>` : "";
    return hero + body + shop + cta() + visit();
  }

  if (pg.group === "team") {
    const t = TEAM.find(x => x[0] === slug);
    const profileSections = secs.map(section => ({ ...section, parts: section.parts.filter(part => part.t !== "img") }));
    return pageHead(pg.title, go("team", "Team"), t ? t[2] : "") + renderSections(profileSections, { group: "About" }) +
      `<section class="sec sec-alt"><div class="wrap">${secHd("Our team", "Meet the rest of the team")}${teamGrid(TEAM.filter(x => x[0] !== slug))}</div></section>` + cta();
  }

  // clinic information pages
  const leadSec = secs[0] && !secs[0].h ? secs[0] : null;
  let lead = "";
  if (leadSec && leadSec.parts[0] && leadSec.parts[0].t === "p" && slug !== "book") lead = leadSec.parts.shift().text;
  let body = renderSections(secs);
  if (slug === "book") body += bookingForm();
  if (slug === "location") body = locationBlock();
  if (slug === "pricing" || slug === "membership") body = `<div class="wrap"><p class="table-note">Your clinician confirms the treatment plan and total cost at your consultation.</p></div>` + body;
  return pageHead(pg.title, "Clinic", lead) + body + (slug === "book" ? visit() : cta() + visit());
}



function bookingForm(){
 const today=new Date(),minDate=[today.getFullYear(),String(today.getMonth()+1).padStart(2,"0"),String(today.getDate()).padStart(2,"0")].join("-");
 return `<section class="sec" id="appointment"><div class="wrap booking">${secHd("A simple first step","Plan your consultation","Tell the team what you would like to discuss and when you are available.")}
 <p class="demo-note" id="booking-preview"><strong>Preview only — no appointment will be booked.</strong>Use sample details only. Nothing is sent to the clinic. Your sample entries remain while you explore this tab and clear when you complete or reload the preview. Please do not enter personal or medical information.</p>
 <form class="form booking" data-form="booking" novalidate autocomplete="off" aria-describedby="booking-preview"><div class="error-summary" id="form-errors" role="alert" tabindex="-1" hidden></div>
 <div class="row2"><div class="field"><label for="bk-name">Name (required)</label><input id="bk-name" name="name" type="text" placeholder="Sample name" required aria-describedby="bk-name-error"><p class="field-error" id="bk-name-error"></p></div>
 <div class="field"><label for="bk-email">Email (required)</label><input id="bk-email" name="email" type="email" placeholder="sample@example.com" required aria-describedby="bk-email-error"><p class="field-error" id="bk-email-error"></p></div></div>
 <div class="field"><label for="bk-service">What would you like to discuss?</label><select id="bk-service" name="service"><option value="">Help me choose</option>${FEATURED.slice(0,3).map(f=>`<option>${esc(f.name)}</option>`).join("")}<option>Wellness and longevity</option><option>Another service</option></select></div>
 <div class="row2"><div class="field"><label for="bk-date">Preferred date (optional)</label><input id="bk-date" name="date" type="date" min="${minDate}" aria-describedby="bk-date-error"><p class="field-error" id="bk-date-error"></p></div>
 <div class="field"><label for="bk-time">Preferred time (optional)</label><select id="bk-time" name="time"><option value="">Any time</option><option>Morning</option><option>Afternoon</option></select></div></div>
 <label class="check" for="bk-preview"><input id="bk-preview" type="checkbox" required aria-describedby="bk-preview-error"><span>I’m using sample details for this preview.</span></label><p class="field-error" id="bk-preview-error"></p>
 <div class="actions"><button type="submit" class="btn btn-primary">Try the request preview ${ICON.arrow}</button></div><p class="form-msg" id="form-feedback" role="status" aria-live="polite"></p></form></div></section>`;
}

function locationBlock() {
  return `<section class="sec"><div class="wrap visit">
    <div><h3><span class="ico">${ICON.pin}</span>Address</h3><p>${SITE.addr1}<br>${SITE.addr2}</p><p class="gap-top">${ext(SITE.map, "Open in Google Maps", "btn btn-ghost")}</p></div>
    <div><h3><span class="ico">${ICON.clock}</span>Hours</h3><p><strong>Strictly by appointment only.</strong><br>No weekends, no holidays.</p></div>
    <div><h3><span class="ico">${ICON.phone}</span>Contact</h3><p class="tnum"><a href="tel:+19099471216">${SITE.phone}</a></p><p class="wrap-any"><a href="mailto:${SITE.email}">${SITE.email}</a></p><p class="gap-top">${go("book", "Book an appointment", "btn btn-primary")}</p></div>
  </div></section>`;
}

/* ---------- pricing and membership, built from the original tables ---------- */
const money = s => +String(s).replace(/[^0-9.]/g, "") || 0;
const fmt = n => "$" + Math.round(n).toLocaleString("en-US");
const NAME_SLUG = [[/morpheus/i, "morpheus8"], [/attiva/i, "attiva"], [/lumecca|ipl/i, "lumecca"], [/laser hair/i, "laserhair"], [/pico/i, "pico"], [/microneedling/i, "microneedling"], [/facial|peel/i, "facials"], [/hair growth|exosome/i, "hair"], [/body sculpt|contour/i, "bodysculpt"], [/face lift/i, "nsfacelift"], [/lyl/i, "lyl"], [/weight/i, "weightloss"], [/hormone/i, "bhrt"], [/iv therapy/i, "iv"], [/nutra/i, "nutra"], [/meal/i, "meals"], [/sexual/i, "sexual"], [/skin care/i, "skin"], [/hair care/i, "haircare"]];
const slugFor = n => (NAME_SLUG.find(([re]) => re.test(n)) || [])[1];

function aLaCarte() {
  const rows = C.pricing.secs.flatMap(s => s.parts).filter(p => p.t === "tr" && !/liposuction|breast aug/i.test(p.cells.join(" ")));
  const groups = [];
  let g = null;
  rows.forEach(r => {
    const c = r.cells, first = c[0].replace(/[“”"]/g, "");
    if (c.length === 1 || /services$/i.test(first)) { g = { name: first.replace(/\s*Services$/i, ""), items: [] }; groups.push(g); return; }
    if (!g) { g = { name: "Services", items: [] }; groups.push(g); }
    g.items.push(c);
  });
  return groups.filter(x => x.items.length);
}
/* split "$1,200 Face, $2,000 Body" into lines, but never inside parentheses like "(Face, Underarm)" */
function priceLines(p) {
  const out = [];
  let depth = 0, cur = "";
  for (const ch of p) {
    if (ch === "(") depth++;
    if (ch === ")") depth = Math.max(0, depth - 1);
    if (ch === "," && depth === 0) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  out.push(cur);
  const merged = [];
  out.map(x => x.trim()).filter(Boolean).forEach(x => {
    if (merged.length && !/\$/.test(x)) merged[merged.length - 1] += ", " + x;
    else merged.push(x);
  });
  // A comma inside a currency amount is a grouping mark, not a price separator.
  const grouped = line => line.replace(/\$\s*\d[\d,\s]*/g, amount => amount.replace(/,\s+(?=\d{3}\b)/g, ","));
  return merged.map(x => `<span>${esc(grouped(x))}</span>`).join("");
}

function parsePlans() {
  const parts = C.membership.secs.flatMap(s => s.parts);
  const tiers = [];
  let tier = null, pkg = null;
  parts.forEach(p => {
    if (p.t === "item" && /MEMBERSHIP/.test(p.label)) {
      const m = p.label.match(/ANNUAL (\w+) MEMBERSHIP \((\$[\d,]+) a month\).*?(\$[\d,.]+)/i);
      const name = m ? m[1][0] + m[1].slice(1).toLowerCase() : p.label;
      tier = { name, monthly: m ? m[2] : "", pay: m ? money(m[3]) : 0, discount: (p.text.match(/(\d+)\s*%/) || [])[1], packages: [] };
      tiers.push(tier); pkg = null; return;
    }
    if (!tier || p.t !== "tr") return;
    const c = p.cells.filter(Boolean);
    if (!c.length || /liposuction|breast aug/i.test(c.join(" "))) return;
    if (c.length === 1 && /Package\s*\d/i.test(c[0])) { pkg = { title: c[0].replace(/^Annual\s+\w+\s+Membership\s+/i, ""), items: [], total: 0 }; tier.packages.push(pkg); return; }
    if (!pkg) return;
    if (c.length === 1 && /^\$[\d,.]+$/.test(c[0])) { pkg.total = money(c[0]); return; }
    const alt = /^OR$/i.test(c[0]);
    const cells = /^(PLUS|OR)$/i.test(c[0]) ? c.slice(1) : c;
    const isMoney = x => /^\$\s*[\d,.]+$/.test(x);
    if (cells.every(isMoney)) return; // a row of values for the names in the row above
    const textVal = x => { const m = x.match(/=\s*\$\s*([\d.,]+)\s*$/); if (!m) return 0; let v = m[1]; if (/^\d{1,3}\.\d{3}$/.test(v)) v = v.replace(".", ""); return money(v); };
    const strip = x => x.replace(/\s*=\s*\$\s*[\d,.]+\s*$/, "").trim();
    const names = cells.filter(x => !isMoney(x)), vals = cells.filter(isMoney);
    if (names.length === 1) pkg.items.push({ name: strip(names[0]), val: vals.length ? money(vals[vals.length - 1]) : textVal(names[0]), alt });
    else names.forEach(nm => pkg.items.push({ name: strip(nm), val: textVal(nm), alt }));
  });
  tiers.forEach(t => t.packages.forEach(k => { if (!k.total) k.total = k.items.filter(i => !i.alt).reduce((a, i) => a + i.val, 0); }));
  return tiers;
}

function pricingPage() {
  const groups = aLaCarte();
  return pageHead("Pricing", "Clinic", "A la carte (stand alone) pricing. The price per session starts at the amounts below.") +
    `<section class="sec"><div class="wrap">${secHd("A la carte", "Price per session")}
      <div class="plists">${groups.map(g => `<div class="plist"><h3>${esc(g.name)}</h3>${g.items.map(([n, pr]) => `<div class="prow"><span class="prow-n">${slugFor(n) ? go(slugFor(n), esc(n)) : esc(n)}</span><span class="prow-p">${priceLines(pr || "")}</span></div>`).join("")}</div>`).join("")}</div>
      <p class="table-note">Your clinician confirms the treatment plan and total cost at your consultation.</p></div></section>` +
    membership() + cta() + visit();
}

function membershipPage() {
  const tiers = parsePlans();
  const id = t => "tier-" + t.name.toLowerCase();
  return pageHead("Membership", "Clinic", "Annual memberships with a one-year minimum. Choose a discount on a la carte prices or one of the treatment packages below. Package values are the clinic’s listed values; your annual membership payment is shown separately.") +
    `<section class="sec sec-alt tier-nav-sec"><div class="wrap"><nav class="tier-jump" aria-label="Membership tiers">${tiers.map(t => `<a href="#${id(t)}" data-anchor="${id(t)}">${t.name} <span>${t.monthly} / month</span></a>`).join("")}</nav></div></section>` +
    tiers.map((t, i) => `<section class="sec${i % 2 ? " sec-alt" : ""}" id="${id(t)}"><div class="wrap">
      <div class="tier-band"><div><p class="eyebrow">Annual ${t.name} membership</p><h2>${t.name}</h2></div>
        <div class="tier-price"><p class="tp-amt">${t.monthly}<small> / month</small></p><p class="muted tnum">You pay ${fmt(t.pay)} for one year. One-year minimum.</p></div></div>
      <div class="tier-options">
        <div class="opt"><span class="opt-k">Option 1</span><p>${t.discount}% off all a la carte prices</p></div>
        <div class="opt"><span class="opt-k">Option 2</span><p>Choose any one of the ${t.packages.length} ${t.name} packages below</p></div>
      </div>
      <div class="pkgs">${t.packages.map(k => {
        const save = k.total - t.pay;
        return `<article class="pkg"><h3>${esc(k.title)}</h3><ul>${k.items.map(it => `<li${it.alt ? ' class="alt"' : ""}><span>${it.alt ? "or " : ""}${esc(it.name)}</span></li>`).join("")}</ul>
          <div class="pkg-foot"><div><span>Listed package value</span><strong class="tnum">${fmt(k.total)}</strong></div><div><span>You pay annually</span><strong class="tnum">${fmt(t.pay)}</strong></div>${save > 0 ? `<div class="save"><span>You save</span><strong class="tnum">${fmt(save)}</strong></div>` : ""}</div></article>`;
      }).join("")}</div>
    </div></section>`).join("") + cta() + visit();
}

/* ---------- photo viewer ---------- */
let lbList = [], lbIdx = 0;
function markLightbox() {
  document.querySelectorAll("#site .reel.wide img, #site .media-stack img, #site .ba img, #site .celebs img, #site .split-media > img, #site .lh-photos img").forEach(im => {
    im.setAttribute("data-lb", "");
    im.setAttribute("tabindex", "0");
    im.setAttribute("role", "button");
    im.setAttribute("aria-label", "View larger: " + (im.alt || "photo"));
  });
}
function openLB(im) {
  const scope = im.closest("section") || document;
  lbList = [...scope.querySelectorAll("[data-lb]")];
  lbIdx = Math.max(0, lbList.indexOf(im));
  const m = document.createElement("div");
  m.className = "lb";
  m.setAttribute("role", "dialog");
  m.setAttribute("aria-modal", "true");
  m.setAttribute("aria-label", "Photo viewer");
  m.innerHTML = `<button type="button" class="lb-x" data-lb-close aria-label="Close">${ICON.close}</button>
    <button type="button" class="lb-nav lb-prev" data-lb-step="-1" aria-label="Previous photo">${ICON.left}</button>
    <figure class="lb-fig"><img alt=""><figcaption></figcaption></figure>
    <button type="button" class="lb-nav lb-next" data-lb-step="1" aria-label="Next photo">${ICON.right}</button>`;
  mountDialog(m, im);
  showLB();
}
function showLB() {
  const m = document.querySelector(".lb");
  if (!m || !lbList.length) return;
  const im = lbList[lbIdx];
  const big = m.querySelector("img");
  big.src = im.currentSrc || im.src;
  big.alt = im.alt;
  m.querySelector("figcaption").textContent = (im.alt || "") + (lbList.length > 1 ? `  (${lbIdx + 1} of ${lbList.length})` : "");
  m.querySelectorAll(".lb-nav").forEach(b => { b.hidden = lbList.length < 2; });
}
function stepLB(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLB(); }
function closeLB() { dismissDialog(".lb"); }

/* ---------- numbers count up when they come into view ---------- */
function countUp() {
  const els = document.querySelectorAll("#site [data-count]");
  if (!els.length || !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target, n = +el.dataset.count, t0 = performance.now();
    const tick = t => {
      const k = Math.min(1, (t - t0) / 1400);
      el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.4 });
  els.forEach(el => io.observe(el));
}

function playPatient(i) {
  const v = VID.patients[i], pl = document.getElementById("pv-player");
  if (!v || !pl) return;
  pl.poster = v.poster;
  pl.src = v.src;
  pl.setAttribute("aria-label", "Patient video " + (i + 1));
  pl.play().catch(() => {});
  document.getElementById("pv-cap").textContent = `Patient video ${i + 1} of ${VID.patients.length}`;
  document.querySelectorAll("[data-pv]").forEach((b, k) => b.setAttribute("aria-current", String(k === i)));
}

/* ---------- curated landing pages plus everything else from the original page ---------- */

function medicalNote(p) {
  if (p === "morpheus8") return `<section class="sec sec-alt"><div class="wrap"><aside class="medical-note"><h3>Understand the risks before deciding</h3><p>RF microneedling is a medical procedure. The FDA has reported serious complications with certain uses, including burns, scarring, fat loss and nerve damage. Discuss potential benefits, risks and alternatives with a qualified clinician.</p><p>${ext("https://www.fda.gov/medical-devices/safety-communications/potential-risks-certain-uses-radiofrequency-rf-microneedling-fda-safety-communication", "Read the FDA safety communication")}</p></aside></div></section>`;
  if (p === "hair") return `<section class="sec sec-alt"><div class="wrap"><aside class="medical-note"><h3>A note on exosome products</h3><p>The FDA states that there are no FDA-approved exosome products. Ask a qualified clinician about regulatory status, available evidence, risks and alternatives before considering an exosome treatment. Hair-growth outcomes are not guaranteed.</p><p>${ext("https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes", "Read the FDA consumer alert")}</p></aside></div></section>`;
  return "";
}
function landingPage(p) {
  const d = Object.assign({ pricingLink: p !== "skin" }, LP[p]);
  const dark = state.v === "c" ? "sec-dark" : "sec-alt";
  const orig = C["o-" + p];
  const extras = p === "skin" && orig ? renderSections(orig.secs.filter(s => s.h), { skip: d.skip, galleryCredit: d.galleryCredit, group: TITLES[p] }) : "";
  let out = landingHero(d);
  if (p === "skin") out += benefits(d) + standards(d) + why(d) + extras + pair(d) + faq(d, "sec-alt");
  else out += benefits(d) + steps(d, true) + medicalNote(p) + pricing(d) + faq(d, "sec-alt");
  return out + cta() + visit();
}


function consultationSteps() {
  return `<section class="sec sec-alt" id="first-visit"><div class="wrap">${secHd("Your first visit", "A clearer way to choose.")}
    <ol class="consult-steps"><li><h3>Talk through your goals</h3><p>Start with what matters to you and the questions you want answered.</p></li><li><h3>Understand your options</h3><p>Ask about suitability, possible benefits, risks, recovery and costs.</p></li><li><h3>Choose your next step</h3><p>Take time to consider the plan before deciding whether to proceed.</p></li></ol>
  </div></section>`;
}
function page() {
  const p = state.p;
  if (p === "team") return teamOverview();
  if (p === "home") return homeHero() + trustBar() + featured() + consultationSteps() + cta();
  if (p === "book") return pageHead("Book a consultation", "Let’s talk", "A short request preview, with no commitment to treatment.") + bookingForm() + visit();
  if (LP[p]) return landingPage(p);
  if (p === "pricing") return pricingPage();
  if (p === "membership") return membershipPage();
  return genericPage(p);
}


/* ---------- user-initiated video and accessible dialogs ---------- */
let music = null, dialogReturnFocus = null, dialogOverflow = "";
function mountDialog(dialog, returnFocus) {
  dialogReturnFocus = returnFocus || document.activeElement;
  dialogOverflow = document.body.style.overflow;
  document.body.appendChild(dialog);
  document.getElementById("site").inert = true;
  document.querySelector(".chrome").inert = true;
  document.body.style.overflow = "hidden";
  dialog.querySelector('button')?.focus();
}
function dismissDialog(selector) {
  const dialog = document.querySelector(selector);
  if (!dialog) return;
  dialog.querySelectorAll("video").forEach(v => v.pause());
  dialog.remove();
  document.getElementById("site").inert = false;
  document.querySelector(".chrome").inert = false;
  document.body.style.overflow = dialogOverflow;
  if (dialogReturnFocus?.isConnected) dialogReturnFocus.focus();
  dialogReturnFocus = null;
}

function introState(modal,state){
 const failed=state==="error",video=modal.querySelector("video"),retry=modal.querySelector("[data-retry-video]");
 if((!failed&&document.activeElement===retry)||(failed&&document.activeElement===video))modal.querySelector(".modal-x").focus({preventScroll:true});
 video.hidden=failed;modal.querySelector(".intro-fallback").hidden=!failed;retry.hidden=!failed;
 modal.querySelector(".intro-status").textContent=failed?"Video unavailable. You can try again or continue exploring.":state==="ready"?"Ready to play. Select Play to watch the introduction.":"Loading the introduction. You can continue exploring while it loads.";
}
function loadIntro(modal){
 introState(modal,"loading");const v=modal.querySelector("video");v.src=VID.popup.src;v.load();
}
function showPopup(trigger){
 if(document.querySelector('[role="dialog"]'))return;
 const m=document.createElement("div");m.className="modal";m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");m.setAttribute("aria-labelledby","intro-title");
 m.innerHTML=`<div class="modal-box"><div class="intro-head"><h2 id="intro-title">A short introduction to Serenité</h2><button type="button" class="modal-x" data-close aria-label="Close introduction">${ICON.close}</button></div>
 <div class="intro-media"><video controls playsinline preload="metadata" poster="${VID.popup.poster}" tabindex="0" aria-label="Serenité introduction video"></video><div class="intro-fallback" hidden>${ICON.play}<h3>The introduction couldn’t load.</h3><p>You can retry, or explore our treatments and team.</p></div></div>
 <div class="modal-bar"><p class="intro-status" role="status" aria-live="polite"></p><div class="actions"><button type="button" class="btn btn-primary" data-retry-video hidden>Try again</button><button type="button" class="btn btn-primary" data-close data-book>Book a consultation</button><button type="button" class="btn btn-ghost" data-close>Continue exploring</button></div><p class="intro-disclosure">Use the player controls to adjust the sound.</p></div></div>`;
 m.querySelector("video").addEventListener("loadedmetadata",()=>introState(m,"ready"));m.querySelector("video").addEventListener("error",()=>introState(m,"error"));
 m.querySelector("video").addEventListener("waiting",()=>introState(m,"loading"));m.querySelector("video").addEventListener("playing",()=>{m.querySelector(".intro-status").textContent="Playing the introduction.";});
 mountDialog(m,trigger);loadIntro(m);
}
function closePopup(){dismissDialog(".modal");}

function toggleMusic(btn) {
  if (!music) { music = new Audio(VID.music); music.loop = true; }
  if (music.paused) music.play().catch(() => {}); else music.pause();
  const on = !music.paused;
  btn.setAttribute("aria-pressed", String(on));
  btn.textContent = on ? "Pause music" : "Play music";
}

/* ---------- render and routing ---------- */
// Synthetic preview values stay only in this page's memory, never storage or history.
const bookingFieldIds = ["bk-name","bk-email","bk-service","bk-date","bk-time","bk-preview"];
let bookingDraft = null;
function rememberBookingPreview() {
  const form = document.querySelector('[data-form="booking"]');
  if (!form) return;
  bookingDraft = Object.fromEntries(bookingFieldIds.map(id => {
    const field = form.querySelector("#" + id);
    return [id, field.type === "checkbox" ? field.checked : field.value];
  }));
}
function restoreBookingPreview() {
  if (!bookingDraft) return;
  const form = document.querySelector('[data-form="booking"]');
  if (!form) return;
  bookingFieldIds.forEach(id => {
    const field = form.querySelector("#" + id);
    if (field.type === "checkbox") field.checked = bookingDraft[id];
    else field.value = bookingDraft[id];
  });
}
let slideTimer = 0;
function startSlides() {
  clearInterval(slideTimer);
  const box = document.querySelector("[data-slides]");
  if (!box || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  slideTimer = setInterval(() => {
    const imgs = box.querySelectorAll("img");
    const cur = [...imgs].findIndex(i => i.classList.contains("on"));
    showSlide((cur + 1) % imgs.length);
  }, 4500);
}
function showSlide(n) {
  const box = document.querySelector("[data-slides]");
  if (!box) return;
  box.querySelectorAll("img").forEach((im, i) => im.classList.toggle("on", i === n));
  document.querySelectorAll("[data-slide]").forEach((b, i) => b.setAttribute("aria-current", String(i === n)));
}

function chrome() {
  document.getElementById("seg-v").innerHTML = Object.entries(VERSIONS).map(([k, o]) => `<button type="button" data-v="${k}" aria-pressed="${k === state.v}">${o.name}</button>`).join("");
  const opt = (k, t) => `<option value="${k}"${k === state.p ? " selected" : ""}>${esc(t)}</option>`;
  const groups = [
    ["Main pages", Object.keys(CURATED).map(k => [k, CURATED[k]])],
    ["Beauty", CARDS.beauty.filter(c => !CURATED[c[0]]).map(c => [c[0], c[1]])],
    ["Longevity", CARDS.longevity.filter(c => !CURATED[c[0]]).map(c => [c[0], c[1]])],
    ["Clinic", CLINIC],
    ["Team", TEAM.map(t => [t[0], t[1]])]
  ];
  document.getElementById("page-select").innerHTML = groups.map(([g, list]) => `<optgroup label="${g}">${list.map(([k, t]) => opt(k, t)).join("")}</optgroup>`).join("");
  document.getElementById("note").textContent = VERSIONS[state.v].note;
  document.getElementById("active-design-label").textContent = VERSIONS[state.v].name;
}


function render(anchor, options = {}) {
  rememberBookingPreview();
  closeFly();
  closePopup();
  closeLB();
  const site = document.getElementById("site");
  document.getElementById("review-tools").hidden = new URLSearchParams(location.search).get("review") !== "1";
  site.className = "v-" + state.v;
  site.innerHTML = siteMarkup();
  restoreBookingPreview();
  updateMetadata();
  chrome();
  const target = anchor && document.getElementById(anchor);
  if (target) {
    if (target.tagName === "DETAILS") target.open = true;
    target.scrollIntoView({ block: "start", behavior: "instant" });
  } else window.scrollTo({ top: options.scrollY || 0, behavior: "instant" });
  if (options.focus) document.getElementById("main-content").focus({ preventScroll: true });
  reveal();
  startSlides();
  markLightbox();
  countUp();
  syncHeader();
}
function routeFromLocation() {
  const legacy = /^#([abc])-([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/.exec(location.hash || "");
  if (legacy && ROUTES[legacy[2]]) return {v:legacy[1],p:legacy[2],anchor:legacy[3] || ""};
  const path = location.pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";
  const p = Object.keys(ROUTES).find(key=>ROUTES[key].path === path) || "home";
  const design = new URLSearchParams(location.search).get("design");
  return {v:VERSIONS[design] ? design : "a",p,anchor:location.hash.slice(1)};
}
let renderedUrl = "";
function setView(v, p, anchor = "") {
  if (!VERSIONS[v]) v = "a";
  if (!ROUTES[p]) p = "home";
  const next = routeUrl(v,p,anchor), samePage = v === state.v && p === state.p;
  try {
    history.replaceState({ ...(history.state || {}), scrollY:window.scrollY }, "", location.href);
    if (location.pathname+location.search+location.hash !== next) history.pushState({v,p,anchor,scrollY:0}, "", next);
  } catch (error) { location.assign(next); return; }
  state = {v,p}; renderedUrl = next;
  if (samePage) {
    closeFly(); closeMobileMenu();
    document.querySelectorAll(".nav-group[open]").forEach(group => group.open = false);
    const target = anchor && document.getElementById(anchor);
    if (target) {
      if (target.tagName === "DETAILS") target.open = true;
      target.scrollIntoView({block:"start",behavior:"instant"});
    } else if (p === "book") {
      document.getElementById("bk-name").focus({preventScroll:true});
      document.getElementById("appointment").scrollIntoView({block:"start",behavior:"instant"});
    } else {
      document.getElementById("main-content").focus({preventScroll:true});
      window.scrollTo({top:0,behavior:"instant"});
    }
    return;
  }
  render(anchor,{focus:true});
}
function restoreRoute() {
  const route = routeFromLocation();
  const next = routeUrl(route.v,route.p,route.anchor);
  if (renderedUrl === next) return;
  state={v:route.v,p:route.p}; renderedUrl=next;
  if (/^#[abc]-/.test(location.hash)) history.replaceState({...route,scrollY:0},"",next);
  render(route.anchor,{scrollY:history.state?.scrollY || 0,focus:true});
}
window.addEventListener("popstate",restoreRoute);
window.addEventListener("hashchange",restoreRoute);

/* Scroll reveal, like the original site's fade and zoom effects. Only content
   below the first screen waits to animate, so the opening view is always complete. */
let revealObs;
function reveal() {
  // Content stays visible immediately; interaction feedback is handled by CSS.
  if (revealObs) revealObs.disconnect();
}

document.addEventListener("click", e => {
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (t.closest("[data-skip]")) { e.preventDefault(); document.getElementById("main-content").focus(); return; }
  const mobileButton = t.closest("[data-mobile-toggle]");
  if (mobileButton) {
    closeFly();
    const menu = document.getElementById("mobile-menu");
    menu.hidden = !menu.hidden;
    if (!menu.hidden) menu.style.maxHeight = Math.max(120, innerHeight - document.querySelector(".hd").getBoundingClientRect().bottom - 12) + "px";
    mobileButton.setAttribute("aria-expanded", String(!menu.hidden));
    mobileButton.setAttribute("aria-label", menu.hidden ? "Open menu" : "Close menu");
    mobileButton.innerHTML = menu.hidden ? ICON.menu : ICON.close;
    return;
  }
  if (!t.closest(".hd")) closeMobileMenu();
  const watch = t.closest("[data-watch-intro]");
  if (watch) { showPopup(watch); return; }
  const b = t.closest("button[data-v]");
  if (b) { setView(b.dataset.v, state.p); return; }

  if(!t.closest(".nav-group"))document.querySelectorAll(".nav-group[open]").forEach(d=>d.open=false);
  const search=t.closest("[data-search]");
  if(search){if(fly){closeFly(true);return;}openFly(search,searchHtml());runSearch("");document.getElementById("site-search").focus();return;}
  if(t.closest("[data-clear-search]")){const input=document.getElementById("site-search");input.value="";runSearch("");input.focus();return;}
  const errorLink=t.closest("[data-error-target]");if(errorLink){e.preventDefault();document.getElementById(errorLink.dataset.errorTarget)?.focus();return;}
  if(t.closest("[data-retry-video]")){loadIntro(t.closest(".modal"));return;}

  if (fly && !t.closest(".flyout")) closeFly();
  if (t.closest("[data-lb-close]") || t.classList.contains("lb")) { closeLB(); return; }
  const step = t.closest("[data-lb-step]");
  if (step) { stepLB(+step.dataset.lbStep); return; }
  const lbImg = t.closest("[data-lb]");
  if (lbImg) { openLB(lbImg); return; }
  const patient = t.closest("[data-pv]");
  if (patient) { playPatient(+patient.dataset.pv); return; }
  const reel = t.closest("[data-reel]");
  if (reel) {
    const el = document.getElementById(reel.dataset.reel);
    if (el) el.scrollBy({ left: +reel.dataset.dir * Math.max(240, el.clientWidth * .8), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    return;
  }
  const slide = t.closest("[data-slide]");
  if (slide) { showSlide(+slide.dataset.slide); startSlides(); return; }
  if (t.closest("[data-music]")) { toggleMusic(t.closest("[data-music]")); return; }
  if (t.closest("[data-close]") || t.classList.contains("modal")) {
    const book = t.closest("[data-book]"); closePopup();
    if (book) setView(state.v, "book");
    return;
  }
  const a = t.closest("a[data-go],a[data-anchor]");
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  setView(state.v, a.dataset.go || state.p, a.dataset.anchor || "");
});


document.addEventListener("toggle",e=>{
 const d=e.target;if(!(d instanceof Element)||!d.matches(".nav-group[open]"))return;
 closeFly();document.querySelectorAll(".nav-group[open]").forEach(other=>{if(other!==d)other.open=false;});
},true);
document.addEventListener("focusout",e=>{
 const d=e.target.closest?.(".nav-group");if(d&&!d.contains(e.relatedTarget))d.open=false;
 if(fly&&!fly.contains(e.relatedTarget)&&e.relatedTarget!==flyAnchor&&e.relatedTarget!==flyReturnFocus)closeFly();
});

document.addEventListener("input", e => { if (e.target.id === "site-search") runSearch(e.target.value); });
document.addEventListener("change", e => { if (e.target.id === "page-select") setView(state.v, e.target.value); });

document.addEventListener("keydown", e => {
  const dialog = document.querySelector('.modal, .lb');
  if (dialog) {
    if (e.key === "Escape") { e.preventDefault(); dialog.classList.contains("lb") ? closeLB() : closePopup(); return; }
    if (e.key === "Tab") {
      const controls = [...dialog.querySelectorAll('button:not([disabled]), a[href], video[controls], [tabindex="0"]')].filter(el => !el.hidden && el.getClientRects().length);
      const first = controls[0], last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      return;
    }
    if (dialog.classList.contains("lb") && e.key === "ArrowLeft") { stepLB(-1); return; }
    if (dialog.classList.contains("lb") && e.key === "ArrowRight") { stepLB(1); return; }
  }
  if ((e.key === "Enter" || e.key === " ") && e.target.hasAttribute?.("data-lb")) { e.preventDefault(); openLB(e.target); return; }
  if (e.key === "Escape") {
    if(fly){closeFly(true);return;}
    const group=document.querySelector(".nav-group[open]");if(group){group.open=false;group.querySelector("summary").focus();return;}
    if(!document.getElementById("mobile-menu").hidden)closeMobileMenu(true);
  }
  if (e.key === "Enter" && e.target.id === "site-search") document.querySelector("#search-results [data-search-hit]")?.click();
});

function syncHeader() { const hd = document.querySelector(".hd"); if (hd) hd.classList.toggle("is-scrolled", window.scrollY > 40); }
window.addEventListener("scroll", () => { if(fly)placeBeside(fly);syncHeader(); }, { passive: true });
window.addEventListener("resize", () => { if (fly && flyAnchor) placeBeside(fly, flyAnchor); });


document.addEventListener("submit",e=>{
 const form=e.target.closest("[data-form]");if(!form)return;e.preventDefault();
 const message=form.querySelector(".form-msg"),summary=form.querySelector(".error-summary");
 form.querySelectorAll('[aria-invalid="true"]').forEach(el=>el.removeAttribute("aria-invalid"));form.querySelectorAll(".field-error").forEach(el=>el.textContent="");message.textContent="";
 const errors={"bk-name":"Enter a sample name.","bk-email":"Enter a valid sample email address, such as sample@example.com.","bk-preview":"Confirm that you are using sample details.","bk-date":"Choose today or a future date."};
 const invalid=[...form.elements].filter(el=>el.willValidate&&(!el.validity.valid||(el.required&&el.type!=="checkbox"&&!el.value.trim())));
 if(summary){summary.hidden=!invalid.length;summary.innerHTML="";}
 if(invalid.length){
 invalid.forEach(el=>{el.setAttribute("aria-invalid","true");const note=document.getElementById(el.id+"-error");if(note)note.textContent=errors[el.id]||"Check this field.";});
 if(summary){summary.innerHTML=`<strong>Please check ${invalid.length} ${invalid.length===1?"field":"fields"}.</strong>`+invalid.map(el=>`<a href="#${el.id}" data-error-target="${el.id}">${esc(errors[el.id]||"Check this field.")}</a>`).join("");summary.focus();summary.scrollIntoView({block:"center",behavior:"instant"});}
 else{message.textContent=errors[invalid[0].id]||"Check the highlighted field.";message.dataset.error="true";invalid[0].focus();}
 return;
 }
 message.dataset.error="false";message.textContent="Preview complete. Nothing was sent or saved, and no appointment has been booked.";form.reset();bookingDraft=null;
});

function init() {
  const route = routeFromLocation();
  state = {v:route.v,p:route.p};
  renderedUrl = routeUrl(state.v,state.p,route.anchor);
  try { history.scrollRestoration="manual"; history.replaceState({...route,scrollY:0},"",renderedUrl); } catch (error) {}
  render(route.anchor);
}
if (!window.SERENITE_STATIC_BUILD) init();
