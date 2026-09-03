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

## Lokal ansehen

Diese Seite besteht nur aus HTML/CSS/JS ohne Build-Schritt. Einfach
`index.html` im Browser öffnen, oder z.B. mit Python einen kleinen
Server starten:

```bash
python3 -m http.server 8000
```

Danach im Browser `http://localhost:8000` öffnen.

## Veröffentlichen mit GitHub Pages

Möglich, aber wegen der fehlenden PDFs (siehe oben) zeigt die
veröffentlichte Version nur die Struktur, die "Anleitung öffnen"-Buttons
funktionieren dort nicht, da `data/` nicht mit hochgeladen wird.

1. Im Repository unter **Settings → Pages** als Quelle "Deploy from a
   branch" wählen.
2. Branch `main` und als Ordner `/ (root)` einstellen.
3. Speichern – GitHub veröffentlicht die Seite dann unter
   `https://obi-wahn.github.io/Scratch-Anleitungen-Website/`.
