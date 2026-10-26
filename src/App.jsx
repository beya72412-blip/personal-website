:root {
  --bg: #08111d;
  --bg-secondary: #101d2c;
  --panel: rgba(15, 24, 37, 0.88);
  --panel-strong: #111d2d;
  --text: #ecf3ff;
  --muted: #a9b9d3;
  --line: rgba(148, 163, 184, 0.18);
  --primary: #38bdf8;
  --primary-strong: #22d3ee;
  --accent: #34d399;
  --shadow: rgba(15, 23, 42, 0.6);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.2), transparent 35%),
    radial-gradient(circle at bottom right, rgba(52, 211, 153, 0.17), transparent 25%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.alt-section {
  background: rgba(10, 17, 27, 0.78);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  display: inline-block;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary-strong);
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-heading {
  margin-bottom: 2rem;
  max-width: 640px;
}

.section-heading h3 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(8, 17, 29, 0.72);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.7rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #07111c;
  font-weight: 900;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--muted);
}

.main-nav a {
  position: relative;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.main-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: transform 0.2s ease;
}

.main-nav a:hover {
  color: var(--text);
}

.main-nav a:hover::after {
  transform: scaleX(1);
}

.nav-button,
.primary-btn,
.secondary-btn,
.filter-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.nav-button,
.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #03131d;
  box-shadow: 0 12px 30px rgba(52, 211, 153, 0.18);
}

.secondary-btn {
  border-color: rgba(148, 163, 184, 0.2);
  background: rgba(15, 24, 37, 0.7);
  color: var(--text);
}

.nav-button:hover,
.primary-btn:hover,
.secondary-btn:hover,
.filter-btn:hover {
  transform: translateY(-2px);
}

.hero {
  padding: 5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 3rem;
}

.hero-copy h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
  margin-bottom: 1.1rem;
}

.hero-copy h1 span {
  color: var(--primary-strong);
}

.hero-copy h2 {
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  min-height: 3.2rem;
  color: #dcebf9;
  margin-bottom: 1.2rem;
}

.typing-text {
  color: #dcebf9;
}

.cursor {
  display: inline-block;
  color: var(--primary-strong);
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-description {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
  margin-bottom: 2rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.8rem;
}

.social-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: rgba(15, 24, 37, 0.8);
  border: 1px solid var(--line);
  color: var(--muted);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.social-pill:hover {
  border-color: rgba(56, 189, 248, 0.4);
  transform: translateY(-2px);
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.profile-card {
  position: relative;
  width: min(100%, 420px);
  padding: 2rem;
  border-radius: 2rem;
  background: linear-gradient(150deg, rgba(15, 24, 37, 0.9), rgba(12, 18, 26, 0.92));
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.profile-glow {
  position: absolute;
  inset: 10% 18% auto auto;
  width: 160px;
  height: 160px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.35), transparent 60%);
  filter: blur(20px);
}

.avatar-shell {
  position: relative;
  display: grid;
  place-items: center;
  width: 180px;
  height: 180px;
  margin: 0 auto 1.75rem;
  border-radius: 2rem;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(52, 211, 153, 0.14));
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.avatar-text {
  font-size: 4rem;
  font-weight: 800;
  color: var(--primary-strong);
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  text-align: center;
}

.profile-stats div {
  padding: 1rem 0.75rem;
  border-radius: 1rem;
  background: rgba(9, 16, 25, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.profile-stats strong {
  display: block;
  font-size: 1.4rem;
  margin-bottom: 0.25rem;
  color: var(--primary-strong);
}

.profile-stats span {
  font-size: 0.72rem;
  color: var(--muted);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
  align-items: stretch;
}

.about-card,
.skill-card,
.project-card,
.contact-form,
.stat-box {
  background: rgba(15, 24, 37, 0.85);
  border: 1px solid var(--line);
  border-radius: 1.4rem;
  box-shadow: 0 15px 45px rgba(2, 6, 23, 0.22);
}

.about-card {
  padding: 2rem;
}

.about-card p {
  color: var(--muted);
  font-size: 1.04rem;
}

.about-card p + p {
  margin-top: 1rem;
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 170px;
  padding: 1.5rem 1rem;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-strong);
}

.stat-label {
  color: var(--muted);
  margin-top: 0.45rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.4rem;
}

.skill-card {
  padding: 1.75rem 1.4rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.35);
}

.skill-card h4 {
  margin-bottom: 1rem;
  font-size: 1.15rem;
}

.badge-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.skill-badge,
.tech-stack span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.48rem 0.8rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.18);
  color: #dff7ff;
  font-size: 0.8rem;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.filter-btn {
  background: rgba(15, 24, 37, 0.7);
  border-color: rgba(148, 163, 184, 0.15);
  color: var(--muted);
  cursor: pointer;
}

.filter-btn.active {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(52, 211, 153, 0.14));
  border-color: rgba(56, 189, 248, 0.4);
  color: var(--text);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;
}

.project-card {
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.35);
}

.project-visual {
  display: flex;
  align-items: end;
  justify-content: flex-start;
  min-height: 170px;
  padding: 1.4rem;
  background:
    linear-gradient(145deg, rgba(56, 189, 248, 0.18), rgba(52, 211, 153, 0.2)),
    rgba(9, 16, 25, 0.98);
}

.project-visual span {
  display: inline-flex;
  padding: 0.45rem 0.8rem;
  background: rgba(7, 17, 28, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 999px;
  color: var(--text);
  font-size: 0.75rem;
  font-weight: 600;
}

.project-body {
  padding: 1.6rem;
}

.project-body h4 {
  font-size: 1.5rem;
  margin-bottom: 0.7rem;
}

.project-body p {
  color: var(--muted);
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-bottom: 1.3rem;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.small-btn {
  padding: 0.7rem 1rem;
  font-size: 0.88rem;
}

.timeline {
  position: relative;
  margin-left: 1rem;
  padding-left: 1.2rem;
  border-left: 2px solid rgba(56, 189, 248, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}

.timeline-dot {
  position: absolute;
  left: -1.8rem;
  top: 0.3rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.18);
}

.timeline-content {
  padding: 1.5rem 1.4rem;
  border-radius: 1.2rem;
  background: rgba(15, 24, 37, 0.7);
  border: 1px solid var(--line);
}

.timeline-content span {
  display: inline-block;
  color: var(--primary-strong);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.timeline-content p {
  color: var(--muted);
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
  align-items: start;
}

.contact-copy h3 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  letter-spacing: -0.04em;
  margin-bottom: 0.8rem;
}

.contact-copy p {
  color: var(--muted);
}

.contact-list {
  list-style: none;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: var(--text);
}

.contact-list a {
  color: var(--primary-strong);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 1.5rem;
}

.input-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.96rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 0.9rem;
  background: rgba(7, 17, 28, 0.9);
  color: var(--text);
  padding: 0.9rem 1rem;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: rgba(56, 189, 248, 0.6);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.12);
}

.submit-btn {
  border: none;
  cursor: pointer;
  width: fit-content;
}

.toast {
  padding: 0.9rem 1rem;
  border-radius: 0.8rem;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.32);
  color: #d2f8ea;
}

.site-footer {
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  padding: 1.5rem 0 2rem;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 950px) {
  .hero-grid,
  .about-grid,
  .contact-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .main-nav {
    display: none;
  }

  .nav-button {
    display: none;
  }

  .hero {
    padding-top: 4rem;
  }

  .hero-copy h1 {
    font-size: 2.7rem;
  }

  .cta-row,
  .social-row,
  .project-actions,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-stats,
  .mini-stats,
  .input-row {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
