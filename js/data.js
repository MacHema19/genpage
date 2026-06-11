/* ============================================================
   PORTFOLIO CONTENT + CONFIG
   ------------------------------------------------------------
   ✏️  EDIT ME: everything you might need to change lives here.
   ============================================================ */

window.CONFIG = {
  name: "Hema Darshini Selvaraju",
  initials: "HD",
  // ✏️ Update with your real LinkedIn URL:
  linkedin: "https://www.linkedin.com/in/hema-darshini-selvaraju",
  github: "https://github.com/MacHema19",
  email: "mshemadarshini@gmail.com",
  whatsapp: "60122919199", // digits only, country code first
  resumeUrl: "https://www.dropbox.com/s/6a1ecybphse9ehc/Hema_MBABScITUK%2C12YearExp.pdf?dl=0",

  /* ---- EmailJS (optional) ----
     Form works as a mailto fallback out of the box. To send silently
     via EmailJS on GitHub Pages: create a free account at emailjs.com,
     then paste your IDs below AND uncomment the SDK <script> in index.html. */
  emailjs: {
    enabled: false,
    publicKey: "YOUR_PUBLIC_KEY",
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
  },
};

window.PortfolioData = {
  hero: {
    greeting: "Hi, I'm",
    nameLines: ["Hema", "Darshini"],
    honorific: "Ts.",
    role: "Senior Software Engineer (Python) · DevSecOps · Cloud (AWS / Azure / GCP)",
    lede: "Senior technology, security & platform governance leader with nearly two decades delivering secure enterprise platforms, cloud transformation and audit-ready operations across APAC, Europe and the Americas.",
    availability: "Open to Senior IT, Cloud, DevSecOps & Platform Leadership roles",
    chips: ["AWS · Azure · GCP", "DevSecOps", "CISSP · CCNA"],
  },

  summary: {
    lede: "Nearly 20 years architecting secure, compliant and production-ready technology across insurance, banking, AgTech, cybersecurity and regulated enterprise environments.",
    paragraphs: [
      "Senior technology, security and platform governance leader experienced in leading secure enterprise platform delivery, cloud transformation, deployment governance, operational risk controls and audit-ready technology operations across three continents.",
      "Strong exposure to security architecture, identity and access governance, cloud-native platform controls, DevSecOps, API integration, audit evidence, compliance reporting and enterprise risk management.",
      "Works fluently across application, middleware, infrastructure, security, vendor, QA and operations teams to ensure systems are secure, compliant, supportable and production-ready.",
    ],
  },

  stats: [
    { num: 19, suffix: "+", label: "Years experience", sub: "SINCE 2007" },
    { num: 3, suffix: "", label: "Continents", sub: "APAC · EU · AMER" },
    { num: 5, suffix: "+", label: "Regulated industries", sub: "INS · BANK · AGTECH" },
    { num: 3, suffix: "", label: "Cloud platforms", sub: "AWS · AZURE · GCP" },
  ],

  // ✏️ Verify roles, dates & companies — these are reconstructed from your
  //    site and SA deck. Edit freely; achievements draw from your summary.
  experience: [
    {
      role: "VP, IT Deployment Governance Lead",
      company: "AXA",
      date: "June 2023 — Present",
      location: "Insurance · APAC / Global",
      bullets: [
        "Lead secure enterprise platform delivery and deployment governance across regulated insurance systems.",
        "Drive cloud transformation and cloud-native platform controls aligned to operational risk and audit requirements.",
        "Establish DevSecOps practices, release governance and audit-ready evidence across delivery teams.",
      ],
      tags: ["AWS", "Azure", "DevSecOps", "Governance", "Risk Controls", "Dynatrace", "AWS Glue", "AWS Lambda", "Azure Functions", "Policy-as-code", "Compliance Automation", "Audit Trail", "Operational Risk Management", "ITSM", "ITIL", "Lean Six Sigma", "CISSP", "CCNA", "TOGAF", "Prometheus", "Grafana", "Splunk", "Python", "Bash", "CI/CD", "Kubernetes", "Terraform", "Linux", "Windows Server", "MySQL", "PostgreSQL", "MongoDB"

      ],
    },
    {
      role: "Senior Technology Manager | Digital Transformation",
      company: "Averis",
      date: "June 2019 — June 2023",
      location: "Shared Services · APAC",
      bullets: [
        "Delivered enterprise application automation, reporting automation and system health-check tooling.",
        "Built CI/CD pipelines and infrastructure automation supporting multi-team delivery.",
        "Implemented security and compliance controls across middleware and infrastructure layers.",
      ],
      tags: ["Python", "CI/CD", "Automation", "ITSM", "Linux"],
    },
    {
      role: "Security / Enterprise Software Engineer (Level 4)",
      company: "DXC Technology",
      date: "2015 — 2018",
      location: "Cybersecurity · Global",
      bullets: [
        "Developed security tooling including the Advanced Malware Analysis Tool extending the VirusTotal API.",
        "Built a Knowledge Management System aggregating global security intelligence for SOC engineers.",
        "Engineered enterprise web applications adhering to industry security frameworks.",
      ],
      tags: ["Python", "PyQt", "Web Security", "SQLite", "OSINT"],
    },
    {
      role: "Software Engineer · Early Career",
      company: "Infoconnect Sdn Bhd ",
      date: "Oct 2016 — April 2017",
      location: "Multiple · APAC / UK",
      bullets: [
        "Deployed e-commerce platforms across Django, Flask, Ruby on Rails, WordPress and Joomla.",
        "Built Android security applications and database-backed mobile apps.",
        "Grew from full-stack development into security, cloud and platform engineering.",
      ],
      tags: ["Django", "Flask", "Android", "MySQL", "Full-Stack"],
    },
    {
      role: "Software Engineer · Internship",
      company: "Xynapse Sdn Bhd ",
      date: "Aug 2015 - Oct 2015 ",
      location: "Multiple · APAC / UK",
      bullets: [
        "Deployed e-commerce platforms across Django, Flask, Ruby on Rails, WordPress and Joomla.",
        "Built Android security applications and database-backed mobile apps.",
        "Grew from full-stack development into security, cloud and platform engineering.",
      ],
      tags: ["Django", "Flask", "Android", "MySQL", "Full-Stack"],
    },
      {
      role: "Freelance Software Engineer · Early Career",
      company: "Self Employed  ",
      date: "2010 — 2020",
      location: "Multiple · APAC / UK",
      bullets: [
        "Deployed e-commerce platforms across Django, Flask, Ruby on Rails, WordPress and Joomla.",
        "Built Android security applications and database-backed mobile apps.",
        "Grew from full-stack development into security, cloud and platform engineering.",
      ],
      tags: ["Django", "Flask", "Android", "MySQL", "Full-Stack"],
    },
    {
      role: "Critical Major Incident Manager (MIM) ",
      company: "CSC  ",
      date: "2010 — 2020",
      location: "Multiple · APAC / UK",
      bullets: [
     
        "Managed five engineering teams across network, network security, Wintel, systems administration, and technical support, acting as the central coordination point across infrastructure domains in a multinational enterprise environment. Led Major Incident Management (MIM) across large enterprise clients including Eaton and Maybank, driving incident coordination, escalation, communication, and timely resolution to minimize business impact",
     
     "Worked closely with banking client technical persons-in-charge, client stakeholders, and internal delivery teams to manage service expectations, operational issues, and infrastructure delivery performance. Partnered with Problem Managers and Change Managers, conducting RCA/ROC reviews, post-incident follow-up, and service improvement actions to reduce recurring issues and strengthen operational stability",
     
     "Owned SLA/KPI setup, governance, and service reporting, consistently achieving green SLA performance across managed infrastructure services. Drove vendor coordination, stakeholder reporting, and escalation governance, improving accountability, visibility, and cross-team responsiveness during critical incidents",
      ],
      tags: ["BMC Remedy", "Jira",,"Graphana", "SolarWind", "Documentations"],
    },
  ],



  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "University of Wales Saint Trinity David, United Kingdom",
      meta: "POSTGRADUATE · BUSINESS - 2021",
      note: "Strategic leadership, operations and technology management.",
    },
    {
      degree: "BSc (Hons) IT — System Security",
      school: "Staffordshire University, United Kingdom",
      meta: "UNDERGRADUATE · 2016",
      note: "Specialised in information security, networks and secure software engineering.",
    },
  ],

  certifications: [
    { name: "CISSP", issuer: "ISC²", abbr: "CISSP" },
    { name: "CCNA", issuer: "Cisco", abbr: "CCNA" },
    { name: "Certified Technologist (Ts.)", issuer: "MBOT Malaysia", abbr: "Ts." },
    { name: "Lean Six Sigma — Black Belt", issuer: "International Association of Certified Lean Six Sigma Professionals (IASSC)", abbr: "CLSSB" },
    { name: "ACS Certified Software Engineer", issuer: "Australian Computer Society", abbr: "CSE" },
    { name: "TOGAF 10", issuer: "The Open Group", abbr: "TOG", pending: true },
  ],

  skills: [
    {
      category: "Cloud & Platform",
      icon: "cloud",
      items: [
        { name: "AWS", level: "Expert", score: 5 },
        { name: "Microsoft Azure", level: "Expert", score: 4 },
        { name: "Google Cloud (GCP)", level: "Proficient", score: 4 },
        { name: "Cloud Migration & Architecture", level: "Expert", score: 5 },
      ],
    },
    {
      category: "DevSecOps & Security",
      icon: "shield",
      items: [
        { name: "DevSecOps / CI-CD", level: "Expert", score: 5 },
        { name: "Security Architecture", level: "Expert", score: 5 },
        { name: "IAM & Access Governance", level: "Expert", score: 4 },
        { name: "Deployment Governance", level: "Expert", score: 5 },
      ],
    },
    {
      category: "Languages & Engineering",
      icon: "code",
      items: [
        { name: "Python", level: "Expert", score: 5 },
        { name: "Django / Flask", level: "Proficient", score: 4 },
        { name: "Bash / Automation", level: "Proficient", score: 4 },
        { name: "SQL / Databases", level: "Proficient", score: 4 },
      ],
    },
    {
      category: "Governance & Delivery",
      icon: "compass",
      items: [
        { name: "Operational Risk & Controls", level: "Expert", score: 5 },
        { name: "Audit & Compliance Reporting", level: "Expert", score: 4 },
        { name: "ITSM / ITIL", level: "Proficient", score: 4 },
        { name: "Lean Six Sigma", level: "Proficient", score: 4 },
      ],
    },
  ],

  architecture: [
    {
      title: "Enterprise Deployment & Release Platform",
      label: "Designed for AXA",
      tag: "Cloud · Governance",
      desc: "Audit-ready deployment governance platform unifying release pipelines, approval controls and compliance evidence across regulated insurance systems.",
      tags: ["Multi-cloud", "CI/CD", "Policy-as-code", "Audit Trail"],
    },
    {
      title: "Cloud Migration Blueprint",
      label: "Cloud Transformation",
      tag: "AWS · Azure",
      desc: "Reference architecture for migrating legacy enterprise workloads to cloud-native services with embedded security controls and landing-zone governance.",
      tags: ["Landing Zone", "IAM", "Network Security", "Cost Controls"],
    },
  ],

  projects: [
       {
      title: "Ebay Developer API Integration",
      category: "Security",
      year: "2026",
      client: "Ebay Technology Technology",
      tech: ["Python", "FastAPI", "Docker", "Terraform, AWS, Azure"],
      desc: "An extension of the VirusTotal public API enabling malware analysis across up to 20 hashes per request — 4× the standard 5-hash limit.",
      full: "A desktop analysis tool that extends the VirusTotal public API so security engineers can scan up to 20 file hashes in a single request rather than the default five. It aggregates results from dozens of antivirus engines and online scanners, surfacing detections that a single vendor's engine might miss and reducing false-positive triage time for the SOC.",
      outcome: "API framework scalable with OAuth2 and authentication with sandbox environment has been built .",
      img: "img/eBay-API.jpg",
      link: "https://github.com/MacHema19/Hema_EbayDevAPi",
    },
    {
      title: "Advanced Malware Analysis Tool",
      category: "Security",
      year: "2017",
      client: "DXC Technology",
      tech: ["Python", "PyQt", "SQLite3", "VirusTotal API"],
      desc: "An extension of the VirusTotal public API enabling malware analysis across up to 20 hashes per request — 4× the standard 5-hash limit.",
      full: "A desktop analysis tool that extends the VirusTotal public API so security engineers can scan up to 20 file hashes in a single request rather than the default five. It aggregates results from dozens of antivirus engines and online scanners, surfacing detections that a single vendor's engine might miss and reducing false-positive triage time for the SOC.",
      outcome: "Quadrupled per-request hash throughput and accelerated SOC malware triage.",
      img: "https://machema19.github.io/img/mobile_sec.jpeg",
      link: "https://github.com/MacHema19",
    },
    {
      title: "Security Knowledge Management System",
      category: "Security",
      year: "2017",
      client: "Confidential (NDA)",
      tech: ["Python", "Web Framework", "OSINT", "Automation"],
      desc: "A self-initiated web platform that auto-publishes the latest global security incidents to enterprise SOC engineers on an hourly basis.",
      full: "A web framework built for an enterprise security engineering team that automatically aggregates and republishes new articles and advisories from authoritative security sources on an hourly basis. It became a one-stop intelligence hub keeping engineers current on the latest threats, technologies and disclosures relevant to their daily work — a self-motivated project proposed to upskill the department.",
      outcome: "Centralised hourly threat intelligence for the entire security team.",
      img: "https://machema19.github.io/img/lock.png",
      link: "https://github.com/MacHema19",
    },
    {
      title: "WhatAreYouSeeing? — Android Security App",
      category: "Mobile",
      year: "2016",
      client: "Staffordshire University, UK",
      tech: ["Android (Java)", "MySQL"],
      desc: "A native Android security application built as the capstone project for BSc IT — System Security.",
      full: "An Android application developed from scratch as the final-year project for a BSc in IT System Security. The build covered the full mobile lifecycle — from UI and local data handling through to a MySQL-backed service — and established the mobile engineering foundation later applied across professional security work.",
      outcome: "Delivered end-to-end as an honours capstone; foundation for mobile security work.",
      img: "https://machema19.github.io/img/portfolio/mobile_sec.jpeg",
      link: "https://github.com/MacHema19",
    },
    {
      title: "Enterprise Reporting Automation",
      category: "DevOps",
      year: "2019",
      client: "Averis",
      tech: ["Python", "Automation", "Email / SMTP", "Scheduling"],
      desc: "Automation scripts that email system health-check reports to line managers, removing manual monitoring overhead.",
      full: "A suite of Python automation tooling that performs scheduled system health checks and dispatches formatted status reports directly to line managers. It replaced repetitive manual monitoring with reliable, auditable automation and became a template for further reporting-automation efforts across the enterprise.",
      outcome: "Eliminated manual health-check reporting and improved operational visibility.",
      img: "",
      link: "https://github.com/MacHema19",
    },
    {
      title: "Multi-Framework E-Commerce Deployments",
      category: "Enterprise",
      year: "2014",
      client: "Various",
      tech: ["Django", "Flask", "Ruby on Rails", "WordPress", "Joomla"],
      desc: "Production e-commerce sites delivered across five distinct web frameworks for a range of clients.",
      full: "A portfolio of production e-commerce deployments delivered across Ruby on Rails, Django, Flask, WordPress and Joomla. The breadth built deep cross-framework fluency and an architectural instinct for matching the right stack to each client's operational and security constraints.",
      outcome: "Cross-framework delivery fluency across five production stacks.",
      img: "",
      link: "https://github.com/MacHema19",
    },
    {
      title: "Cloud Migration Blueprint",
      category: "Cloud",
      year: "2022",
      client: "Enterprise",
      tech: ["AWS", "Azure", "Landing Zone", "IAM"],
      desc: "A reusable reference architecture for migrating legacy enterprise workloads to secure cloud-native services.",
      full: "A sanitised reference architecture and migration playbook for moving legacy enterprise workloads onto cloud-native services. It embeds landing-zone governance, identity and access controls, network segmentation and cost guardrails so that migrations land secure-by-default and audit-ready from day one.",
      outcome: "Repeatable, secure-by-default migration pattern adopted across teams.",
      img: "",
      link: "https://github.com/MacHema19",
    },
  ],

  projectCategories: ["All", "Security", "Cloud", "DevOps", "Mobile", "Enterprise"],
};
