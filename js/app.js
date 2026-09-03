function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function toHref(link) {
  return escapeHtml(encodeURI(link));
}

function renderNav() {
  const nav = document.getElementById("toc");
  nav.innerHTML = CATEGORIES.map(
    (cat) => `<a href="#${cat.id}">${cat.icon} ${escapeHtml(cat.title)}</a>`
  ).join("");
}

function renderOverviewButton() {
  const el = document.getElementById("overview-link");
  if (!OVERVIEW_RESOURCE.link) {
    el.textContent = `${OVERVIEW_RESOURCE.title} (bald verfügbar)`;
    el.classList.add("is-disabled");
    el.removeAttribute("href");
  } else {
    el.textContent = OVERVIEW_RESOURCE.title;
    el.href = encodeURI(OVERVIEW_RESOURCE.link);
    el.target = "_blank";
    el.rel = "noopener";
  }
}

function tutorialCard(tutorial) {
  const badge = tutorial.badge
    ? `<span class="badge">${escapeHtml(tutorial.badge)}</span>`
    : "";
  const hasLink = Boolean(tutorial.link);
  const action = hasLink
    ? `<a class="card-link" href="${toHref(tutorial.link)}" target="_blank" rel="noopener">Anleitung öffnen</a>`
    : `<span class="card-link is-disabled">Bald verfügbar</span>`;

  return `
    <article class="card" data-title="${escapeHtml(tutorial.title.toLowerCase())}">
      <h3>${escapeHtml(tutorial.title)}${badge}</h3>
      ${action}
    </article>
  `;
}

function renderCategories() {
  const main = document.getElementById("categories");
  main.innerHTML = CATEGORIES.map(
    (cat) => `
      <section id="${cat.id}" class="category" data-category>
        <h2>${cat.icon} ${escapeHtml(cat.title)}</h2>
        <p class="category-desc">${escapeHtml(cat.description)}</p>
        <div class="cards">
          ${cat.tutorials.map(tutorialCard).join("")}
        </div>
      </section>
    `
  ).join("");
}

async function showServerBanner() {
  try {
    const res = await fetch("server-info.json", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    if (!data.url) return;
    const banner = document.getElementById("server-banner");
    banner.textContent = `Diese Seite ist erreichbar unter: ${data.url}`;
    banner.hidden = false;
  } catch (err) {
    // Kein lokaler Server aktiv (z.B. auf GitHub Pages) - Banner bleibt versteckt.
  }
}

function setupSearch() {
  const input = document.getElementById("search");
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    document.querySelectorAll(".category").forEach((section) => {
      let visibleCount = 0;
      section.querySelectorAll(".card").forEach((card) => {
        const match = card.dataset.title.includes(query);
        card.classList.toggle("is-hidden", !match);
        if (match) visibleCount += 1;
      });
      section.classList.toggle("is-hidden", visibleCount === 0);
    });
  });
}

renderNav();
renderOverviewButton();
renderCategories();
setupSearch();
showServerBanner();
