# Scratch-Anleitungen-Website

Eine einfache, statische Website mit einer Übersicht aller Scratch-Anleitungen
der Programmier-AG, sortiert nach Themen.

## PDFs (nur lokal, nicht im Repository)

⚠️ Für die PDF-Anleitungen bestehen keine Verteilungsrechte – sie dürfen
nur als Lehrkraft im eigenen Unterricht genutzt werden, nicht öffentlich
verteilt werden. Deshalb werden die PDFs **nicht** in dieses Repository
oder auf GitHub Pages hochgeladen (`data/` steht in `.gitignore`).

Lege die Dateien stattdessen lokal auf deinem Rechner in einem Ordner
namens `data/` ab, in Unterordnern nach Kategorie sortiert (genauso wie
im ursprünglichen Ordner). Die Links in [`js/data.js`](js/data.js)
verweisen bereits auf diese Pfade, z.B.
`data/Einstieg in Scratch/1_Geburtstagskarte.pdf`. Leerzeichen und
Umlaute in den Ordner-/Dateinamen sind kein Problem, die Website codiert
die URL beim Anzeigen automatisch korrekt.

Die Website funktioniert dadurch nur lokal bei dir (z.B. im Unterricht) –
über die öffentliche GitHub-Pages-Version fehlen die PDFs absichtlich.

## Links nachtragen / neue Anleitung hinzufügen

Alle Anleitungen und ihre Links stehen in einer einzigen Datei:
[`js/data.js`](js/data.js). Um eine neue Anleitung hinzuzufügen:

1. PDF-Datei in den passenden Unterordner unter `data/` legen.
2. In `js/data.js` ein Objekt `{ title: "...", link: "data/<Kategorie>/<Datei>.pdf" }`
   in die passende Kategorie einfügen.
3. Speichern – die Karte wird automatisch klickbar, sobald `link` nicht
   mehr leer ist.

Eine neue Kategorie hinzufügen funktioniert nach dem gleichen Muster –
Details stehen als Kommentar am Anfang von `js/data.js`.

## Im Unterricht starten (lokales Netzwerk)

Am einfachsten mit dem mitgelieferten Skript:

```bash
python3 start_server.py
```

Das Skript ermittelt automatisch die IP-Adresse deines Laptops im
aktuellen Netzwerk, startet den Server und zeigt die Adresse im Terminal
**und** groß und gut lesbar oben auf der Startseite an. Die Schüler-PCs
müssen im gleichen Netzwerk sein und diese Adresse im Browser öffnen,
z.B. `http://192.168.1.42:8000`. Zum Beenden reicht Strg+C.

Hinweise:
- Beim ersten Start fragt die Firewall (Windows/macOS) eventuell, ob
  Python im Netzwerk kommunizieren darf – das musst du erlauben.
- Manche Schul-WLANs blockieren die Kommunikation zwischen Geräten im
  selben Netz ("Client-Isolation"). Am besten vorher kurz mit einem
  Schüler-PC testen.
- Die IP-Adresse kann sich bei jedem Neustart ändern.

Alternativ kannst du `index.html` auch einfach direkt im Browser öffnen
(dann ohne Netzwerkzugriff für andere PCs), oder statt des Skripts einen
einfachen Server ohne IP-Anzeige starten:

```bash
python3 -m http.server 8000
```

## Veröffentlichen mit GitHub Pages

Möglich, aber wegen der fehlenden PDFs (siehe oben) zeigt die
veröffentlichte Version nur die Struktur, die "Anleitung öffnen"-Buttons
funktionieren dort nicht, da `data/` nicht mit hochgeladen wird.

1. Im Repository unter **Settings → Pages** als Quelle "Deploy from a
   branch" wählen.
2. Branch `main` und als Ordner `/ (root)` einstellen.
3. Speichern – GitHub veröffentlicht die Seite dann unter
   `https://obi-wahn.github.io/Scratch-Anleitungen-Website/`.
