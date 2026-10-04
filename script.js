const internships = [
  {
    id: "INT-101",
    title: "Frontend Intern",
    domain: "Full Stack Development",
    mode: "Remote",
    location: "India",
    skills: ["HTML", "CSS", "JavaScript"],
    openings: 3
  },
  {
    id: "INT-102",
    title: "API Engineering Intern",
    domain: "Full Stack Development",
    mode: "Hybrid",
    location: "Pune",
    skills: ["Node.js", "SQL", "Testing"],
    openings: 2
  },
  {
    id: "INT-103",
    title: "UI/UX Intern",
    domain: "UI/UX",
    mode: "Remote",
    location: "India",
    skills: ["Figma", "Research", "Accessibility"],
    openings: 1
  },
  {
    id: "INT-104",
    title: "Data Analyst Intern",
    domain: "Data Analytics",
    mode: "On-site",
    location: "Bengaluru",
    skills: ["Excel", "SQL", "Data Visualization"],
    openings: 2
  },
  {
    id: "INT-105",
    title: "Security Operations Intern",
    domain: "Cyber Security",
    mode: "Remote",
    location: "India",
    skills: ["Linux", "Logs", "Networking"],
    openings: 1
  }
];

const searchInput = document.getElementById("search");
const domainSelect = document.getElementById("domain");
const list = document.getElementById("internshipList");
const status = document.getElementById("status");
const resultCount = document.getElementById("resultCount");

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const domain = domainSelect.value;

  const filtered = internships.filter((item) => {
    const matchesDomain =
      domain === "all" || item.domain === domain;

    const searchable = [
      item.title,
      item.domain,
      item.mode,
      item.location,
      ...item.skills
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchable.includes(query);

    return matchesDomain && matchesSearch;
  });

  list.innerHTML = "";

  resultCount.textContent =
    `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    status.textContent =
      "No internships found. Try a different search term or domain.";
    status.classList.add("show");
    return;
  }

  status.classList.remove("show");

  filtered.forEach((item) => {
    const article = document.createElement("article");

    article.className = "card";
    article.tabIndex = 0;

    article.innerHTML = `
      <span class="badge">${item.domain}</span>

      <h3>${item.title}</h3>

      <p>
        ${item.location} · ${item.mode}
      </p>

      <p>
        <strong>Skills:</strong>
        ${item.skills.join(", ")}
      </p>

      <div class="meta" aria-label="Internship details">
        <span>
          ${item.openings}
          opening${item.openings === 1 ? "" : "s"}
        </span>

        <span>${item.id}</span>
      </div>
    `;

    list.appendChild(article);
  });
}

searchInput.addEventListener("input", render);
domainSelect.addEventListener("change", render);

render();
