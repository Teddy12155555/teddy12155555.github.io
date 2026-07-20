(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  const ownName = "Tai-Ming Huang";

  function appendAuthors(element, authors) {
    const parts = authors.split(ownName);
    parts.forEach(function (part, index) {
      element.append(document.createTextNode(part));
      if (index < parts.length - 1) {
        const name = document.createElement("u");
        name.textContent = ownName;
        element.append(name);
      }
    });
  }

  function renderHighlights() {
    const list = document.querySelector("#highlights-list");
    const count = document.querySelector("#highlight-count");
    if (!list) return;

    list.replaceChildren();
    data.highlights.forEach(function (item) {
      const row = document.createElement("li");
      const time = document.createElement("time");
      const copy = document.createElement("p");
      const title = document.createElement("cite");
      const venue = document.createElement("strong");

      time.dateTime = item.date;
      time.textContent = item.date;
      title.textContent = item.title;
      venue.textContent = item.venue;

      copy.append("Our paper ", title, " has been accepted to ", venue, ".");
      row.append(time, copy);
      list.append(row);
    });

    if (count) count.textContent = String(data.highlights.length);
  }

  function renderPublications() {
    const list = document.querySelector("#publications-list");
    const count = document.querySelector("#publication-count");
    if (!list) return;

    list.replaceChildren();
    data.publications.forEach(function (publication) {
      const item = document.createElement("li");
      const media = document.createElement("div");
      const content = document.createElement("article");
      const title = document.createElement("h3");
      const authors = document.createElement("p");
      const venue = document.createElement("p");

      item.className = "publication-card";
      media.className = "publication-media";
      content.className = "publication-content";
      authors.className = "publication-authors";
      venue.className = "publication-venue";
      title.textContent = publication.title;
      appendAuthors(authors, publication.authors);
      venue.textContent = publication.venue;

      if (publication.image) {
        const image = document.createElement("img");
        image.src = publication.image;
        image.alt = publication.title + " preview";
        image.loading = "lazy";
        image.decoding = "async";
        media.append(image);
      } else {
        const placeholder = document.createElement("span");
        placeholder.className = "publication-placeholder";
        placeholder.setAttribute("aria-hidden", "true");
        placeholder.textContent = "Research";
        media.append(placeholder);
      }

      content.append(title, authors, venue);

      if (publication.authors.includes("*")) {
        const contribution = document.createElement("p");
        contribution.className = "publication-contribution";
        contribution.textContent = "* Equal contribution.";
        content.append(contribution);
      }

      if (publication.links.length) {
        const links = document.createElement("div");
        links.className = "publication-links";
        links.setAttribute("aria-label", "Publication links");
        publication.links.forEach(function (link) {
          const anchor = document.createElement("a");
          anchor.href = link.url;
          anchor.textContent = link.label;
          links.append(anchor);
        });
        content.append(links);
      }

      item.append(media, content);
      list.append(item);
    });

    if (count) count.textContent = String(data.publications.length);
  }

  renderHighlights();
  renderPublications();
})();
