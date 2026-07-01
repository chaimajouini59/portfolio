// ============================================
// PROJECT DATA
// Edit this array to add / update projects.
// domain: EMBARQUÉ | IOT | IA | FPGA | MOBILE
// ============================================
const PROJECTS = [
  {
    domain: "MOBILE",
    year: "2026",
    title: "Navigation Indoor par Capteurs Inertiels",
    desc: "Application mobile de positionnement et navigation indoor à l'université, basée sur les capteurs inertiels du smartphone et un traitement du signal custom.",
    tags: ["Android Studio", "Java", "Accéléromètre", "Gyroscope", "Magnétomètre"],
    link: "https://github.com/chaimajouini59/Indoor-Navigation-IMU"
  },
  {
    domain: "FPGA",
    year: "2026",
    title: "Acquisition SPI & Traitement FPGA Accéléromètre",
    desc: "Acquisition SPI d'un accéléromètre ADXL362, traitement sur FPGA, transfert UART vers Raspberry Pi et supervision temps réel en Python.",
    tags: ["FPGA (Nexys A7)", "ADXL362", "SPI", "UART", "FSM", "Python"],
    link: null
  },
  {
    domain: "IOT",
    year: "2025",
    title: "Passerelle CAN/Ethernet — Suivi Température Véhicule",
    desc: "Passerelle STM32 & Raspberry Pi pour acquisition CAN, transmission Ethernet (LwIP) et publication MQTT, avec interface de supervision Tkinter.",
    tags: ["STM32F4/F7", "Raspberry Pi 4", "CAN", "LWIP", "MQTT", "Tkinter"],
    link: "https://github.com/chaimajouini59/Gateway_Ethernet_CAN_Project"
  },
  {
    domain: "IOT",
    year: "2025",
    title: "Suivi & Optimisation Énergétique IoT",
    desc: "Solution IoT de suivi énergétique via capteurs de courant, lumière et présence PIR, avec pipeline Node-RED, InfluxDB et dashboards Grafana.",
    tags: ["ESP32", "Wi-Fi", "MQTT", "Node-RED", "InfluxDB", "Grafana"],
    link: null
  },
  {
    domain: "EMBARQUÉ",
    year: "2025",
    title: "Portage Logiciel STM32F → STM32U",
    desc: "Migration et validation complète d'une application firmware entre familles de microcontrôleurs STM32.",
    tags: ["STM32U5", "STM32F4", "Keil"],
    link: null
  },
  {
    domain: "EMBARQUÉ",
    year: "2023",
    title: "Bootloader & Mise à Jour Firmware STM32",
    desc: "Système de bootloader permettant le déploiement et la maintenance sécurisée d'images logicielles sur carte STM32.",
    tags: ["STM32", "Bootloader", "C embarqué"],
    link: "https://github.com/chaimajouini59/Bootloader"
  },
  {
    domain: "FPGA",
    year: "2024",
    title: "Processeur RISC 16 bits — Conception RTL",
    desc: "Conception complète d'un processeur RISC 16 bits (banc de registres, ALU, unité de contrôle) au niveau RTL, simulé sous ModelSim.",
    tags: ["VHDL", "FPGA", "ModelSim", "Architecture processeur"],
    link: "https://github.com/chaimajouini59/RISC16-Processor-VHDL"
  },
  {
    domain: "IA",
    year: "2023",
    title: "Canne Intelligente pour Malvoyants",
    desc: "Détection d'obstacles et d'objets par IA embarquée, assistant la navigation en temps réel pour les personnes malvoyantes.",
    tags: ["Raspberry Pi", "Arduino", "TensorFlow", "OpenCV", "Capteurs ultrasons"],
    link: null
  },
  {
    domain: "IA",
    year: "2022",
    title: "Robot Télécommandé par Gestes Manuels",
    desc: "Robot piloté par reconnaissance de gestes manuels, avec contrôle à distance via MQTT et interface Flask.",
    tags: ["TensorFlow", "Raspberry Pi 4", "MQTT", "Flask"],
    link: null
  }
];

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal">
      <div class="pc-head">
        <span class="pc-domain">${p.domain}</span>
        <span>${p.year}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="pc-tags">
        ${p.tags.map(t => `<span>${t}</span>`).join("")}
      </div>
      ${p.link
        ? `<a class="pc-link" href="${p.link}" target="_blank" rel="noopener">Voir le code sur GitHub ↗</a>`
        : `<span class="pc-link" style="opacity:.55; cursor:default;">Code privé / à venir</span>`}
    </article>
  `).join("");
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
  const els = document.querySelectorAll(".reveal, .tl-item, .edu-item, .project-card");
  els.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
function initActiveNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.style.color = link.getAttribute("href") === `#${id}` ? "var(--copper)" : "";
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initReveal();
  initActiveNav();
});
