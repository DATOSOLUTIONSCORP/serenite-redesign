"""Loopback-only static preview with extensionless HTML routing; no submissions."""
import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent.parent

class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header('X-Robots-Tag', 'noindex, nofollow')
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def send_head(self):
        original = self.path
        parts = urlsplit(original)
        path = unquote(parts.path)
        if any(part.startswith('.') for part in Path(path).parts):
            self.send_error(404)
            return None
        if path == '/index.html' or path.endswith('.html'):
            canonical = '/' if path == '/index.html' else path[:-5]
            if (ROOT / path.lstrip('/')).is_file() and path != '/404.html' and path != '/page-shell.html':
                self.send_response(308)
                self.send_header('Location', canonical + ('?' + parts.query if parts.query else ''))
                self.end_headers()
                return None
        clean = path.rstrip('/')
        if clean and (ROOT / (clean.lstrip('/') + '.html')).is_file():
            if path.endswith('/'):
                self.send_response(308)
                self.send_header('Location', clean + ('?' + parts.query if parts.query else ''))
                self.end_headers()
                return None
            self.path = clean + '.html'
        try:
            return super().send_head()
        finally:
            self.path = original

    def list_directory(self, path):
        self.send_error(404)
        return None

    def send_error(self, code, message=None, explain=None):
        if code == 404 and (ROOT / '404.html').is_file():
            data = (ROOT / '404.html').read_bytes()
            self.send_response(404)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            if self.command != 'HEAD':
                self.wfile.write(data)
            return
        super().send_error(code, message, explain)

    def log_message(self, fmt, *args):
        # Avoid retaining URLs, query strings or form values in preview logs.
        pass

class PreviewServer(ThreadingHTTPServer):
    # Browsers fetch fonts, scripts and images concurrently.
    request_queue_size = 128

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8847)
    args = parser.parse_args()
    server = PreviewServer(('127.0.0.1', args.port), PreviewHandler)
    print(f'Local preview: http://127.0.0.1:{args.port}/', flush=True)
    server.serve_forever()
