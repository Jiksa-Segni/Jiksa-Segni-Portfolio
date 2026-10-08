import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu,
  X,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
  ArrowUpRight,
  Cpu,
  Network,
  Wrench,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Atom,
  Server,
  Braces,
  FileCode2,
  Palette,
  Monitor,
  Layers,
  GitBranch,
  Database,
  Send,
} from "lucide-react";
import "./styles.css";

const socials = {
  github: "https://github.com/jiksa-segni",
  linkedin: "https://linkedin.com/in/jiksa-segni-6a1a9a30a",
  telegram: "https://t.me/N_i_rgb_ye",
  email: "mailto:jiksasegni21@gmail.com",
};
const nav = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Services"],
  ["projects", "Projects"],
  ["experience", "Experience"],
];

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    icon: Cpu,
    title: "Programming",
    items: ["JavaScript", "Python", "Component-Based UI", "Problem Solving"],
  },
  {
    icon: Network,
    title: "Backend & Web",
    items: ["Node.js", "Express.js", "REST API Fundamentals", "Git / GitHub"],
  },
  {
    icon: Wrench,
    title: "Engineering & Tools",
    items: [
      "Arduino",
      "MATLAB",
      "Multisim",
      "VS Code",
      "System Troubleshooting",
    ],
  },
];

const technologyIcons = {
  "React.js": Atom,
  "Next.js": Layers,
  "JavaScript ES6+": Braces,
  HTML5: FileCode2,
  CSS3: Palette,
  "Responsive Design": Monitor,
  JavaScript: Braces,
  Python: Code2,
  "Component-Based UI": Layers,
  "Problem Solving": Wrench,
  "Node.js": Server,
  "Express.js": Network,
  "REST API Fundamentals": Database,
  "Git / GitHub": GitBranch,
  Arduino: Cpu,
  MATLAB: Code2,
  Multisim: Network,
  "VS Code": Code2,
  "System Troubleshooting": Wrench,
};

const technologyColors = {
  "React.js": "#61dafb",
  "Next.js": "#f5f5f5",
  "JavaScript ES6+": "#f7df1e",
  HTML5: "#e34f26",
  CSS3: "#1572b6",
  "Responsive Design": "#a78bfa",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  "Component-Based UI": "#a78bfa",
  "Problem Solving": "#f59e0b",
  "Node.js": "#83cd29",
  "Express.js": "#e5e7eb",
  "REST API Fundamentals": "#38bdf8",
  "Git / GitHub": "#f05032",
  Arduino: "#00979d",
  MATLAB: "#f27022",
  Multisim: "#f59e0b",
  "VS Code": "#23a8f2",
  "System Troubleshooting": "#a3e635",
};

const projects = [
  {
    title: "Personal Portfolio",
    type: "Portfolio Website",
    image: "/images/personal-portfolio.svg",
    desc: "A responsive personal portfolio built with React to showcase my experience, skills, education and selected projects.",
    features: [
      "Responsive portfolio layout",
      "Project and skills showcase",
      "Experience and education timeline",
      "Contact and social links",
    ],
    stack: ["React", "JavaScript", "CSS"],
    links: false,
  },
  {
    title: "Addis Eats",
    type: "Restaurant Platform",
    image: "/images/addis-eats.svg",
    desc: "A full restaurant web application with customer ordering and administration functionality.",
    features: [
      "Menu and category filtering",
      "Dish details and cart management",
      "Checkout and form validation",
      "Authentication and protected flows",
      "Admin restaurant operations",
    ],
    stack: ["React", "Node.js", "Express.js"],
    links: true,
  },
  {
    title: "Enllite for All",
    type: "E-Learning Platform",
    image: "/images/enllite-for-all.svg",
    desc: "An e-learning platform developed during a front-end development internship with responsive interfaces and role-based access.",
    features: [
      "Responsive front-end components",
      "Student, Instructor, Admin and Parent roles",
      "React-based interface development",
    ],
    stack: ["React", "HTML", "CSS"],
    links: false,
  },
  {
    title: "Fingerprint-Based Voting System",
    type: "Final Year Project",
    image: "/images/fingerprint-voting.svg",
    desc: "A university final-year project combining a React frontend, Laravel backend and Arduino fingerprint authentication.",
    features: [
      "Fingerprint verification",
      "Role-based access",
      "Biometric authentication",
      "Hardware and software integration",
    ],
    stack: ["React", "Laravel", "Arduino"],
    links: false,
  },
];

