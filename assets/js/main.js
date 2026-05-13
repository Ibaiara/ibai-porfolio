/**
 * Template Name: SnapFolio
 * Template URL: https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/
 * Updated: Jul 21 2025 with Bootstrap v5.3.7
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');
  let typedInstance = null;

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
    }
  }

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * AOS init
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

  /**
   * PureCounter
   */
  new PureCounter();

  /**
   * Skills animation
   */
  document.querySelectorAll('.skills-animation').forEach(item => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function () {
        item.querySelectorAll('.progress .progress-bar').forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * GLightbox
   */
  GLightbox({ selector: '.glightbox' });

  /**
   * Isotope
   */
  document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
    let layout = isotopeItem.getAttribute('data-layout') || 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') || '*';

    let iso;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
      iso = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
      filterBtn.addEventListener('click', function () {
        isotopeItem.querySelector('.filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        iso.arrange({ filter: this.getAttribute('data-filter') });
      });
    });
  });

  /**
   * Typed.js handling (SAFE)
   */
  function updateTyped(lang) {
    const el = document.querySelector('.typed');
    if (!el) return;

    const items =
      lang === 'en'
        ? el.getAttribute('data-typed-items-en')
        : el.getAttribute('data-typed-items');

    if (!items) return;

    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }

    el.textContent = '';

    typedInstance = new Typed('.typed', {
      strings: items.split(','),
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Language switcher
   */
  const translations = {
    es: {
      "hero.lead.prefix": "Soy un",
      "hero.description":
        "Ingeniero informático interesado en el diseño y desarrollo de sistemas de software, con experiencia en entornos industriales, herramientas empresariales y proyectos experimentales orientados a comprender cómo se construyen y escalan sistemas completos.",
      "hero.projects": "Explora Mis Proyectos",
      "hero.contact": "Ponte en Contacto",
      "hero.cv": "Descargar CV",

      "nav.home": "Inicio",
      "nav.about": "Sobre mi",
      "nav.resume": "Curriculum",
      "nav.portfolio": "Porfolio",
      "nav.contact": "Contacto",

      "about.profession": "Ingeniero Informático",
      "about.badge": "Sobre mi",
      "about.heading": "Ingeniero informático con enfoque en sistemas completos",

      "about.p1":
        "Ingeniero informático con experiencia en el diseño y desarrollo de sistemas de software en distintos entornos profesionales, desde pequeñas empresas industriales hasta organizaciones de mayor tamaño.",

      "about.p2":
        "He participado en proyectos de implantación de ERPs, desarrollo de herramientas internas, automatización de procesos y aplicaciones interactivas. Mi interés principal está en comprender cómo se diseñan, conectan y escalan sistemas completos, más allá de una tecnología concreta.",

      "about.detail.specialization": "Especialización",
      "about.detail.specialization.value": "Desarrollo de software y sistemas empresariales",

      "about.detail.profile": "Perfil",
      "about.detail.profile.value": "Ingeniero de Software",

      "about.detail.experience": "Experiencia",
      "about.detail.experience.value": "Industria · Startups · Proyectos personales",

      "about.detail.languages": "Idiomas",
      "about.detail.languages.value": "Euskera · Español · Inglés",

      "about.title": "Sobre mi",
      "skills.title": "Skills",
      "resume.title": "Curriculum",
      "portfolio.title": "Porfolio",
      "contact.title": "Contacto",

      "skills.title": "Skills",
      "skills.subtitle":
        "Tecnologías y áreas con las que he trabajado en contextos reales y proyectos personales.",

      "skills.frontend.title": "Aplicaciones e Interfaces",
      "skills.backend.title": "Backend & Sistemas",

      "skills.level.intermediate": "Intermedio",
      "skills.level.advanced": "Avanzado",

      "skills.htmlcss.desc":
        "Desarrollo de interfaces funcionales y mantenibles para aplicaciones web internas.",

      "skills.js.desc":
        "Lógica de cliente, interacción con APIs y automatización de tareas.",

      "skills.unity.desc":
        "Desarrollo de interfaces interactivas en entornos 3D y gemelos digitales.",

      "skills.automation.title": "Automatización y scripts",
      "skills.automation.desc":
        "Automatización de procesos y desarrollo de herramientas internas.",

      "skills.pythonc.title": "Python y C",
      "skills.pythonc.desc":
        "Desarrollo de scripts, utilidades y lógica de negocio.",

      "skills.sql.title": "SQL / Datos",
      "skills.sql.desc":
        "Consultas, gestión de datos y soporte a herramientas corporativas.",

      "resume.title": "Curriculum",
      "resume.subtitle":
        "Experiencia profesional y formación académica en distintos entornos, desde industria hasta desarrollo de software y proyectos experimentales.",

      "resume.context.title": "Contexto profesional",
      "resume.context.text":
        "Ingeniero informático con capacidad para trabajar en distintos ámbitos, desde entornos industriales hasta desarrollo de software comercial y proyectos experimentales. Interesado en comprender cómo se diseñan y conectan sistemas completos en contextos reales.",

      "resume.contact.title": "Informacion de Contacto",
      "resume.experience.title": "Experiencia Profesional",

      "resume.job.ingeteam.title": "Ingeniero Informático",
      "resume.job.ingeteam.date": "Diciembre 2025 - Actualidad",
      "resume.job.ingeteam.b1": "Adaptación y ampliación del sector de bombas en el área de informática y comunicaciones",
      "resume.job.ingeteam.b2": "Gestión y mantenimiento de herramientas software para selección de equipos",
      "resume.job.ingeteam.b3": "Trabajo con datos y aplicaciones internas orientadas a uso corporativo",
      "resume.job.ingeteam.b4": "Desarrollo de automatizaciones para generación de informes y soporte a negocio",

      "resume.job.immersia.title": "Trabajo de Fin de Grado – Desarrollo de Gemelos Digitales",
      "resume.job.immersia.date": "Enero 2025 - Junio 2025",
      "resume.job.immersia.b1": "Implementación de nuevas funcionalidades en un gemelo digital",
      "resume.job.immersia.b2": "Desarrollo de visualizaciones avanzadas e interactivas de datos",
      "resume.job.immersia.b3": "Trabajo con Unity para creación de interfaces e interacción contextual",

      "resume.job.labelan.title": "Prácticas Universitarias de Informática",
      "resume.job.labelan.date": "Julio 2023 - Septiembre 2023",
      "resume.job.labelan.b1": "Participación en la implantación de un nuevo sistema ERP",
      "resume.job.labelan.b2": "Ayuda en procesos de digitalización y migración de datos",
      "resume.job.labelan.b3": "Colaboración con el equipo informático y el área administrativa",
      "resume.job.labelan.b4": "Validación de procesos y apoyo en pruebas funcionales",

      "resume.job.maintenance.title": "Técnico de Mantenimiento (refuerzo de verano)",
      "resume.job.maintenance.date": "Julio 2021 - Septiembre 2021",
      "resume.job.maintenance.b1": "Trabajo de reparación y mantenimiento refractario en hornos industriales",
      "resume.job.maintenance.b2": "Apoyo a tareas técnicas en entorno industrial real",

      "resume.education.title": "Educacion",
      "resume.education.degree": "Grado en Ingeniería Informática",
      "resume.education.desc":
        "Formación orientada al desarrollo de software, sistemas y bases de la ingeniería informática.",

      "portfolio.title": "Porfolio",
      "portfolio.subtitle":
        "Proyectos personales y profesionales orientados al diseño y desarrollo de sistemas de software en contextos reales y experimentales.",

      "portfolio.filter.all": "Todos",
      "portfolio.filter.software": "Software",
      "portfolio.filter.systems": "Sistemas & IA",

      "portfolio.travel.category": "Software · Aplicación empresarial",
      "portfolio.travel.title": "Gestión de viajes corporativos",
      "portfolio.travel.desc":
        "Aplicación desarrollada inicialmente como app de escritorio con Electron para la gestión de viajes en un entorno empresarial real. Incluye una demo web que reutiliza la lógica principal del backend.",
      "portfolio.travel.demo": "Ver demo web",
      "portfolio.travel.github": "Ver código en GitHub",

      "portfolio.rpg.category": "IA · Sistemas experimentales",
      "portfolio.rpg.title": "IbaiRPG — Motor narrativo con IA",
      "portfolio.rpg.desc":
        "RPG narrativo impulsado por IA, orientado a explorar orquestación de flujos, control de estado persistente y automatización de diferentes agentes en sistemas generativos con n8n.",
      "portfolio.rpg.demo": "Demo web próximamente",
      "portfolio.rpg.github": "Ver código en GitHub",

      "contact.title": "Contacto",
      "contact.subtitle":
        "Si quieres contactar conmigo o ver más sobre mi trabajo, puedes hacerlo a través de los siguientes canales.",

      "contact.info.title": "Informacion de Contacto",
      "contact.info.text":
        "Estoy abierto a oportunidades profesionales, colaboración en proyectos o cualquier consulta relacionada con mi trabajo.",

      "contact.location.title": "Ubicación",
      "contact.email.title": "Email",
      "contact.github.title": "GitHub",
      "contact.linkedin.title": "LinkedIn",

      "contact.cta.title": "Ponte en Contacto",
      "contact.cta.text":
        "La forma más rápida de contactarme es por correo electrónico o LinkedIn. Suelo responder en un plazo razonable.",
      "contact.cta.button": "Enviar Email",
    },
    en: {
      "hero.lead.prefix": "I am a",
      "hero.description":
        "Software engineer focused on designing and building complete software systems, with experience in industrial environments, enterprise tools and experimental projects.",
      "hero.projects": "View My Projects",
      "hero.contact": "Get In Touch",
      "hero.cv": "Download CV",
      
      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.resume": "Resume",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",


      "about.profession": "Software Engineer",
      "about.badge": "About Me",
      "about.heading": "Software engineer focused on complete systems",

      "about.p1":
        "Software engineer with experience in designing and developing software systems in different professional environments, from small industrial companies to larger organizations.",

      "about.p2":
        "I have worked on ERP implementations, internal tool development, process automation and interactive applications. My main interest is understanding how complete systems are designed, connected and scaled beyond any single technology.",

      "about.detail.specialization": "Specialization",
      "about.detail.specialization.value": "Software and enterprise systems development",

      "about.detail.profile": "Profile",
      "about.detail.profile.value": "Software Engineer",

      "about.detail.experience": "Experience",
      "about.detail.experience.value": "Industry · Startups · Personal projects",

      "about.detail.languages": "Languages",
      "about.detail.languages.value": "Basque · Spanish · English",


      "about.title": "About Me",
      "skills.title": "Skills",
      "resume.title": "Resume",
      "portfolio.title": "Portfolio",
      "contact.title": "Contact",

      "skills.title": "Skills",
      "skills.subtitle":
        "Technologies and areas I have worked with in real-world contexts and personal projects.",

      "skills.frontend.title": "Applications & Interfaces",
      "skills.backend.title": "Backend & Systems",

      "skills.level.intermediate": "Intermediate",
      "skills.level.advanced": "Advanced",

      "skills.htmlcss.desc":
        "Development of functional and maintainable interfaces for internal web applications.",

      "skills.js.desc":
        "Client-side logic, API interaction and task automation.",

      "skills.unity.desc":
        "Development of interactive interfaces in 3D environments and digital twins.",

      "skills.automation.title": "Automation and scripting",
      "skills.automation.desc":
        "Process automation and development of internal tools.",

      "skills.pythonc.title": "Python and C",
      "skills.pythonc.desc":
        "Development of scripts, utilities and business logic.",

      "skills.sql.title": "SQL / Data",
      "skills.sql.desc":
        "Queries, data management and support for corporate tools.",


      "resume.title": "Resume",
      "resume.subtitle":
        "Professional experience and academic background across different environments, from industry to software development and experimental projects.",

      "resume.context.title": "Professional background",
      "resume.context.text":
        "Software engineer with the ability to work across different contexts, from industrial environments to commercial software development and experimental projects. Interested in understanding how complete systems are designed and connected in real-world scenarios.",

      "resume.contact.title": "Contact Information",
      "resume.experience.title": "Professional Experience",

      "resume.job.ingeteam.title": "Software Engineer",
      "resume.job.ingeteam.date": "December 2025 - Present",
      "resume.job.ingeteam.b1": "Adaptation and expansion of the pump sector within the IT and communications area",
      "resume.job.ingeteam.b2": "Management and maintenance of software tools for equipment selection",
      "resume.job.ingeteam.b3": "Work with data and internal applications for corporate use",
      "resume.job.ingeteam.b4": "Development of automations for report generation and business support",

      "resume.job.immersia.title": "Bachelor’s Thesis – Digital Twin Development",
      "resume.job.immersia.date": "January 2025 - June 2025",
      "resume.job.immersia.b1": "Implementation of new functionalities in a digital twin",
      "resume.job.immersia.b2": "Development of advanced and interactive data visualizations",
      "resume.job.immersia.b3": "Work with Unity to create interfaces and contextual interaction",

      "resume.job.labelan.title": "University Internship in Computer Engineering",
      "resume.job.labelan.date": "July 2023 - September 2023",
      "resume.job.labelan.b1": "Participation in the implementation of a new ERP system",
      "resume.job.labelan.b2": "Support in digitalization processes and data migration",
      "resume.job.labelan.b3": "Collaboration with the IT team and the administrative area",
      "resume.job.labelan.b4": "Process validation and support in functional testing",

      "resume.job.maintenance.title": "Maintenance Technician (summer support)",
      "resume.job.maintenance.date": "July 2021 - September 2021",
      "resume.job.maintenance.b1": "Refractory repair and maintenance work in industrial furnaces",
      "resume.job.maintenance.b2": "Support for technical tasks in a real industrial environment",

      "resume.education.title": "Education",
      "resume.education.degree": "Bachelor’s Degree in Computer Engineering",
      "resume.education.desc":
        "Education focused on software development, systems and the foundations of computer engineering.",

      "portfolio.title": "Portfolio",
      "portfolio.subtitle":
        "Personal and professional projects focused on designing and developing software systems in real-world and experimental contexts.",

      "portfolio.filter.all": "All",
      "portfolio.filter.software": "Software",
      "portfolio.filter.systems": "Systems & AI",

      "portfolio.travel.category": "Software · Enterprise application",
      "portfolio.travel.title": "Corporate travel management",
      "portfolio.travel.desc":
        "Application originally developed as an Electron desktop app for managing travel in a real corporate environment. Includes a web demo that reuses the core backend logic.",
      "portfolio.travel.demo": "View web demo",
      "portfolio.travel.github": "View code on GitHub",

      "portfolio.rpg.category": "AI · Experimental systems",
      "portfolio.rpg.title": "IbaiRPG — AI-driven narrative engine",
      "portfolio.rpg.desc":
        "AI-driven narrative RPG focused on exploring workflow orchestration, persistent state control and agent automation in generative systems using n8n.",
      "portfolio.rpg.demo": "Web demo coming soon",
      "portfolio.rpg.github": "View code on GitHub",


      "contact.title": "Contact",
      "contact.subtitle":
        "If you would like to get in touch or learn more about my work, you can reach me through the following channels.",

      "contact.info.title": "Contact Information",
      "contact.info.text":
        "I am open to professional opportunities, project collaboration, or any inquiry related to my work.",

      "contact.location.title": "Location",
      "contact.email.title": "Email",
      "contact.github.title": "GitHub",
      "contact.linkedin.title": "LinkedIn",

      "contact.cta.title": "Get in Touch",
      "contact.cta.text":
        "The fastest way to contact me is by email or LinkedIn. I usually reply within a reasonable timeframe.",
      "contact.cta.button": "Send Email",
    }
  };

  let currentLang = localStorage.getItem('lang') || 'es';

  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      if (translations[lang][key]) {
        el.setAttribute("title", translations[lang][key]);
      }
    });

    updateTyped(lang);

    localStorage.setItem('lang', lang);
    currentLang = lang;

    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    document.getElementById('lang-toggle')?.addEventListener('click', () => {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  });

})();