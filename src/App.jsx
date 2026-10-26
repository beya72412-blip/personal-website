import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const roles = ['Full-Stack Developer', 'MERN Specialist', 'Problem Solver', 'Creative Builder'];

const socials = [
  { label: 'GitHub', href: 'https://github.com/beya72412-blip', icon: 'GH' },
  { label: 'Email', href: 'mailto:beya72412@gmail.com', icon: '✉' },
  { label: 'LinkedIn', href: '#contact', icon: 'in' },
];

const skills = [
  {
    title: 'Front-End',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Back-End',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Mongoose', 'Schema Design', 'Data Modeling'],
  },
  {
    title: 'Tools / VCS',
    items: ['Git', 'GitHub', 'Postman', 'npm', 'Debugging'],
  },
];

const projectHighlights = [
  { value: '10+', label: 'Projects' },
  { value: '2+', label: 'Years learning' },
  { value: '100%', label: 'Driven' },
  { value: 'MERN', label: 'Focused stack' },
];

const projects = [
  {
    title: 'CampusConnect',
    category: 'MERN',
    description:
      'A community-first student networking platform for collaboration, academic support, events, and engagement across campus communities.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: '#',
    code: 'https://github.com/beya72412-blip',
  },
  {
    title: 'ShopSphere',
    category: 'Full Stack',
    description:
      'An ecommerce dashboard with modern product browsing, cart interactions, and a streamlined checkout experience for online shoppers.',
    stack: ['React', 'Express', 'MongoDB', 'REST API'],
    live: '#',
    code: 'https://github.com/beya72412-blip',
  },
  {
    title: 'TaskFlow Pro',
    category: 'MERN',
    description:
      'A collaborative productivity workspace for planning tasks, tracking project progress, and managing delivery pipelines in real time.',
    stack: ['React', 'Node.js', 'MongoDB', 'Charts'],
    live: '#',
    code: 'https://github.com/beya72412-blip',
  },
  {
    title: 'Portfolio Studio',
    category: 'Frontend',
    description:
      'A polished portfolio template concept focused on elegant presentation, clear messaging, and responsive creative layouts.',
    stack: ['React', 'CSS3', 'JavaScript'],
    live: '#',
    code: 'https://github.com/beya72412-blip',
  },
];

const timeline = [
  {
    period: '2024 - Present',
    title: 'Computer Science Student',
    text: 'Building a strong foundation in software engineering, algorithms, data structures, and modern full-stack application design.',
  },
  {
    period: '2025',
    title: 'MERN Stack Developer',
    text: 'Developing real-world web applications with React, Express, MongoDB, and API-driven architecture to solve everyday product challenges.',
  },
  {
    period: '2024',
    title: 'Portfolio & Project Development',
    text: 'Designing and implementing polished interfaces, practical features, and user-centered experiences with clean front-end and back-end logic.',
  },
  {
    period: '2023',
    title: 'Web Development Foundations',
    text: 'Started with JavaScript, HTML, CSS, Git, and UI fundamentals, then expanded into modern frameworks and full-stack workflows.',
  },
];

