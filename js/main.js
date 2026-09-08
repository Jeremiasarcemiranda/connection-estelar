(() => {
  'use strict';

  /* ============================================================
     IDIOMA (ES / EN)
     ============================================================ */
  const I18N = {
    es: {
      'nav.servicios': 'Servicios',
      'nav.pasarela': 'Pasarela',
      'nav.nosotros': '¿Quiénes somos?',
      'nav.proyectos': 'Proyectos',
      'nav.contactar': 'Contactar →',

      'hero.tag': 'AGENCIA DE DESARROLLO WEB & SISTEMAS',
      'hero.line1': 'Conectamos tu',
      'hero.outline': 'con el cosmos.',
      'hero.sub': 'En <strong>Estelar Connection</strong> diseñamos y desarrollamos páginas web, plataformas y sistemas a medida. De las estrellas a tu pantalla.',
      'hero.cta1': 'Ver pasarela de tecnologías ↓',
      'hero.cta2': 'Empecemos un proyecto',
      'hero.stat1': 'proyectos digitalizados',
      'hero.stat2': 'procesos manuales eliminados',
      'hero.stat3': 'órbita de soporte',
      'typewriter.words': ['negocio', 'comunidad', 'historia'],

      'sec.servicios.idx': '01 / SERVICIOS',
      'sec.servicios.h2': 'HACEMOS',
      'serv.paginas.titulo': 'Páginas Web',
      'serv.paginas.desc': 'Webs institucionales, portfolios y landing pages veloces, accesibles y con diseños que convierten visitantes en clientes.',
      'serv.sistemas.titulo': 'Sistemas a Medida',
      'serv.sistemas.desc': 'Plataformas de gestión: inscripciones, usuarios, reportes y automatización de procesos que hoy se hacen a mano.',
      'serv.devops.titulo': 'Infraestructura & DevOps',
      'serv.devops.desc': 'Despliegue, contenedores y administración de servidores Linux para mantener tus sistemas siempre arriba, seguros y veloces.',

      'sec.pasarela.idx': '02 / PASARELA',
      'sec.pasarela.h2': 'TECNOLOGÍAS',
      'sec.pasarela.sub1': 'Nuestras tecnologías desfilan por la pasarela.',
      'sec.pasarela.sub2': 'arrastrá',
      'pasarela.ant': '← ANT',
      'pasarela.sig': 'SIG →',

      'cat.language': 'LENGUAJE',
      'cat.style': 'ESTILO',
      'cat.frontend': 'FRONT-END',
      'cat.framework': 'FRAMEWORK',
      'cat.backend': 'BACK-END',
      'cat.database': 'BASE DE DATOS',
      'cat.devops': 'DEVOPS',
      'cat.versions': 'VERSIONES',
      'cat.systems': 'SISTEMAS',

      'tech.html': 'HTML',
      'tech-desc.html': 'Estructura semántica de toda la web.',
      'tech.css': 'CSS',
      'tech-desc.css': 'Diseño, layout y animaciones.',
      'tech.javascript': 'JavaScript',
      'tech-desc.javascript': 'Interactividad y dinamismo en el navegador.',
      'tech.typescript': 'TypeScript',
      'tech-desc.typescript': 'JavaScript con tipado fuerte y seguro.',
      'tech.react': 'React',
      'tech-desc.react': 'Interfaces modernas y componentes reutilizables.',
      'tech.tailwind': 'Tailwind CSS',
      'tech-desc.tailwind': 'Estilos utilitarios de desarrollo veloz.',
      'tech.bootstrap': 'Bootstrap',
      'tech-desc.bootstrap': 'Grids y componentes listos para usar.',
      'tech.python': 'Python',
      'tech-desc.python': 'Back-end, automatización y datos.',
      'tech.php': 'PHP',
      'tech-desc.php': 'Clásico del back-end web.',
      'tech.csharp': 'C#',
      'tech-desc.csharp': 'Robusto para aplicaciones y servicios.',
      'tech.cplusplus': 'C++',
      'tech-desc.cplusplus': 'Alto rendimiento y sistemas.',
      'tech.nodejs': 'Node.js',
      'tech-desc.nodejs': 'JavaScript del lado del servidor.',
      'tech.postgresql': 'PostgreSQL',
      'tech-desc.postgresql': 'Base relacional avanzada y confiable.',
      'tech.mysql': 'MySQL',
      'tech-desc.mysql': 'Base relacional popular y probada.',
      'tech.mariadb': 'MariaDB',
      'tech-desc.mariadb': 'Derivado de MySQL de código abierto.',
      'tech.docker': 'Docker',
      'tech-desc.docker': 'Contenedores para todo ambiente.',
      'tech.git': 'Git',
      'tech-desc.git': 'Control de versiones colaborativo.',
      'tech.linux': 'Linux',
      'tech-desc.linux': 'Servidores y administración de sistemas.',

      'sec.nosotros.idx': '03 / NOSOTROS',
      'sec.nosotros.h2': 'SOMOS?',
      'about.titulo1': 'Estelar Connection',
      'about.titulo2': 'lleva tu organización a otra galaxia digital.',
      'about.p1': 'Nacimos desde la digitalizacion de un comedor escolar, migracion de registros físicos a plataformas web completas y armamos servidores. Desde la base de datos hasta el último píxel de la interfaz, hacemos que la tecnología trabaje por vos.',
      'about.p2': 'Creemos en software <strong>simple, directo y confiables</strong>. Somos curiosos, autodidactas y metódicos; cada proyecto es una constelación nueva por descubrir.',
      'about.mision.titulo': 'MISIÓN',
      'about.mision.desc': 'Conectar procesos con tecnología y construir productos que resuelvan de verdad.',
      'about.valores.titulo': 'VALORES',
      'about.valores.desc': 'Autodidacta · Equipo · Comunicación clara · Metodologías ágiles · Calidad.',

      'sec.trabajo.idx': '04 / TRABAJO',
      'sec.trabajo.h2': 'REALES',
      'proy.estado.terminado': 'TERMINADO',
      'proy.sgc.desc': 'Backend en <strong>PostgreSQL</strong> que automatiza las inscripciones por tipo de dieta. Digitalizó el <strong>100%</strong> de los procesos manuales del comedor escolar de la EET N°1.',
      'proy.tag.backend': 'Backend',
      'proy.tag.automatizacion': 'Automatización',
      'proy.estado.terminado2': 'Terminado',
      'proy.institucional.titulo': 'Web Institucional & Gestión de Inscripciones',
      'proy.institucional.desc': 'Plataforma <strong>full-stack</strong> para la EET N°21: web pública + sistema de gestión de inscripciones internas. Migración digital completa de registros físicos.',
      'proy.tag.web': 'Web',
      'proy.tag.gestion': 'Gestión',

      'sec.contacto.idx': '05 / CONTACTO',
      'sec.contacto.h2': 'PROYECTO',
      'contacto.ubicacion': '📍 UBICACIÓN',
      'contacto.nombre': 'Nombre *',
      'contacto.ph.nombre': 'Tu nombre',
      'contacto.correo': 'Correo *',
      'contacto.ph.correo': 'tu@correo.com',
      'contacto.mensaje': 'Mensaje *',
      'contacto.ph.mensaje': 'Contanos qué necesitás construir...',
      'contacto.enviar': 'Enviar mensaje →',
      'contacto.form-done': '✓ ¡Mensaje enviado! Nos contactamos con vos pronto.',

      'footer.navegacion': 'NAVEGACIÓN',
      'footer.inicio': 'Inicio',
      'footer.servicios': 'Servicios',
      'footer.pasarela': 'Pasarela',
      'footer.nosotros': '¿Quiénes somos?',
      'footer.proyectos': 'Proyectos',
      'footer.contacto': 'CONTACTO',
      'footer.ubicacion': 'Paraná, Entre Ríos, Argentina',
      'footer.derechos': '© 2026 Estelar Connection. Todos los derechos reservados.',

      'meta.title': 'Estelar Connection — Desarrollo Web & Sistemas',
      'meta.desc': 'Estelar Connection, empresa de desarrollo de páginas web y sistemas a medida.'
    },
    en: {
      'nav.servicios': 'Services',
      'nav.pasarela': 'Showcase',
      'nav.nosotros': 'About us',
      'nav.proyectos': 'Projects',
      'nav.contactar': 'Contact →',

      'hero.tag': 'WEB DEVELOPMENT & SYSTEMS AGENCY',
      'hero.line1': 'Connect your',
      'hero.outline': 'with the cosmos.',
      'hero.sub': 'At <strong>Estelar Connection</strong> we design and build websites, platforms and custom systems. From the stars to your screen.',
      'hero.cta1': 'View technology showcase ↓',
      'hero.cta2': 'Let\'s start a project',
      'hero.stat1': 'projects digitized',
      'hero.stat2': 'manual processes eliminated',
      'hero.stat3': 'support orbit',
      'typewriter.words': ['business', 'community', 'story'],

      'sec.servicios.idx': '01 / SERVICES',
      'sec.servicios.h2': 'WE DO',
      'serv.paginas.titulo': 'Websites',
      'serv.paginas.desc': 'Institutional sites, portfolios and fast, accessible landing pages with designs that turn visitors into clients.',
      'serv.sistemas.titulo': 'Custom Systems',
      'serv.sistemas.desc': 'Management platforms: registrations, users, reports and automation of processes that are still done by hand.',
      'serv.devops.titulo': 'Infrastructure & DevOps',
      'serv.devops.desc': 'Deployment, containers and Linux server administration to keep your systems always up, secure and fast.',

      'sec.pasarela.idx': '02 / SHOWCASE',
      'sec.pasarela.h2': 'TECHNOLOGIES',
      'sec.pasarela.sub1': 'Our technologies walk the runway.',
      'sec.pasarela.sub2': 'drag',
      'pasarela.ant': '← PREV',
      'pasarela.sig': 'NEXT →',

      'cat.language': 'LANGUAGE',
      'cat.style': 'STYLE',
      'cat.frontend': 'FRONT-END',
      'cat.framework': 'FRAMEWORK',
      'cat.backend': 'BACK-END',
      'cat.database': 'DATABASE',
      'cat.devops': 'DEVOPS',
      'cat.versions': 'VERSIONS',
      'cat.systems': 'SYSTEMS',

      'tech.html': 'HTML',
      'tech-desc.html': 'Semantic structure of the whole web.',
      'tech.css': 'CSS',
      'tech-desc.css': 'Design, layout and animations.',
      'tech.javascript': 'JavaScript',
      'tech-desc.javascript': 'Interactivity and dynamism in the browser.',
      'tech.typescript': 'TypeScript',
      'tech-desc.typescript': 'JavaScript with strong, safe typing.',
      'tech.react': 'React',
      'tech-desc.react': 'Modern interfaces and reusable components.',
      'tech.tailwind': 'Tailwind CSS',
      'tech-desc.tailwind': 'Utility styles for fast development.',
      'tech.bootstrap': 'Bootstrap',
      'tech-desc.bootstrap': 'Grids and ready-to-use components.',
      'tech.python': 'Python',
      'tech-desc.python': 'Back-end, automation and data.',
      'tech.php': 'PHP',
      'tech-desc.php': 'Classic of the web back-end.',
      'tech.csharp': 'C#',
      'tech-desc.csharp': 'Robust for applications and services.',
      'tech.cplusplus': 'C++',
      'tech-desc.cplusplus': 'High performance and systems.',
      'tech.nodejs': 'Node.js',
      'tech-desc.nodejs': 'JavaScript on the server side.',
      'tech.postgresql': 'PostgreSQL',
      'tech-desc.postgresql': 'Advanced and reliable relational database.',
      'tech.mysql': 'MySQL',
      'tech-desc.mysql': 'Popular and proven relational database.',
      'tech.mariadb': 'MariaDB',
      'tech-desc.mariadb': 'Open-source MySQL derivative.',
      'tech.docker': 'Docker',
      'tech-desc.docker': 'Containers for any environment.',
      'tech.git': 'Git',
      'tech-desc.git': 'Collaborative version control.',
      'tech.linux': 'Linux',
      'tech-desc.linux': 'Servers and systems administration.',

      'sec.nosotros.idx': '03 / ABOUT',
      'sec.nosotros.h2': 'WE ARE?',
      'about.titulo1': 'Estelar Connection',
      'about.titulo2': 'takes your organization to another digital galaxy.',
      'about.p1': 'We were born digitizing a school cafeteria, migrating physical records into complete web platforms and building servers. From the database to the last pixel of the interface, we make technology work for you.',
      'about.p2': 'We believe in <strong>simple, direct and reliable</strong> software. We are curious, self-taught and methodical; every project is a new constellation to discover.',
      'about.mision.titulo': 'MISSION',
      'about.mision.desc': 'Connect processes with technology and build products that truly solve.',
      'about.valores.titulo': 'VALUES',
      'about.valores.desc': 'Self-taught · Team · Clear communication · Agile methodologies · Quality.',

      'sec.trabajo.idx': '04 / WORK',
      'sec.trabajo.h2': 'REAL',
      'proy.estado.terminado': 'FINISHED',
      'proy.sgc.desc': 'Backend in <strong>PostgreSQL</strong> that automates registrations by diet type. It digitized <strong>100%</strong> of the manual processes of the EET N°1 school cafeteria.',
      'proy.tag.backend': 'Backend',
      'proy.tag.automatizacion': 'Automation',
      'proy.estado.terminado2': 'Finished',
      'proy.institucional.titulo': 'Institutional Web & Registration Management',
      'proy.institucional.desc': '<strong>Full-stack</strong> platform for EET N°21: public website + internal registration management system. Complete digital migration of physical records.',
      'proy.tag.web': 'Web',
      'proy.tag.gestion': 'Management',

      'sec.contacto.idx': '05 / CONTACT',
      'sec.contacto.h2': 'PROJECT',
      'contacto.ubicacion': '📍 LOCATION',
      'contacto.nombre': 'Name *',
      'contacto.ph.nombre': 'Your name',
      'contacto.correo': 'Email *',
      'contacto.ph.correo': 'you@email.com',
      'contacto.mensaje': 'Message *',
      'contacto.ph.mensaje': 'Tell us what you need to build...',
      'contacto.enviar': 'Send message →',
      'contacto.form-done': '✓ Message sent! We\'ll get back to you soon.',

      'footer.navegacion': 'NAVIGATION',
      'footer.inicio': 'Home',
      'footer.servicios': 'Services',
      'footer.pasarela': 'Showcase',
      'footer.nosotros': 'About us',
      'footer.proyectos': 'Projects',
      'footer.contacto': 'CONTACT',
      'footer.ubicacion': 'Paraná, Entre Ríos, Argentina',
      'footer.derechos': '© 2026 Estelar Connection. All rights reserved.',

      'meta.title': 'Estelar Connection — Web Development & Systems',
      'meta.desc': 'Estelar Connection, a web development and custom systems company.'
    }
  };

  const langToggle = document.getElementById('langToggle');
  const langSpans = Array.from(document.querySelectorAll('.lang-current'));
  let lang = localStorage.getItem('ec-lang') || 'es';

  const setLang = (l) => {
    lang = l;
    document.documentElement.lang = l;
    document.getElementById('pageTitle').textContent = I18N[l]['meta.title'];
    document.getElementById('metaDescription').setAttribute('content', I18N[l]['meta.desc']);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[l][key]) el.innerHTML = I18N[l][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (I18N[l][key]) el.setAttribute('placeholder', I18N[l][key]);
    });

    langSpans.forEach(s => s.classList.toggle('active', s.dataset.lang === l));
    localStorage.setItem('ec-lang', l);
  };

  if (langToggle) langToggle.addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));
  setLang(lang);

  /* ======= NAVBAR: sombra al hacer scroll ======= */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ======= NAVBAR: menú móvil ======= */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  /* ======= TYPEWRITER en el hero ======= */
  const el = document.getElementById('typewriter');
  const words = () => I18N[lang]['typewriter.words'];
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const list = words();
    if (!list.length) return;
    wordIdx = wordIdx % list.length;
    const word = list[wordIdx];
    const txt = deleting ? word.slice(0, --charIdx) : word.slice(0, ++charIdx);
    el.textContent = txt;

    let delay = deleting ? 40 : 95;
    if (!deleting && charIdx === word.length) { delay = 1600; deleting = true; }
    else if (deleting && charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % list.length; delay = 400; }

    setTimeout(type, delay);
  }
  type();

  if (langToggle) {
    langToggle.addEventListener('click', () => { el.textContent = ''; charIdx = 0; deleting = false; });
  }

  /* ======= REVEAL al hacer scroll ======= */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(item => observer.observe(item));

  /* ============================================================
     PASARELA DE TECNOLOGÍAS
     ============================================================ */
  const track = document.getElementById('runwayTrack');
  const prevBtn = document.getElementById('runPrev');
  const nextBtn = document.getElementById('runNext');
  const dotsWrap = document.getElementById('runDots');
  const cards = Array.from(track.children);

  const cardW = () => {
    const card = cards[0];
    const gap = 22;
    return card ? card.getBoundingClientRect().width + gap : 242;
  };

  const maxScroll = () => track.scrollWidth - track.clientWidth;

  function goTo(index) {
    if (index <= 0) index = 1;
    const target = Math.min(index * cardW(), maxScroll());
    track.scrollTo({ left: target, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', () => track.scrollBy({ left: -cardW(), behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left: cardW(), behavior: 'smooth' }));

  /* dots */
  const visibleCards = () => Math.max(1, Math.round(track.clientWidth / cardW()));
  const drawDots = () => {
    const n = Math.max(1, cards.length - visibleCards() + 1);
    dotsWrap.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const d = document.createElement('button');
      d.className = 'run-dot';
      d.type = 'button';
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  };
  drawDots();
  window.addEventListener('resize', drawDots);

  const syncDots = () => {
    let idx = Math.round(track.scrollLeft / cardW());
    idx = Math.max(0, Math.min(idx, dotsWrap.children.length - 1));
    Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === idx));
  };
  track.addEventListener('scroll', syncDots, { passive: true });

  /* loop: al llegar al final, vuelve al inicio */
  track.addEventListener('scroll', () => {
    if (track.scrollLeft >= maxScroll() - 10) {
      track.style.transition = 'none';
      track.scrollTo({ left: 0 });
      requestAnimationFrame(() => { track.style.transition = ''; });
    }
  }, { passive: true });

  /* auto-pasarela */
  let auto = setInterval(() => {
    if (!track.matches(':hover')) track.scrollBy({ left: cardW(), behavior: 'smooth' });
  }, 3500);

  /* arrastrar con el mouse */
  let isDown = false, startX = 0, startScroll = 0;
  track.addEventListener('pointerdown', (e) => {
    isDown = true; startX = e.clientX; startScroll = track.scrollLeft;
    track.classList.add('dragging');
  });
  window.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    track.scrollTo({ left: startScroll - (e.clientX - startX) });
  });
  window.addEventListener('pointerup', () => {
    isDown = false; track.classList.remove('dragging');
  });

  /* ======= TILT 3D sutil en tarjetas ======= */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.tilt').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `rotate(${x * -1.5}deg) rotateY(${x * 4}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ======= FORMULARIO de contacto ======= */
  const form = document.getElementById('contactForm');
  const done = document.createElement('p');
  done.className = 'form-done';
  done.textContent = I18N[lang]['contacto.form-done'];
  form.parentNode.appendChild(done);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    form.reset();
    done.classList.add('show');
    setTimeout(() => done.classList.remove('show'), 5000);
  });
})();