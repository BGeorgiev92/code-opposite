import { useEffect, useState } from 'react'
import logo from '/logo-with-text.svg'

const services = [
  {
    icon: '🌐',
    title: 'Web Applications',
    body: 'Fast, scalable web platforms and dashboards built with modern frameworks and a focus on performance.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    body: 'Native and cross-platform iOS and Android apps designed around your users and your workflows.',
  },
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    body: 'Robust services, REST and GraphQL APIs, and event-driven systems engineered to handle real load.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    body: 'Infrastructure as code, CI/CD pipelines, and cloud architecture that scales cleanly and predictably.',
  },
  {
    icon: '🤖',
    title: 'AI & Data',
    body: 'Custom AI features, data pipelines, and analytics that turn your data into a competitive advantage.',
  },
  {
    icon: '🔗',
    title: 'Integrations',
    body: 'Connect the tools you already use — payments, CRMs, ERPs, and third-party services — seamlessly.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Discover',
    body: 'We start by understanding your business, your users, and the exact criteria your software must meet.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'We shape an architecture and experience tailored to those criteria — no off-the-shelf compromises.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'We develop in tight iterations, shipping working software you can review and steer at every step.',
  },
  {
    number: '04',
    title: 'Deliver & Support',
    body: 'We launch, monitor, and keep improving — your system grows with your business, not against it.',
  },
]

const stats = [
  { value: '100%', label: 'Custom-built solutions' },
  { value: '6+', label: 'Software domains covered' },
  { value: '24/7', label: 'Monitoring & support' },
  { value: '∞', label: 'Ways to tailor your system' },
]

const techStack = [
  'React', 'Node.js', 'TypeScript', 'Python', 'Go', 'PostgreSQL',
  'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'React Native', 'Rust',
]

// Reveal-on-scroll: adds .is-visible to any [data-reveal] element as it enters the viewport.
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Homepage() {
  useScrollReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page">
      <header className="nav">
        <a href="#top" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Code Opposite logo" className="logo-img" />
        </a>
        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow" data-reveal>Custom software, built your way</span>
            <h1 data-reveal>
              We build <span className="grad">every kind of software</span> — by
              your criteria.
            </h1>
            <p data-reveal>
              CodeOpposite designs and engineers software systems of all types —
              web, mobile, backend, cloud, and AI — each one tailored to the
              exact requirements, constraints, and goals of your business. No
              templates, no compromises. Just the right system, built the
              opposite way: around you.
            </p>
            <div className="cta" data-reveal>
              <a className="btn primary" href="#contact">Start your project</a>
              <a className="btn ghost" href="#services">Explore services</a>
            </div>
          </div>
          <div className="hero-art" data-reveal>
            <img
              src="/hero-illustration.svg"
              alt="Desktop dashboard and mobile app built by CodeOpposite"
            />
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Technologies we work with">
          <div className="marquee">
            <div className="marquee-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <span className="chip" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-head" data-reveal>
            <h2>Software systems of every type</h2>
            <p>
              Whatever you need built, we cover it end to end — and we tailor
              each system to your custom criteria.
            </p>
          </div>
          <div className="services">
            {services.map((s, i) => (
              <article
                className="card"
                key={s.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section process">
          <div className="section-head" data-reveal>
            <h2>How we build by your criteria</h2>
            <p>
              A clear, collaborative process that keeps your requirements at the
              center from first call to final delivery.
            </p>
          </div>
          <div className="steps">
            {steps.map((step, i) => (
              <article
                className="step"
                key={step.number}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stats" data-reveal>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section about">
          <div className="section-head" data-reveal>
            <h2>Why CodeOpposite</h2>
          </div>
          <div className="about-grid">
            <p data-reveal>
              Most software is shaped by the tools that build it. We flip that
              around. We start from <strong>your</strong> criteria — your users,
              your constraints, your goals — and engineer the system that fits
              them precisely. That is what building "the opposite way" means.
            </p>
            <p data-reveal style={{ transitionDelay: '120ms' }}>
              From a single internal tool to a full product platform, our team
              brings deep engineering across web, mobile, cloud, and AI. You get
              software that is reliable, maintainable, and genuinely yours —
              ready to grow as your business does.
            </p>
          </div>
          <div className="cta center" data-reveal>
            <a className="btn primary" href="#contact">Let's build it together</a>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Code Opposite logo" className="footer-logo" />
            <p>
              Custom software systems of every type — engineered around your
              exact criteria.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Web Applications</a>
            <a href="#services">Mobile Apps</a>
            <a href="#services">Backend &amp; APIs</a>
            <a href="#services">Cloud &amp; DevOps</a>
            <a href="#services">AI &amp; Data</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>
            <a href="mailto:info@codeopposite.com">info@codeopposite.com</a>
            <a href="tel:+359885727910">+359 885 727 910</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CodeOpposite. All rights reserved.</p>
          <p>Built the opposite way — around you.</p>
        </div>
      </footer>
    </div>
  )
}
