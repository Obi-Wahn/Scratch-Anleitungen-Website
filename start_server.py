#!/usr/bin/env python3
"""Startet die Scratch-Anleitungen-Website im lokalen Netzwerk.

Einfach ausführen (z.B. mit "python3 start_server.py" oder per Doppelklick,
falls .py-Dateien mit Python verknüpft sind). Die Adresse, unter der die
Seite im Netzwerk erreichbar ist, wird im Terminal angezeigt und
zusätzlich groß auf der Startseite selbst.
"""

import functools
import http.server
import json
import socket
from pathlib import Path

PORT = 8000
ROOT = Path(__file__).resolve().parent
INFO_FILE = ROOT / "server-info.json"


def local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Verbindungsversuch ohne tatsächlich Daten zu senden - liefert
        # zuverlässig die eigene IP-Adresse im lokalen Netzwerk.
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        s.close()


def main():
    url = f"http://{local_ip()}:{PORT}"
    INFO_FILE.write_text(json.dumps({"url": url}))

    print("=" * 60)
    print("  Scratch-Anleitungen sind im Netzwerk erreichbar unter:")
    print(f"  {url}")
    print("=" * 60)
    print("Zum Beenden: Strg+C\n")

    handler = functools.partial(
        http.server.SimpleHTTPRequestHandler, directory=str(ROOT)
    )
    try:
        with http.server.ThreadingHTTPServer(("0.0.0.0", PORT), handler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer beendet.")
    finally:
        INFO_FILE.unlink(missing_ok=True)


if __name__ == "__main__":
    main()