const certificates = [
  "Computer Hardware and Software Maintenance — Arba Minch University",
  "Programming Fundamentals & Data Analysis — Udacity",
  "Dereja Academy Accelerator Program — Employability & Job Readiness",
  "Entrepreneurial Attitude & Competency Program — Arba Minch University",
];

function App() {
  const [open, setOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [activeSection, setActiveSection] = useState("home");
  const pointerRef = useRef({ x: 50, y: 50 });
  const close = () => setOpen(false);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      pointerRef.current = { x, y };
    };

    let frameId;
    const tick = () => {
      setPointer((current) => {
        const target = pointerRef.current;
        const dx = (target.x - current.x) * 0.11;
        const dy = (target.y - current.y) * 0.11;
        return { x: current.x + dx, y: current.y + dy };
      });
      frameId = requestAnimationFrame(tick);
    };

    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: [0.25, 0.45, 0.7], rootMargin: "-10% 0px -15% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    frameId = requestAnimationFrame(tick);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      className="app"
      style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` }}
    >
      <header className="nav">
        <a href="#home" className="logo" onClick={close}>
          <span className="logo-mark">J</span>
          <span className="logo-name">
            JIKSA <b>SEGNI</b>
          </span>
        </a>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={open ? "links open" : "links"}
          aria-label="Main navigation"
        >
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              onClick={close}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="hire mobile-hire" onClick={close}>
            Contact Me <ArrowUpRight size={14} />
          </a>
        </nav>
        <a href="#contact" className="hire header-hire">
          Let's talk <ArrowUpRight size={14} />
        </a>
      </header>

      <main>
        <section
          id="home"
          className={`hero ${activeSection === "home" ? "active" : ""}`}
        >
          <div className="hero-photo" aria-hidden="true">
            <img src="/profile.jpg" alt="" />
          </div>
          <div className="hero-content">
            <div className="hero-intro">
              <p className="hero-kicker">HI THERE!</p>
              <h1>
                I am <span>Jiksa</span>
                <br />
                Segni<span className="hero-caret">|</span>
              </h1>
              <p className="hero-role">
                Software Developer <span>&</span> Computer Engineer
              </p>
              <p className="hero-summary">
                I make the complex simple—building useful digital experiences
                with thoughtful design and solid engineering.
              </p>
              <a className="hero-button" href="#contact">
                Contact Me <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-photo-note">
              <span className="hero-photo-ring">
                <i></i>
              </span>
              <span>DESIGN · DEVELOPMENT · ENGINEERING</span>
            </div>
          </div>
          <div className="hero-bottom">
            <a href={socials.email}>
              <strong>Email</strong>
              <span>jiksasegni21@gmail.com</span>
            </a>
            <div>
              <strong>Focus</strong>
              <span>Software Development</span>
            </div>
            <div>
              <strong>Location</strong>
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <a className="hero-scroll" href="#about">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          id="about"
          className={`section about ${activeSection === "about" ? "active" : ""}`}
        >
          <div className="about-profile">
            <div className="about-photo">
              <img src="/profile.jpg" alt="Portrait of Jiksa Segni" />
              <span className="about-photo-caption">
                JIKSA SEGNI · SOFTWARE DEVELOPER
              </span>
            </div>
            <div className="about-details">
              <span className="about-eyebrow">WHO AM I?</span>
              <h2>
                I'm Jiksa Segni, a Software Developer
                <br className="desktop-break" /> and Computer Engineer.
              </h2>
              <p>
                I am an Electrical and Computer Engineering graduate from Arba
                Minch University. I enjoy creating intuitive web applications
                and solving practical problems with software, while bringing an
                engineer's perspective to every project.
              </p>
              <p>
                My experience includes building responsive React interfaces,
                full-stack web applications, and projects that connect software
                with hardware.
              </p>
              <div className="about-facts">
                <div>
                  <strong>Name:</strong>
                  <span>Jiksa Segni</span>
                </div>
                <div>
                  <strong>From:</strong>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div>
                  <strong>Degree:</strong>
                  <span>Electrical & Computer Engineering</span>
                </div>
                <div>
                  <strong>Email:</strong>
                  <a href={socials.email}>jiksasegni21@gmail.com</a>
                </div>
              </div>
              <a
                className="hero-button cv-button"
                href="/Jiksa_Segni_Software_CV.pdf"
                download
              >
                Download CV <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={`section skills ${activeSection === "skills" ? "active" : ""}`}
        >
          <div className="section-head">
            <span>02 / SERVICES</span>
            <h2>
              My <em>Services.</em>
            </h2>
            <p>
              Practical development and engineering skills to take ideas from
              concept to a working digital product.
            </p>
          </div>
          <div className="skill-grid">
            {skills.map(({ icon: Icon, title, items }) => (
              <article className="skill" key={title}>
                <Icon className="skill-icon" />
                <h3>{title}</h3>
                <div>
                  {items.map((x) => {
                    const TechIcon = technologyIcons[x] || Code2;
                    return (
                      <span className="technology-chip" key={x}>
                        <TechIcon
                          aria-hidden="true"
                          style={{
                            "--tech-color": technologyColors[x] || "#43d3a5",
                          }}
                        />
                        {x}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className={`section projects ${activeSection === "projects" ? "active" : ""}`}
        >
          <div className="section-head">
            <span>03 / MY PROJECTS</span>
            <h2>
              Things I've <em>built.</em>
            </h2>
            <p>
              Selected projects that reflect my experience across frontend,
              backend, hardware and software integration.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project" key={p.title}>
                <div className="project-top">
                  <span>0{i + 1}</span>
                  <span>{p.type}</span>
                </div>
                <div className="project-preview">
                  <img
                    src={p.image}
                    alt={`${p.title} project preview`}
                    loading="lazy"
                  />
                  <span className="preview-label">PROJECT PREVIEW</span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.features.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <div className="chips">
                    {p.stack.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {p.links ? (
                      <>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          Live Demo <ExternalLink size={13} />
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          GitHub <Code2 size={13} />
                        </a>
                      </>
                    ) : (
                      <span className="private">
                        Project details available on request
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className={`section experience ${activeSection === "experience" ? "active" : ""}`}
        >
          <div className="section-head">
            <span>04 / EXPERIENCE</span>
            <h2>
              Where I've <em>grown.</em>
            </h2>
          </div>
          <div className="timeline">
            <article>
              <div className="date">07/2026 — PRESENT</div>
              <div className="dot"></div>
              <div className="timeline-card">
                <span>INTERNSHIP</span>
                <h3>Intern</h3>
                <h4>IBT College of Canada, Full Stack Developer</h4>
                <p>
                  Currently completing an internship at IBT College of Canada.
                </p>
              </div>
            </article>
            <article>
              <div className="date">07/2024 — 10/2024</div>
              <div className="dot"></div>
              <div className="timeline-card">
                <span>INTERNSHIP</span>
                <h3>Front-End Developer</h3>
                <h4>Everlink Digital Technologies PLC · Addis Ababa</h4>
                <p>
                  Designed and implemented responsive front-end components using
                  React.js, HTML and CSS. Contributed to the Enllite for All
                  e-learning platform supporting Students, Instructors, Admins
                  and Parents.
                </p>
                <div className="chips">
                  <span>React.js</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>
            </article>
            <article>
              <div className="date">2021 — 2025</div>
              <div className="dot"></div>
              <div className="timeline-card">
                <span>ACADEMIC</span>
                <h3>BSc Electrical & Computer Engineering</h3>
                <h4>Arba Minch University</h4>
                <p>
                  Graduated with 78% and received Academic Excellence
                  recognition. Built software and engineering projects across
                  the program.
                </p>
              </div>
            </article>
            <article>
              <div className="date">SAM-UP</div>
              <div className="dot"></div>
              <div className="timeline-card">
                <span>ACADEMIC SUPPORT</span>
                <h3>Student Tutor</h3>
                <h4>Arba Minch University</h4>
                <p>
                  Provided academic support and peer learning assistance to a
                  group of university students through the SAM-UP program.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          className={`section education ${activeSection === "education" ? "active" : ""}`}
        >
          <div className="section-head">
            <span>05 / EDUCATION & CERTIFICATES</span>
            <h2>
              Always <em>learning.</em>
            </h2>
          </div>
          <div className="edu-grid">
            <div className="edu-main">
              <GraduationCap />
              <small>2021 — 2025</small>
              <h3>BSc Electrical and Computer Engineering</h3>
              <p>Arba Minch University · Computer Engineering specialization</p>
              <strong>78% · Academic Excellence</strong>
            </div>
            <div className="certs">
              {certificates.map((c, i) => (
                <div className="cert" key={c}>
                  <span>0{i + 1}</span>
                  <p>{c}</p>
                  <ChevronDown size={14} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`section contact ${activeSection === "contact" ? "active" : ""}`}
        >
          <div className="contact-box">
            <div className="contact-copy">
              <span className="contact-eyebrow">LET'S CONNECT</span>
              <h2>
                Have a project or opportunity?
                <br />
                <em>Let's make it happen.</em>
              </h2>
              <p>
                I'm open to conversations about software development,
                collaboration, and new opportunities. Reach out and let's talk
                about what we can build.
              </p>
              <a className="hero-button contact-cta" href={socials.email}>
                Email me <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="contact-details">
              <a className="contact-detail" href={socials.email}>
                <span className="contact-icon">
                  <Mail size={17} />
                </span>
                <span>
                  <strong>Email</strong>
                  <small>jiksasegni21@gmail.com</small>
                </span>
                <ArrowUpRight className="contact-arrow" size={16} />
              </a>
              <a
                className="contact-detail"
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <BriefcaseBusiness size={17} />
                </span>
                <span>
                  <strong>LinkedIn</strong>
                  <small>Connect with Jiksa Segni</small>
                </span>
                <ArrowUpRight className="contact-arrow" size={16} />
              </a>
              <a
                className="contact-detail"
                href={socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <Code2 size={17} />
                </span>
                <span>
                  <strong>GitHub</strong>
                  <small>Explore my code and projects</small>
                </span>
                <ArrowUpRight className="contact-arrow" size={16} />
              </a>
              <a
                className="contact-detail telegram-contact"
                href={socials.telegram}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <Send size={17} />
                </span>
                <span>
                  <strong>Telegram</strong>
                  <small>@N_i_rgb_ye</small>
                </span>
                <ArrowUpRight className="contact-arrow" size={16} />
              </a>
              <div className="contact-detail contact-location">
                <span className="contact-icon">
                  <MapPin size={17} />
                </span>
                <span>
                  <strong>Location</strong>
                  <small>Addis Ababa, Ethiopia</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-main">
          <a href="#home" className="logo footer-logo">
            <span className="logo-mark">J</span>
            <span className="logo-name">
              JIKSA <b>SEGNI</b>
            </span>
          </a>
          <p>
            Software Developer &amp; Computer Engineer
            <br />
            Building thoughtful digital experiences.
          </p>
          <a className="footer-email" href={socials.email}>
            jiksasegni21@gmail.com <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Jiksa Segni</span>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="footer-location">
            <MapPin size={13} /> Addis Ababa, Ethiopia
          </span>
        </div>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
