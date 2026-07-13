(function () {
  "use strict";
  const C = window.CONFIG;
  const D = window.PortfolioData;
  const root = document.getElementById("root");
  const icon = (name) => window.svgIcon(name);
  const brand = (name) => window.svgBrand(name);
  const wa = (message) => `https://wa.me/${C.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const external = 'target="_blank" rel="noopener noreferrer"';
  const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const portraitHTML = (variant) => `<aside class="portrait-panel ${variant}-portrait reveal" aria-label="Executive portrait and leadership highlights">
    <div class="portrait-wrap"><img src="assets/hema-professional-office.jpg" width="1122" height="1402" alt="Professional office portrait of Hema Darshini Selvaraju" fetchpriority="high"></div>
    <div class="floating-label label-cloud" data-depth="16"><i aria-hidden="true"></i>AWS · Azure · GCP</div>
    <div class="floating-label label-devsecops" data-depth="22"><i aria-hidden="true"></i>DevSecOps</div>
    <div class="floating-label label-security" data-depth="18"><i aria-hidden="true"></i>CISSP · CCNA</div>
    <div class="highlight-card"><p>Leadership focus</p><strong>Strategy · Transformation · Governance · Resilience</strong><span>Connecting technology decisions to enterprise outcomes.</span></div>
  </aside>`;
  const portfolioNavItems = [
    ["Executive Overview", "profile"],
    ["Leadership Experience", "experience"],
    ["Transformation Case Studies", "case-studies"],
    ["Selected Work on GitHub", "github-work"],
    ["Advisory & Entrepreneurship", "advisory"]
  ];
  const serviceNavItems = D.services.map((service) => [service.title, service.id]);
  const navItems = [
    ["Home", "home"], ...portfolioNavItems,
    ...serviceNavItems, ["Insights", "insights"], ["Credentials", "credentials"], ["Contact", "contact"]
  ];

  root.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header" id="site-header">
      <nav class="nav container" aria-label="Primary navigation">
        <a class="brand" href="#home" aria-label="Hema Darshini Selvaraju, home"><span>${C.initials}</span><strong>Hema Darshini</strong></a>
        <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links"><span class="sr-only">Toggle navigation</span><i></i><i></i><i></i></button>
        <div class="nav-links" id="nav-links">
          <a href="#home" data-section="home">Home</a>
          <details class="nav-group" id="portfolio-menu">
            <summary>Executive Profile <span aria-hidden="true">⌄</span></summary>
            <div class="nav-submenu">${portfolioNavItems.map(([label, id]) => `<a href="#${id}" data-section="${id}">${label}</a>`).join("")}</div>
          </details>
          <details class="nav-group" id="services-menu">
            <summary>Services <span aria-hidden="true">⌄</span></summary>
            <div class="nav-submenu service-menu">${serviceNavItems.map(([label, id]) => `<a href="#${id}" data-section="${id}">${label}</a>`).join("")}</div>
          </details>
          <a href="#insights" data-section="insights">Insights</a>
          <a href="#credentials" data-section="credentials">Credentials</a>
          <a href="#contact" data-section="contact">Contact</a>
        </div>
      </nav>
    </header>
    <main id="main-content">
      <section class="hero" id="home">
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <p class="eyebrow">${D.hero.eyebrow}</p>
            <p class="person-name">${C.name}</p>
            <h1>${D.hero.headline}</h1>
            ${portraitHTML("mobile")}
            <p class="hero-title">${D.hero.title}</p>
            <p class="lede">${D.hero.summary}</p>
            <p class="availability"><span aria-hidden="true"></span>${D.hero.availability}</p>
            <div class="actions">
              <a class="button primary" href="#profile">View Executive Profile</a>
              <a class="button secondary resume-link" href="${C.resumeUrl}" download>Download Executive Résumé</a>
            </div>
            <a class="text-link" href="#case-studies">Explore Transformation Case Studies ${icon("arrow")}</a>
          </div>
          ${portraitHTML("desktop")}
        </div>
      </section>
      <section class="section" id="profile">
        <div class="container">
          <div class="section-heading reveal"><p class="eyebrow">Executive Profile</p><h2>Technology depth. Enterprise perspective.</h2></div>
          <div class="profile-copy reveal">${D.executiveProfile.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>
          <div class="pillar-grid">${D.leadershipPillars.map((p, i) => `<article class="card pillar reveal"><span>0${i + 1}</span><h3>${p.title}</h3><p>${p.text}</p></article>`).join("")}</div>
          <div class="metric-grid">${D.impactMetrics.map((m) => `<div class="metric reveal"><strong>${m.value}</strong><span>${m.label}</span></div>`).join("")}</div>
        </div>
      </section>
      <section class="section muted" id="experience">
        <div class="container"><div class="section-heading reveal"><p class="eyebrow">Leadership Experience</p><h2>Leading change across regulated and complex environments.</h2></div>
          <div class="timeline">${D.experience.map((job) => `<article class="experience-card reveal"><div class="experience-head"><div><p class="scope">${job.scope}</p><h3>${job.title}</h3><p class="company">${job.company}</p></div><p class="dates">${job.dates}</p></div><p class="context">${job.context}</p><p class="statement">${job.statement}</p><h4>Selected leadership impact</h4>${list(job.impact)}<div class="tags">${job.competencies.map((c) => `<span>${c}</span>`).join("")}</div></article>`).join("")}</div>
        </div>
      </section>
      <section class="section" id="capabilities"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Executive Capability Matrix</p><h2>Leadership capability grounded in delivery.</h2></div><div class="capability-grid">${D.capabilities.map((c) => `<article class="card reveal"><h3>${c.title}</h3>${list(c.items)}</article>`).join("")}</div></div></section>
      <section class="section navy" id="case-studies"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Transformation Case Studies</p><h2>Selected enterprise transformation themes.</h2><p>Sanitised examples focused on the challenge, leadership action and operational outcome.</p></div><div class="case-grid">${D.caseStudies.map((c, i) => `<article class="case-card reveal"><span class="case-number">0${i + 1}</span><h3>${c.title}</h3><h4>Business challenge</h4><p>${c.challenge}</p><h4>Leadership actions</h4>${list(c.actions)}<div class="outcome"><h4>Outcome</h4><p>${c.outcome}</p></div><p class="case-cap">${c.capabilities}</p></article>`).join("")}</div></div></section>
      <section class="section github-work" id="github-work"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Technical Portfolio</p><h2>Selected work on GitHub.</h2><p>Security tooling, automation, mobile engineering and cloud-modernisation work that underpins Hema’s enterprise leadership perspective.</p></div><div class="work-filters reveal" aria-label="Filter selected work">${["All", ...new Set(D.githubWork.map((project) => project.category))].map((category, index) => `<button type="button" class="work-filter${index === 0 ? " active" : ""}" data-project-filter="${category}" aria-pressed="${index === 0}">${category}</button>`).join("")}</div><div class="work-grid">${D.githubWork.map((project) => `<article class="work-card reveal" data-project-category="${project.category}">${project.image ? `<div class="work-image"><img src="${project.image}" alt="" loading="lazy"><span>${project.category}</span></div>` : `<div class="work-image work-placeholder"><span>${project.category}</span><strong>${project.title.split(" ").slice(0, 2).join(" ")}</strong></div>`}<div class="work-body"><div class="work-meta"><span>${project.year}</span><span>${project.context}</span></div><h3>${project.title}</h3><p>${project.description}</p><div class="work-outcome"><strong>Outcome</strong><span>${project.outcome}</span></div><div class="work-tech">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div><a class="text-link" href="${project.link}" ${external}>${project.public ? "View repository" : "View technical profile"} ${icon("arrowUpRight")}</a>${project.public ? "" : '<small class="work-note">Project details may be sanitised or privately held.</small>'}</div></article>`).join("")}</div></div></section>
      <section class="section" id="advisory"><div class="container advisory-grid"><div class="section-heading reveal"><p class="eyebrow">Advisory and Entrepreneurship</p><h2>${D.advisory.title}</h2><p>${D.advisory.text}</p>${C.consultancyUrl ? `<a class="text-link" href="${C.consultancyUrl}" ${external}>Visit HDS Consultancy ${icon("arrowUpRight")}</a>` : ""}<small>${D.advisory.note}</small></div><div class="advisory-list reveal">${D.advisory.items.map((x) => `<span>${icon("check")}${x}</span>`).join("")}</div></div></section>
      <section class="section services-section" id="services"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Professional Services</p><h2>Technology expertise shaped around your organisation’s needs.</h2><p>Focused advisory, delivery and capability-building services for employers, businesses and professionals.</p></div><div class="service-grid">${D.services.map((service, index) => `<article class="service-card reveal" id="${service.id}"><span class="service-number">0${index + 1}</span><h3>${service.title}</h3><p>${service.summary}</p><small>${service.audience}</small><a class="button secondary service-enquiry" href="#contact" data-service-choice="${service.title}">Enquire about this service ${icon("arrow")}</a></article>`).join("")}</div></div></section>
      <section class="section muted" id="insights"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Insights</p><h2>Perspectives on technology leadership.</h2></div><div class="insight-grid">${D.insights.map((x) => `<article class="insight-card reveal"><div><span>${x.category}</span><span>${x.readTime}</span></div><h3>${x.title}</h3><p>${x.summary}</p><strong>${x.status}</strong></article>`).join("")}</div></div></section>
      <section class="section" id="credentials"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Credentials and Professional Development</p><h2>Business leadership and technology foundations.</h2></div><div class="credentials-grid"><div>${D.education.map((e) => `<article class="education-card reveal"><span>${icon("cap")}</span><div><h3>${e.degree}</h3><p>${e.institution}</p><small>${e.detail}</small></div></article>`).join("")}</div><div class="credential-list">${D.credentials.map((c) => `<article class="credential reveal"><div><h3>${c.name}</h3><p>${c.issuer}</p></div><span>${c.status}</span></article>`).join("")}</div></div></div></section>
      <section class="section contact" id="contact"><div class="container contact-grid"><div class="reveal"><p class="eyebrow">Contact</p><h2>${D.contact.headline}</h2><p>${D.contact.text}</p><div class="contact-actions"><a class="button primary" href="${C.linkedinUrl}" ${external}>${brand("linkedin")} Connect on LinkedIn</a><a class="button secondary" href="mailto:${C.professionalEmail}">${icon("mail")} Email Hema</a><a class="button secondary resume-link" href="${C.resumeUrl}" download>${icon("download")} Download Executive Résumé</a><a class="button secondary" href="${wa("Hello Hema, I would like to discuss a technology leadership or advisory opportunity.")}" ${external}>${brand("whatsapp")} WhatsApp</a></div></div>
        <form class="contact-form reveal" id="contact-form" novalidate><h3>Employer and service enquiry</h3><label for="contact-service">I’m interested in</label><select id="contact-service" name="service"><option value="Leadership opportunity">Leadership opportunity</option>${D.services.map((service) => `<option value="${service.title}">${service.title}</option>`).join("")}</select><label for="contact-name">Name</label><input id="contact-name" name="name" autocomplete="name" required><span class="error" id="name-error"></span><label for="contact-company">Company</label><input id="contact-company" name="company" autocomplete="organization"><label for="contact-email">Work email</label><input id="contact-email" name="email" type="email" autocomplete="email" required><span class="error" id="email-error"></span><label for="contact-message">How can Hema help?</label><textarea id="contact-message" name="message" rows="5" required></textarea><span class="error" id="message-error"></span><button class="button primary" type="submit">Prepare enquiry</button><p class="form-note" id="form-note">This form opens your email application with the enquiry prepared; it does not send silently.</p></form>
      </div></section>
    </main>
    <footer><div class="container footer-grid"><div><strong>${C.name}</strong><p>Technology strategy, enterprise transformation and operational resilience.</p></div><div class="footer-links"><a href="${C.linkedinUrl}" ${external}>LinkedIn</a><a href="${C.githubUrl}" ${external}>Technical profile</a><a href="mailto:${C.professionalEmail}">Email</a></div><p>© ${new Date().getFullYear()} ${C.name}</p></div></footer>
    <a class="whatsapp-float" href="${wa("Hello Hema, I visited your executive portfolio and would like to connect.")}" ${external} aria-label="Send Hema a message on WhatsApp">
      ${brand("whatsapp")}<span>Message Hema</span>
    </a>`;

  document.querySelector('link[rel="canonical"]').href = C.siteUrl;
  document.querySelector('meta[property="og:url"]').content = C.siteUrl;
  document.querySelector('meta[property="og:image"]').content = `${C.siteUrl}/assets/hema-professional-office.jpg`;
  document.getElementById("person-schema").textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "Person", name: C.name,
    jobTitle: "Technology Executive and Enterprise Transformation Leader", url: C.siteUrl,
    sameAs: [C.linkedinUrl, C.githubUrl],
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "University of Wales Trinity Saint David" }, { "@type": "CollegeOrUniversity", name: "Staffordshire University" }],
    knowsAbout: ["Technology strategy", "Enterprise transformation", "Digital transformation", "Cloud modernisation", "Cybersecurity leadership", "IT governance", "Enterprise architecture", "IT service management", "Operational resilience", "Vendor management", "Technology operating models"]
  });

  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const portfolioMenu = document.getElementById("portfolio-menu");
  const servicesMenu = document.getElementById("services-menu");
  const closeMenu = () => { navLinks.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); portfolioMenu.open = false; servicesMenu.open = false; };
  menuButton.addEventListener("click", () => { const open = navLinks.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
  navLinks.addEventListener("click", (event) => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  [portfolioMenu, servicesMenu].forEach((menu) => menu.addEventListener("toggle", () => {
    if (!menu.open) return;
    [portfolioMenu, servicesMenu].forEach((other) => { if (other !== menu) other.open = false; });
  }));

  const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean);
  const sectionLinks = [...document.querySelectorAll("[data-section]")];
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach((link) => { const active = link.dataset.section === entry.target.id; link.classList.toggle("active", active); if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current"); });
  }), { rootMargin: "-25% 0px -65%", threshold: 0 });
  sections.forEach((section) => observer.observe(section));

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) reveals.forEach((el) => el.classList.add("visible"));
  else { const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); } }), { threshold: 0.08 }); reveals.forEach((el) => revealObserver.observe(el)); }

  // Subtle hero depth: capability labels respond to pointer movement while
  // the background shifts gently with scroll. Disabled for reduced motion.
  if (!reduceMotion) {
    const hero = document.querySelector(".hero");
    document.querySelectorAll(".portrait-panel").forEach((portrait) => {
      const floatingLabels = portrait.querySelectorAll("[data-depth]");
      portrait.addEventListener("pointermove", (event) => {
        const bounds = portrait.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        portrait.style.setProperty("--portrait-x", `${x * 10}px`);
        portrait.style.setProperty("--portrait-y", `${y * 10}px`);
        floatingLabels.forEach((label) => {
          const depth = Number(label.dataset.depth);
          label.style.setProperty("--parallax-x", `${x * depth}px`);
          label.style.setProperty("--parallax-y", `${y * depth}px`);
        });
      });
      portrait.addEventListener("pointerleave", () => {
        portrait.style.setProperty("--portrait-x", "0px");
        portrait.style.setProperty("--portrait-y", "0px");
        floatingLabels.forEach((label) => { label.style.setProperty("--parallax-x", "0px"); label.style.setProperty("--parallax-y", "0px"); });
      });
    });
    let parallaxFrame = 0;
    addEventListener("scroll", () => {
      if (parallaxFrame) return;
      parallaxFrame = requestAnimationFrame(() => {
        const shift = Math.min(scrollY * 0.08, 44);
        hero.style.setProperty("--scroll-shift", `${shift}px`);
        parallaxFrame = 0;
      });
    }, { passive: true });
  }

  document.querySelectorAll(".resume-link").forEach((link) => link.addEventListener("click", async (event) => {
    try { const response = await fetch(C.resumeUrl, { method: "HEAD" }); if (!response.ok) throw new Error(); }
    catch { event.preventDefault(); alert("The executive résumé is being updated. Please email Hema to request the latest copy."); }
  }));

  document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const errors = { name: values.name.trim() ? "" : "Please enter your name.", email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) ? "" : "Please enter a valid email.", message: values.message.trim().length >= 10 ? "" : "Please enter at least 10 characters." };
    Object.entries(errors).forEach(([key, value]) => { document.getElementById(`${key}-error`).textContent = value; document.getElementById(`contact-${key}`).setAttribute("aria-invalid", String(Boolean(value))); });
    if (Object.values(errors).some(Boolean)) { form.querySelector('[aria-invalid="true"]').focus(); return; }
    const subject = encodeURIComponent(`${values.service} enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(`Service: ${values.service}\nName: ${values.name.trim()}\nCompany: ${values.company.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`);
    document.getElementById("form-note").textContent = "Your email application is opening with the message prepared.";
    window.location.href = `mailto:${C.professionalEmail}?subject=${subject}&body=${body}`;
  });
  document.querySelectorAll("[data-service-choice]").forEach((link) => link.addEventListener("click", () => {
    document.getElementById("contact-service").value = link.dataset.serviceChoice;
  }));
  document.querySelectorAll("[data-project-filter]").forEach((button) => button.addEventListener("click", () => {
    const selected = button.dataset.projectFilter;
    document.querySelectorAll("[data-project-filter]").forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-project-category]").forEach((card) => {
      card.hidden = selected !== "All" && card.dataset.projectCategory !== selected;
    });
  }));
})();