const filterOptions = ['All', 'MERN', 'Full Stack', 'Frontend'];

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function App() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState(initialFormState);
  const [statusMessage, setStatusMessage] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeoutDuration = isDeleting ? 70 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextValue = currentRole.slice(0, typedText.length + 1);
        setTypedText(nextValue);

        if (nextValue === currentRole) {
          setTimeout(() => setIsDeleting(true), 1300);
        }
      } else {
        const nextValue = currentRole.slice(0, typedText.length - 1);
        setTypedText(nextValue);

        if (nextValue.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Form submission failed.');
      }

      setStatusMessage(data.message);
      setFormData(initialFormState);
    } catch (error) {
      setStatusMessage(error.message || 'Unable to send the message right now.');
    }

    setTimeout(() => setStatusMessage(''), 4500);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Beyene home">
            <span className="brand-mark">B</span>
            <span>Beyene</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle light and dark theme"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <a href="#contact" className="nav-button">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="badge-pill">Available for freelance and collaboration</span>
              <h1>
                Hi, I&apos;m <span>Beyene</span>
              </h1>
              <h2>
                <span className="typing-text">{typedText}</span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-description">
                Passionate developer specializing in modern web applications and full-stack development using the MERN stack.
                I build clean, efficient, and user-friendly digital experiences with purpose and precision.
              </p>

              <div className="cta-row">
                <a href="#projects" className="primary-btn">
                  View Work
                </a>
                <a href="mailto:beya72412@gmail.com" className="secondary-btn">
                  Get In Touch
                </a>
              </div>

              <div className="social-row" aria-label="Social links">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="social-pill"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-panel reveal">
              <div className="profile-card">
                <div className="profile-accent" />
                <div className="avatar-shell">
                  <div className="avatar-text">B</div>
                </div>

                <div className="profile-stats">
                  {projectHighlights.map((item) => (
                    <div key={item.label} className="mini-stat">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div className="stat-panel reveal">
              <span>Focus</span>
              <strong>MERN Stack</strong>
            </div>
            <div className="stat-panel reveal">
              <span>Specialty</span>
              <strong>Full-Stack Apps</strong>
            </div>
            <div className="stat-panel reveal">
              <span>Mindset</span>
              <strong>Clean &amp; Scalable</strong>
            </div>
            <div className="stat-panel reveal">
              <span>Approach</span>
              <strong>User-Centered</strong>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">About Me</p>
              <h3>Engineering digital solutions with clarity and purpose.</h3>
            </div>

            <div className="about-grid">
              <div className="about-card reveal">
                <p>
                  I&apos;m Beyene, a Computer Science student and full-stack web developer with a strong interest in building modern, reliable, and high-performing digital products. I specialize in the MERN stack and enjoy transforming ideas into clean, efficient web experiences.
                </p>
                <p>
                  My focus is on practical problem-solving, intuitive user interfaces, and scalable application architecture. I like building systems that are not only functional but also thoughtful, maintainable, and enjoyable to use.
                </p>
              </div>

              <div className="mini-stats reveal">
                <div className="stat-box">
                  <span className="stat-number">MERN</span>
                  <span className="stat-label">Core Stack</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">CS</span>
                  <span className="stat-label">Student</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">UX</span>
                  <span className="stat-label">Driven</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Skills</p>
              <h3>Tools and technologies I use to build quality experiences.</h3>
            </div>

            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.title} className="skill-card reveal">
                  <h4>{group.title}</h4>
                  <div className="badge-list">
                    {group.items.map((item) => (
                      <span key={item} className="skill-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Projects</p>
              <h3>Selected work built with practical, scalable ideas.</h3>
            </div>

            <div className="filter-row reveal" aria-label="Project filters">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.title} className="project-card reveal">
                  <div className="project-visual">
                    <span>{project.category}</span>
                  </div>

                  <div className="project-body">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>

                    <div className="tech-stack">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={project.live} className="primary-btn small-btn">
                        Live Demo
                      </a>
                      <a href={project.code} target="_blank" rel="noreferrer" className="secondary-btn small-btn">
                        Source Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section alt-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Experience &amp; Education</p>
              <h3>Key milestones in my path as a developer.</h3>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.title} className="timeline-item reveal">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span>{item.period}</span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">Contact</p>
              <h3>Let&apos;s build something meaningful.</h3>
              <p>
                I&apos;m open to freelance opportunities, project collaborations, and exciting full-stack development work.
              </p>

              <ul className="contact-list">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:beya72412@gmail.com">beya72412@gmail.com</a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/beya72412-blip" target="_blank" rel="noreferrer">
                    github.com/beya72412-blip
                  </a>
                </li>
              </ul>

              <a href="/Beyene_Resume.txt" className="resume-link" download>
                Download Resume
              </a>
            </div>

            <form onSubmit={handleSubmit} className="contact-form reveal">
              <div className="input-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="Project inquiry"
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </label>

              <button type="submit" className="primary-btn submit-btn">
                Send Message
              </button>

              {statusMessage && <div className="toast">{statusMessage}</div>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2025 Beyene. Built with passion and code.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
































































