/* ============================================================
   Vanilla renderer + interactions (no React / no Babel)
   ============================================================ */
(function () {
  const C = window.CONFIG;
  const D = window.PortfolioData;
  const wa = (msg) => "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---------------- NAV ---------------- */
  function navHTML() {
    const links = [["About", "about"], ["Experience", "experience"], ["Education", "education"], ["Skills", "skills"], ["Projects", "projects"], ["Contact", "contact"]];
    return `
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a href="#home" class="nav-brand"><span class="mark">${C.initials}</span>Hema Darshini</a>
        <div class="nav-links">${links.map(([l, id]) => `<a href="#${id}" data-spy="${id}">${l}</a>`).join("")}</div>
        <a class="nav-cta" href="${wa("Hi Hema, I'd like to connect about a role.")}" target="_blank" rel="noopener">${svgBrand("whatsapp")} Hire Me</a>
      </div>
    </nav>`;
  }

  /* ---------------- HERO ---------------- */
  function heroHTML() {
    const d = D.hero;
    return `
    <header class="hero" id="home">
      <div class="hero-bg"><div class="hero-grid-bg"></div><div class="glow g1"></div><div class="glow g2"></div></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="avail"><span class="dot"></span>${d.availability}</div>
          <h1>
            <span class="reveal-word"><span style="animation-delay:.05s">${d.greeting}</span></span>
            <span class="reveal-word"><span class="accent" style="animation-delay:.18s">${d.nameLines[0]}</span></span>
            <span class="reveal-word"><span class="accent" style="animation-delay:.30s">${d.nameLines[1]}</span></span><span class="hon">${d.honorific}</span>
          </h1>
          <p class="role">${d.role}</p>
          <p class="lede">${d.lede}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="${C.resumeUrl}" target="_blank" rel="noopener">${svgIcon("download")} Download CV</a>
            <a class="btn btn-ghost" href="${C.linkedin}" target="_blank" rel="noopener">${svgBrand("linkedin")} LinkedIn</a>
            <a class="btn btn-wa" href="${wa("Hi Hema, I found your portfolio and would like to connect.")}" target="_blank" rel="noopener">${svgBrand("whatsapp")} WhatsApp</a>
          </div>
          <div class="hero-socials">
            <a href="${C.github}" target="_blank" rel="noopener" aria-label="GitHub">${svgBrand("github")}</a>
            <a href="${C.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${svgBrand("linkedin")}</a>
            <a href="mailto:${C.email}" aria-label="Email">${svgIcon("mail")}</a>
          </div>
        </div>
        <div class="identity">
          <div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div>
          <div class="core photo"><img src="assets/hema.png" alt="${esc(C.name)}"></div>
          ${d.chips.map((c, i) => `<div class="chip c${i + 1}"><span class="pip"></span>${c}</div>`).join("")}
        </div>
      </div>
    </header>`;
  }

  /* ---------------- SUMMARY + STATS ---------------- */
  function summaryHTML() {
    const d = D.summary;
    return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Professional Summary</div>
          <h2>Two decades securing the platforms enterprises run on.</h2>
        </div>
        <p class="summary-lede reveal" data-delay="1">${d.lede}</p>
        <div class="summary-body reveal" data-delay="2">${d.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>
        <div class="stats reveal" data-delay="1">
          ${D.stats.map((s) => `
            <div class="stat">
              <div class="num"><span class="count" data-to="${s.num}">0</span><span class="suffix">${s.suffix}</span></div>
              <div class="label">${s.label}</div>
              <div class="sub">${s.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- TIMELINE ---------------- */
  function timelineHTML() {
    return `
    <section class="section" id="experience" style="background:var(--bg-2)">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Career Timeline</div>
          <h2>Where I've delivered.</h2>
          <p>Nearly twenty years across insurance, shared services, cybersecurity and enterprise platforms — three continents, regulated every step.</p>
        </div>
        <div class="timeline" id="timeline">
          <div class="progress" id="tl-progress"></div>
          ${D.experience.map((it, i) => `
            <div class="tl-item reveal" data-delay="${Math.min(i, 3)}">
              <div class="tl-node"></div>
              <div class="tl-card">
                <div class="tl-top"><span class="role">${it.role}</span><span class="co">· ${it.company}</span><span class="tl-date">${it.date}</span></div>
                <div class="tl-loc">${it.location}</div>
                <ul>${it.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
                <div class="tl-tags">${it.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- EDUCATION ---------------- */
  function educationHTML() {
    return `
    <section class="section" id="education">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Education & Credentials</div>
          <h2>Qualified, certified, accountable.</h2>
        </div>
        <div class="edu-grid">
          <div class="edu-col reveal">
            ${D.education.map((e) => `
              <div class="edu-card">
                <div class="ico">${svgIcon("cap")}</div>
                <div>
                  <h4>${e.degree}</h4>
                  <div class="meta">${e.meta}</div>
                  <p>${e.school}</p>
                  <p style="color:var(--ink-faint);margin-top:4px">${e.note}</p>
                </div>
              </div>`).join("")}
          </div>
          <div class="reveal" data-delay="1">
            <div style="font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:14px">Certifications Wall</div>
            <div class="cert-wall">
              ${D.certifications.map((c) => `
                <div class="cert${c.pending ? " pending" : ""}">
                  <span class="badge">${c.abbr}</span>
                  <div><div class="nm">${c.name}</div><div class="iss">${c.issuer}</div></div>
                  ${c.pending ? '<span class="pend-tag">In Progress</span>' : ""}
                </div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ---------------- SKILLS ---------------- */
  function skillsHTML() {
    return `
    <section class="section" id="skills" style="background:var(--bg-2)">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Tech Stack & Skills</div>
          <h2>A full-spectrum platform skillset.</h2>
          <p>From cloud architecture to deployment governance — depth where it counts, breadth where it matters.</p>
        </div>
        <div class="skills-grid">
          ${D.skills.map((cat, i) => `
            <div class="skill-cat reveal" data-delay="${Math.min(i, 3)}">
              <div class="cat-head"><div class="ico">${svgIcon(cat.icon)}</div><h4>${cat.category}</h4></div>
              ${cat.items.map((s) => `
                <div class="skill-row">
                  <span class="nm">${s.name}</span>
                  <span class="skill-meter">${[1, 2, 3, 4, 5].map((p) => `<span class="pip${p <= s.score ? " on" : ""}"></span>`).join("")}</span>
                  <span class="lvl">${s.level}</span>
                </div>`).join("")}
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- ARCHITECTURE ---------------- */
  function architectureHTML() {
    return `
    <section class="section" id="architecture">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Architecture Showcase</div>
          <h2>Blueprints, not just buzzwords.</h2>
          <p>Sanitised reference architectures from real enterprise engagements — the differentiator for solution-architect work.</p>
        </div>
        <div class="arch-grid">
          ${D.architecture.map((a, i) => `
            <div class="arch-card reveal" data-delay="${i}">
              <div class="arch-diagram">
                <div class="ph-stripe"></div>
                <span class="badge-tag">${a.tag}</span>
                <div class="node n1"></div><div class="node n2"></div><div class="node n3"></div>
                <div class="edge" style="left:92px;width:calc(100% - 184px)"></div>
                <span class="ph-label">diagram placeholder — drop sanitised architecture here</span>
              </div>
              <div class="arch-body">
                <h4>${a.title}</h4>
                <p>${a.desc}</p>
                <div class="arch-tags"><span class="tag">${a.label}</span>${a.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------------- PROJECTS ---------------- */
  function projectsHTML() {
    return `
    <section class="section" id="projects" style="background:var(--bg-2)">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Projects Portfolio</div>
          <h2>Selected work.</h2>
          <p>Security tooling, automation and cloud blueprints. Filter by domain, then open any card for the full story.</p>
        </div>
        <div class="proj-filters reveal" data-delay="1" id="proj-filters">
          ${D.projectCategories.map((c, i) => `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${c}">${c}</button>`).join("")}
        </div>
        <div class="proj-grid" id="proj-grid"></div>
      </div>
    </section>`;
  }

  function projectCardHTML(p, idx) {
    return `
      <article class="proj-card reveal" data-idx="${idx}">
        <div class="proj-thumb">
          ${p.img ? `<img src="${p.img}" alt="${esc(p.title)}" loading="lazy">` : '<div class="ph"></div>'}
          <span class="cat-pill">${p.category}</span>
          ${p.img ? "" : '<span class="ph-tag">project image</span>'}
        </div>
        <div class="proj-info">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
          <div class="proj-meta"><span class="yr">${p.year} · ${p.client}</span><span class="view">View ${svgIcon("arrowUpRight")}</span></div>
        </div>
      </article>`;
  }

  function modalHTML() {
    return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" id="modal"></div>
    </div>`;
  }

  /* ---------------- CONTACT ---------------- */
  function contactHTML() {
    return `
    <section class="section" id="contact">
      <div class="container">
        <div class="section-head reveal" style="max-width:620px">
          <div class="eyebrow">Get In Touch</div>
          <h2>Let's discuss your next platform.</h2>
          <p>Hiring for a senior cloud, security or platform role? Reach me directly, or send a note below.</p>
        </div>
        <div class="contact-wrap">
          <div class="contact-left reveal">
            <a class="contact-channel" href="${wa("Hi Hema, I'd like to connect about an opportunity.")}" target="_blank" rel="noopener">
              <span class="ico wa">${svgBrand("whatsapp")}</span>
              <div><div class="k">WhatsApp / Call / SMS</div><div class="v">+60 12 291 9199</div></div>
            </a>
            <a class="contact-channel" href="mailto:${C.email}">
              <span class="ico mail">${svgIcon("mail")}</span>
              <div><div class="k">Email</div><div class="v">${C.email}</div></div>
            </a>
            <a class="contact-channel" href="${C.linkedin}" target="_blank" rel="noopener">
              <span class="ico li">${svgBrand("linkedin")}</span>
              <div><div class="k">LinkedIn</div><div class="v">Connect professionally</div></div>
            </a>
            <div class="contact-channel" style="cursor:default">
              <span class="ico" style="background:var(--ink)">${svgIcon("pin")}</span>
              <div><div class="k">Based in</div><div class="v">Malaysia · Open to Remote / Relocation</div></div>
            </div>
          </div>
          <form class="contact-form reveal" data-delay="1" id="contact-form" novalidate>
            <div class="form-row">
              <div class="field" data-field="first"><label>First Name</label><input name="first" placeholder="Jane"><span class="msg"></span></div>
              <div class="field"><label>Last Name</label><input name="last" placeholder="Doe"></div>
            </div>
            <div class="field" data-field="email"><label>Email Address</label><input name="email" placeholder="jane@company.com"><span class="msg"></span></div>
            <div class="field"><label>Phone Number</label><input name="phone" placeholder="Optional"></div>
            <div class="field" data-field="message"><label>Your Message</label><textarea name="message" rows="4" placeholder="Tell me about the role or project…"></textarea><span class="msg"></span></div>
            <div class="form-submit">
              <button type="submit" class="btn btn-primary" id="send-btn">${svgIcon("mail")} Send Message</button>
              <span class="form-success" id="form-success">${svgIcon("check")} Thanks — your email client is opening.</span>
              <span class="form-note" id="form-note">Replies within 1–2 business days.</span>
            </div>
          </form>
        </div>
      </div>
    </section>`;
  }

  /* ---------------- FOOTER + FLOAT ---------------- */
  function footerHTML() {
    const yr = new Date().getFullYear();
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <h3>Hema Darshini Selvaraju<span style="color:var(--accent-bright)"> Ts.</span></h3>
            <p>Senior Software Engineer · DevSecOps · Cloud Platform & Security Governance. Nearly 20 years across three continents.</p>
          </div>
          <div class="footer-nav">
            <div class="footer-col"><h5>Explore</h5><a href="#about">Summary</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a></div>
            <div class="footer-col"><h5>Connect</h5><a href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${C.github}" target="_blank" rel="noopener">GitHub</a><a href="mailto:${C.email}">Email</a><a href="${wa("Hi Hema")}" target="_blank" rel="noopener">WhatsApp</a></div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${yr} Hema Darshini Selvaraju. All rights reserved.</span>
          <div class="footer-social">
            <a href="${C.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${svgBrand("linkedin")}</a>
            <a href="${C.github}" target="_blank" rel="noopener" aria-label="GitHub">${svgBrand("github")}</a>
            <a href="${wa("Hi Hema")}" target="_blank" rel="noopener" aria-label="WhatsApp">${svgBrand("whatsapp")}</a>
          </div>
          <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="${wa("Hi Hema, I found your portfolio and would like to connect.")}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <span class="wa-ico">${svgBrand("whatsapp")}</span><span class="wa-txt">Chat on WhatsApp</span>
    </a>`;
  }

  /* ================= RENDER ================= */
  document.getElementById("root").innerHTML =
    navHTML() + heroHTML() +
    `<main>` + summaryHTML() + timelineHTML() + educationHTML() + skillsHTML() + architectureHTML() + projectsHTML() + contactHTML() + `</main>` +
    footerHTML() + modalHTML();

  /* ================= INTERACTIONS ================= */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal
  function bindReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  // Count-up
  function bindCounters() {
    const nums = document.querySelectorAll(".count");
    if (reduceMotion) { nums.forEach((n) => n.textContent = n.dataset.to); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target, end = +el.dataset.to, t0 = performance.now(), dur = 1400;
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(e * end);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach((n) => io.observe(n));
  }

  // Nav scroll state + spy + timeline progress (single scroll handler)
  function bindScroll() {
    const nav = document.getElementById("nav");
    const spies = [...document.querySelectorAll("[data-spy]")];
    const secs = ["home", "about", "experience", "education", "skills", "architecture", "projects", "contact"];
    const tl = document.getElementById("timeline");
    const tlProg = document.getElementById("tl-progress");
    let ticking = false;
    const update = () => {
      ticking = false;
      nav.classList.toggle("scrolled", window.scrollY > 20);
      let cur = "home";
      for (const id of secs) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 140) cur = id; }
      spies.forEach((a) => a.classList.toggle("active", a.dataset.spy === cur));
      if (tl) {
        const r = tl.getBoundingClientRect(), vh = innerHeight;
        const seen = Math.min(Math.max(vh * 0.55 - r.top, 0), r.height);
        tlProg.style.height = (seen / r.height) * 100 + "%";
        const nodes = tl.querySelectorAll(".tl-item");
        nodes.forEach((n) => n.classList.toggle("lit", n.querySelector(".tl-node").getBoundingClientRect().top < vh * 0.6));
      }
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  // Projects filter + modal
  function bindProjects() {
    const grid = document.getElementById("proj-grid");
    const filters = document.getElementById("proj-filters");
    let current = "All";
    const render = () => {
      const list = D.projects.map((p, i) => ({ p, i })).filter(({ p }) => current === "All" || p.category === current);
      grid.innerHTML = list.map(({ p, i }) => projectCardHTML(p, i)).join("");
      grid.querySelectorAll(".proj-card").forEach((card) => {
        card.classList.add("in");
        card.addEventListener("click", () => openModal(+card.dataset.idx));
      });
    };
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn"); if (!btn) return;
      current = btn.dataset.filter;
      filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
      render();
    });
    render();

    const overlay = document.getElementById("modal-overlay");
    const modal = document.getElementById("modal");
    function openModal(idx) {
      const p = D.projects[idx];
      modal.innerHTML = `
        <div class="modal-hero">
          ${p.img ? `<img src="${p.img}" alt="${esc(p.title)}">` : '<div class="ph"></div>'}
          <button class="modal-close" id="modal-close" aria-label="Close">${svgIcon("close")}</button>
        </div>
        <div class="modal-body">
          <span class="cat-pill">${p.category}</span>
          <h3>${p.title}</h3>
          <p class="m-desc">${p.full}</p>
          <div class="modal-grid">
            <div class="cell"><div class="k">Year</div><div class="v">${p.year}</div></div>
            <div class="cell"><div class="k">Client</div><div class="v">${p.client}</div></div>
            <div class="cell"><div class="k">Domain</div><div class="v">${p.category}</div></div>
          </div>
          <div class="m-outcome"><div class="k">Outcome</div><p>${p.outcome}</p></div>
          <div class="modal-tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <div class="modal-actions"><a class="btn btn-ink" href="${p.link}" target="_blank" rel="noopener">${svgBrand("github")} View on GitHub</a></div>
        </div>`;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
      modal.scrollTop = 0;
      document.getElementById("modal-close").addEventListener("click", closeModal);
    }
    function closeModal() { overlay.classList.remove("open"); document.body.style.overflow = ""; }
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
    addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }

  // Contact form
  function bindForm() {
    const form = document.getElementById("contact-form");
    const setErr = (name, msg) => {
      const f = form.querySelector(`[data-field="${name}"]`);
      f.classList.toggle("err", !!msg);
      f.querySelector(".msg").textContent = msg || "";
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (n) => form.elements[n].value.trim();
      let ok = true;
      if (!v("first")) { setErr("first", "Required"); ok = false; } else setErr("first", "");
      if (!v("email")) { setErr("email", "Required"); ok = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) { setErr("email", "Enter a valid email"); ok = false; }
      else setErr("email", "");
      if (!v("message")) { setErr("message", "Tell me a little about it"); ok = false; } else setErr("message", "");
      if (!ok) return;

      const data = { from_name: v("first") + " " + v("last"), reply_to: v("email"), phone: v("phone"), message: v("message") };
      const finish = () => {
        document.getElementById("form-success").classList.add("show");
        document.getElementById("form-note").style.display = "none";
        form.reset();
      };
      const mailto = () => {
        const subject = encodeURIComponent("Portfolio enquiry from " + data.from_name);
        const body = encodeURIComponent("Name: " + data.from_name + "\nEmail: " + data.reply_to + "\nPhone: " + data.phone + "\n\n" + data.message);
        window.location.href = "mailto:" + C.email + "?subject=" + subject + "&body=" + body;
      };
      const cfg = C.emailjs;
      if (cfg.enabled && window.emailjs) {
        const btn = document.getElementById("send-btn"); btn.textContent = "Sending…";
        window.emailjs.send(cfg.serviceId, cfg.templateId, data, cfg.publicKey)
          .then(() => { finish(); btn.innerHTML = svgIcon("mail") + " Send Message"; })
          .catch(() => { mailto(); finish(); btn.innerHTML = svgIcon("mail") + " Send Message"; });
      } else { mailto(); finish(); }
    });
  }

  bindReveal(); bindCounters(); bindScroll(); bindProjects(); bindForm();
})();
