/*
 * Inhalte der Scratch-Anleitungen-Website.
 *
 * Die PDF-Dateien liegen im Ordner "data/" in diesem Repository, sortiert
 * in Unterordnern nach Kategorie (genauso wie im Original-Ordner). Die
 * Links unten verweisen bereits auf diese Pfade.
 *
 * So fügst du eine neue Anleitung hinzu:
 *   1. Lege die PDF-Datei in den passenden Unterordner unter "data/".
 *   2. Füge unten ein Objekt { title: "...", link: "data/<Kategorie>/<Datei>.pdf" }
 *      in die passende Kategorie ein.
 *   3. Speichern – fertig. Die Karte auf der Website wird automatisch
 *      klickbar, sobald "link" nicht mehr leer ist. Leerzeichen und
 *      Umlaute im Pfad sind kein Problem, die Website codiert die URL
 *      automatisch korrekt.
 *
 * Eine neue Kategorie hinzufügen: ein weiteres Objekt nach dem gleichen
 * Muster an die CATEGORIES-Liste anhängen.
 */

const OVERVIEW_RESOURCE = {
  title: "Ordnerstruktur & Übersicht aller Lernkarten",
  link: "data/Lernkarten_Ordnerstuktur_Scratch.pdf",
};

const CATEGORIES = [
  {
    id: "einstieg",
    icon: "🚀",
    title: "Einstieg in Scratch",
    description: "Die ersten Schritte in Scratch – ideal für den Anfang.",
    tutorials: [
      { title: "Geburtstagskarte", link: "data/Einstieg in Scratch/1_Geburtstagskarte.pdf" },
      { title: "Unterwasserwelt", link: "data/Einstieg in Scratch/2_Unterwasserwelt.pdf" },
      { title: "Zauberwald", link: "data/Einstieg in Scratch/3_Zauberwald.pdf" },
      { title: "Quiz", link: "data/Einstieg in Scratch/4_Quiz.pdf" },
      { title: "Geburtstagskarte", badge: "Einfache Sprache", link: "data/Einstieg in Scratch/5_Geburtstagskarte_Einfache Sprache.pdf" },
      { title: "Unterwasserwelt", badge: "Einfache Sprache", link: "data/Einstieg in Scratch/6_Unterwasserwelt_Einfache Sprache.pdf" },
    ],
  },
  {
    id: "bewegung",
    icon: "🏃",
    title: "Bewegung mit Scratch",
    description: "Scratch-Projekte, bei denen Bewegung und Mitmachen im Mittelpunkt stehen.",
    tutorials: [
      { title: "Warmup", link: "data/Bewegung mit Scratch/Scratch Bewegung 01 Warmup Lernkarten.pdf" },
      { title: "Stretching", link: "data/Bewegung mit Scratch/Scratch Bewegung 02 Stretching Lernkarten.pdf" },
      { title: "Tanz Party", link: "data/Bewegung mit Scratch/Scratch Bewegung 03 Tanz Party Lernkarten.pdf" },
      { title: "Eigene Anwendung", link: "data/Bewegung mit Scratch/Scratch Bewegung 04 Eigene Anwendung Lernkarten.pdf" },
    ],
  },
  {
    id: "once-upon-a-scratch",
    icon: "📖",
    title: "Once Upon A Scratch",
    description: "Eine Geschichte in Scratch erzählen – auf Deutsch und auf Chinesisch.",
    tutorials: [
      { title: "Teil 1", badge: "Deutsch", link: "data/Once Upon A Scratch/Deutsch_Once Upon A Scratch_01 Lernkarten.pdf" },
      { title: "Teil 2", badge: "Deutsch · editierbar", link: "data/Once Upon A Scratch/Deutsch_Once Upon A Scratch_02 Lernkarten_editierbar.pdf" },
      { title: "Teil 3", badge: "Deutsch", link: "data/Once Upon A Scratch/Deutsch_Once Upon A Scratch_03 Lernkarten.pdf" },
      { title: "Teil 1", badge: "Chinesisch", link: "data/Once Upon A Scratch/Chinesisch_Once Upon A Scratch 01 Lernkarten.pdf" },
      { title: "Teil 2", badge: "Chinesisch · editierbar", link: "data/Once Upon A Scratch/Chinesisch_Once Upon A Scratch 02 Lernkarten_editierbar.pdf" },
      { title: "Teil 3", badge: "Chinesisch", link: "data/Once Upon A Scratch/Chinesisch_Once Upon A Scratch 03 Lernkarten.pdf" },
    ],
  },
  {
    id: "grundlagen-informatik-2",
    icon: "💻",
    title: "Scratch-Anwendungen aus Grundlagen Informatik 2",
    description: "Kleine Anwendungen zu Informatik-Grundlagen, umgesetzt in Scratch.",
    tutorials: [
      { title: "Binärzähler", link: "data/Scratch Anwendungen aus Grundlagen Informatik 2/Anwendungen aus Grundlagen Informatik II_ Binärzähler Lernkarten.pdf" },
      { title: "CO2-Rechner", link: "data/Scratch Anwendungen aus Grundlagen Informatik 2/Anwendungen aus Grundlagen InformatikII_ CO2 Rechner.pdf" },
      { title: "Datenmengenrechner", link: "data/Scratch Anwendungen aus Grundlagen Informatik 2/Anwendungen aus Grundlagen Informatik II_ Datenmengenrechner Lernkarten.pdf" },
      { title: "Fingeralphabet", link: "data/Scratch Anwendungen aus Grundlagen Informatik 2/Anwendungen aus Grundlagen Informatik II_ Fingeralphabet Lernkarten.pdf" },
      { title: "Jump'n'Run", link: "data/Scratch Anwendungen aus Grundlagen Informatik 2/Anwendungen aus Grundlagen Informatik II_ Jump_n_run Lernkarten.pdf" },
    ],
  },
  {
    id: "specials",
    icon: "⭐",
    title: "Specials für Scratch",
    description: "Zusätzliche Themen-Projekte für zwischendurch.",
    tutorials: [
      { title: "Fußball", link: "data/Specials für Scratch/Special-1-Fussball.pdf" },
      { title: "Weltraum", link: "data/Specials für Scratch/Special-2-Weltraum.pdf" },
    ],
  },
  {
    id: "nachhaltig",
    icon: "🌱",
    title: "Spielend nachhaltig mit Scratch",
    description: "Spiele rund um Nachhaltigkeit und Umweltschutz.",
    tutorials: [
      { title: "Labyrinth", link: "data/Spielend nachhaltig mit Scratch/Scratch spielend nachhaltig 01_Labyrinth_Lernkarten.pdf" },
      { title: "Regentropfen", link: "data/Spielend nachhaltig mit Scratch/Scratch spielend nachhaltig 02_Regentropfen_Lernkarten_.pdf" },
      { title: "CO2-Pong", link: "data/Spielend nachhaltig mit Scratch/Scratch spielend nachhaltig 03_CO2Pong_Lernkarten.pdf" },
      { title: "Fang den Fisch", link: "data/Spielend nachhaltig mit Scratch/Scratch spielend nachhaltig 04_FangDenFisch_Lernkarten.pdf" },
      { title: "Clean up the maze", badge: "English", link: "data/Spielend nachhaltig mit Scratch/ENGLISCH/English_Scratch spielend nachhaltig 01 Clean up the maze.pdf" },
    ],
  },
  {
    id: "traumreise",
    icon: "🌙",
    title: "Traumreise in Scratch",
    description: "Vierteilige Projekt-Reihe, Sitzung für Sitzung aufeinander aufbauend.",
    tutorials: [
      { title: "Sitzung 1", link: "data/Traumreise in Scratch/Traumreise_Tutorial_Sitzung1.pdf" },
      { title: "Sitzung 2", link: "data/Traumreise in Scratch/Traumreise_Tutorial_Sitzung2.pdf" },
      { title: "Sitzung 3", link: "data/Traumreise in Scratch/Traumreise_Tutorial_Sitzung3.pdf" },
      { title: "Sitzung 4", link: "data/Traumreise in Scratch/Traumreise_Tutorial_Sitzung4.pdf" },
    ],
  },
];
