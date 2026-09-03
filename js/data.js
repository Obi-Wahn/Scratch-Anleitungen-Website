/*
 * Inhalte der Scratch-Anleitungen-Website.
 *
 * So fügst du einen Link zu einer Anleitung hinzu:
 *   1. Lade die Datei irgendwo hoch, wo sie öffentlich erreichbar ist
 *      (z.B. Google Drive mit "Jeder mit Link" freigeben, oder lege die
 *      PDF-Datei direkt in den Ordner "docs/anleitungen/" in diesem
 *      Repository).
 *   2. Trage die URL (oder den relativen Dateipfad wie
 *      "anleitungen/Meine-Datei.pdf") in das Feld "link:" des passenden
 *      Eintrags unten ein.
 *   3. Speichern – fertig. Die Karte auf der Website wird automatisch
 *      klickbar, sobald "link" nicht mehr leer ist.
 *
 * Eine neue Anleitung hinzufügen: einfach ein weiteres Objekt
 * { title: "...", link: "" } in die passende Kategorie einfügen.
 * Eine neue Kategorie hinzufügen: ein weiteres Objekt nach dem gleichen
 * Muster an die CATEGORIES-Liste anhängen.
 */

const OVERVIEW_RESOURCE = {
  title: "Ordnerstruktur & Übersicht aller Lernkarten",
  link: "",
};

const CATEGORIES = [
  {
    id: "einstieg",
    icon: "🚀",
    title: "Einstieg in Scratch",
    description: "Die ersten Schritte in Scratch – ideal für den Anfang.",
    tutorials: [
      { title: "Geburtstagskarte", link: "" },
      { title: "Unterwasserwelt", link: "" },
      { title: "Zauberwald", link: "" },
      { title: "Quiz", link: "" },
      { title: "Geburtstagskarte", badge: "Einfache Sprache", link: "" },
      { title: "Unterwasserwelt", badge: "Einfache Sprache", link: "" },
    ],
  },
  {
    id: "bewegung",
    icon: "🏃",
    title: "Bewegung mit Scratch",
    description: "Scratch-Projekte, bei denen Bewegung und Mitmachen im Mittelpunkt stehen.",
    tutorials: [
      { title: "Warmup", link: "" },
      { title: "Stretching", link: "" },
      { title: "Tanz Party", link: "" },
      { title: "Eigene Anwendung", link: "" },
    ],
  },
  {
    id: "once-upon-a-scratch",
    icon: "📖",
    title: "Once Upon A Scratch",
    description: "Eine Geschichte in Scratch erzählen – auf Deutsch und auf Chinesisch.",
    tutorials: [
      { title: "Teil 1", badge: "Deutsch", link: "" },
      { title: "Teil 2", badge: "Deutsch · editierbar", link: "" },
      { title: "Teil 3", badge: "Deutsch", link: "" },
      { title: "Teil 1", badge: "Chinesisch", link: "" },
      { title: "Teil 2", badge: "Chinesisch · editierbar", link: "" },
      { title: "Teil 3", badge: "Chinesisch", link: "" },
    ],
  },
  {
    id: "grundlagen-informatik-2",
    icon: "💻",
    title: "Scratch-Anwendungen aus Grundlagen Informatik 2",
    description: "Kleine Anwendungen zu Informatik-Grundlagen, umgesetzt in Scratch.",
    tutorials: [
      { title: "Binärzähler", link: "" },
      { title: "CO2-Rechner", link: "" },
      { title: "Datenmengenrechner", link: "" },
      { title: "Fingeralphabet", link: "" },
      { title: "Jump'n'Run", link: "" },
    ],
  },
  {
    id: "specials",
    icon: "⭐",
    title: "Specials für Scratch",
    description: "Zusätzliche Themen-Projekte für zwischendurch.",
    tutorials: [
      { title: "Fußball", link: "" },
      { title: "Weltraum", link: "" },
    ],
  },
  {
    id: "nachhaltig",
    icon: "🌱",
    title: "Spielend nachhaltig mit Scratch",
    description: "Spiele rund um Nachhaltigkeit und Umweltschutz.",
    tutorials: [
      { title: "Labyrinth", link: "" },
      { title: "Regentropfen", link: "" },
      { title: "CO2-Pong", link: "" },
      { title: "Fang den Fisch", link: "" },
      { title: "Clean up the maze", badge: "English", link: "" },
    ],
  },
  {
    id: "traumreise",
    icon: "🌙",
    title: "Traumreise in Scratch",
    description: "Vierteilige Projekt-Reihe, Sitzung für Sitzung aufeinander aufbauend.",
    tutorials: [
      { title: "Sitzung 1", link: "" },
      { title: "Sitzung 2", link: "" },
      { title: "Sitzung 3", link: "" },
      { title: "Sitzung 4", link: "" },
    ],
  },
];
