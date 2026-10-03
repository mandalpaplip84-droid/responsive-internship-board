const internships = [
  {
    title: "Frontend Web Developer Intern",
    domain: "Web Development",
    description: "Build responsive pages using semantic HTML, CSS and JavaScript.",
    duration: "4 weeks",
    mode: "Remote"
  },
  {
    title: "Python Developer Intern",
    domain: "Python",
    description: "Practice Python programming and create small automation projects.",
    duration: "6 weeks",
    mode: "Remote"
  },
  {
    title: "Java Developer Intern",
    domain: "Java",
    description: "Learn Java fundamentals and develop beginner-friendly applications.",
    duration: "6 weeks",
    mode: "Hybrid"
  },
  {
    title: "Android Development Intern",
    domain: "Android Development",
    description: "Create simple Android apps and learn mobile development workflows.",
    duration: "8 weeks",
    mode: "Remote"
  },
  {
    title: "Full Stack Development Intern",
    domain: "Full Stack Development",
    description: "Work across frontend and backend concepts to build a complete web app.",
    duration: "8 weeks",
    mode: "Remote"
  },
  {
    title: "JavaScript Web Intern",
    domain: "Web Development",
    description: "Improve DOM, events, forms and interactive UI development skills.",
    duration: "4 weeks",
    mode: "Remote"
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
    const matchesDomain = domain === "all" || item.domain === domain;
    const searchable = `${item.title} ${item.domain} ${item.description}`.toLowerCase();
    const matchesSearch = searchable.includes(query);
    return matchesDomain && matchesSearch;
  });

  list.innerHTML = "";
  resultCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    status.textContent = "No internships found. Try a different search term or domain.";
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
      <p>${item.description}</p>
      <div class="meta" aria-label="Internship details">
        <span>${item.duration}</span>
        <span>${item.mode}</span>
      </div>
    `;

    list.appendChild(article);
  });
}

searchInput.addEventListener("input", render);
domainSelect.addEventListener("change", render);

render();
