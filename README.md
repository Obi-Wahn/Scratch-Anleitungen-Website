# Scratch-Anleitungen-Website

Eine einfache, statische Website mit einer Übersicht aller Scratch-Anleitungen
der Programmier-AG, sortiert nach Themen.

## Links nachtragen

Alle Anleitungen und ihre Links stehen in einer einzigen Datei:
[`js/data.js`](js/data.js). Trage dort bei der jeweiligen Anleitung die URL
in das Feld `link:` ein – z.B. einen mit "Jeder mit Link" freigegebenen
Google-Drive-Link, oder einen relativen Pfad, wenn die Datei direkt in
diesem Repository liegt (siehe unten). Sobald `link` nicht mehr leer ist,
wird die Karte auf der Website automatisch anklickbar.

Eine neue Anleitung oder Kategorie hinzufügen funktioniert nach dem
gleichen Muster – Details stehen als Kommentar am Anfang von `js/data.js`.

## PDFs direkt im Repository ablegen (optional)

Statt auf Google Drive zu verlinken, können die PDF-Dateien auch direkt
hier abgelegt werden, z.B. unter `anleitungen/<Kategorie>/<Datei>.pdf`.
Der Link in `js/data.js` wäre dann z.B.
`anleitungen/Einstieg in Scratch/1_Geburtstagskarte.pdf`.

## Lokal ansehen

Diese Seite besteht nur aus HTML/CSS/JS ohne Build-Schritt. Einfach
`index.html` im Browser öffnen, oder z.B. mit Python einen kleinen
Server starten:

```bash
python3 -m http.server 8000
```

Danach im Browser `http://localhost:8000` öffnen.

## Veröffentlichen mit GitHub Pages

1. Im Repository unter **Settings → Pages** als Quelle "Deploy from a
   branch" wählen.
2. Branch `main` und als Ordner `/ (root)` einstellen.
3. Speichern – GitHub veröffentlicht die Seite dann unter
   `https://obi-wahn.github.io/Scratch-Anleitungen-Website/`.
