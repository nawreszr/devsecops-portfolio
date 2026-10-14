
const tools = [
  { name: "Git", desc: "Gestion de versions" },
  { name: "Docker", desc: "Conteneurisation" },
  { name: "Jenkins", desc: "Automatisation CI/CD" },
  { name: "Kubernetes", desc: "Orchestration" },
  { name: "Ansible", desc: "Configuration automatisée" },
  { name: "Terraform", desc: "Infrastructure as Code" },
  { name: "Argo CD", desc: "Déploiement GitOps" }
];

document.getElementById("tools").innerHTML = tools
  .map(tool => `
    <div class="item">
      <strong>${tool.name}</strong>
      <p>${tool.desc}</p>
    </div>
  `).join("");

const projects = [
  {
    title: "Mini CV",
    desc: "Création d'un CV avec HTML5, CSS3 et JavaScript.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "DevSecOps Portfolio",
    desc: "Portfolio personnel présentant mes compétences.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Déploiement Docker",
    desc: "Objectif du TP : servir le portfolio avec Nginx.",
    tech: "Docker, Nginx"
  }
];

document.getElementById("project-list").innerHTML = projects
  .map(project => `
    <div class="item">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <small>${project.tech}</small>
    </div>
  `).join("");

document.getElementById("theme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

