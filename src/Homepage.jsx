import { useEffect, useState } from 'react'
import logo from '/logo-with-text.svg'
import { translations } from './translations'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykqywov'

// Language-independent bits, zipped with the translated arrays by index.
const serviceIcons = ['🌐', '📱', '⚙️', '☁️', '🤖', '🔗']
const stepNumbers = ['01', '02', '03', '04', '05', '06']
const statValues = ['100%', '6+', '24/7', '9+', '∞']
const companyHrefs = ['#about', '#process', '#services', '#contact']

const techStack = [
  'React', 'Node.js', 'TypeScript', 'Python', 'Go', 'PostgreSQL',
  'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'React Native', 'Rust',
  'MySQL', 'MongoDB', 'Kafka', 'Redis', 'JavaScript', 'Java', 'Blockchain',
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

// Persisted language state. English is the default.
function useLanguage() {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('lang')
      if (saved === 'en' || saved === 'bg') return saved
    }
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore storage errors */
    }
  }, [lang])

  return [lang, setLang]
}

// Contact form — submits to Formspree via AJAX so the visitor stays on the page.
function ContactForm({ t }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-head" data-reveal>
        <h2>{t.contact.heading}</h2>
        <p>{t.contact.sub}</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} data-reveal>
        <div className="field">
          <label htmlFor="cf-name">{t.contact.name}</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder={t.contact.namePlaceholder}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">{t.contact.email}</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder={t.contact.emailPlaceholder}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-message">{t.contact.message}</label>
          <textarea
            id="cf-message"
            name="message"
            rows="5"
            required
            placeholder={t.contact.messagePlaceholder}
          />
        </div>
        {/* honeypot — hidden from users, catches bots */}
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          className="hp"
          aria-hidden="true"
        />
        <button type="submit" className="btn primary" disabled={status === 'sending'}>
          {status === 'sending' ? t.contact.sending : t.contact.submit}
        </button>
        {status === 'success' && (
          <p className="form-msg success" role="status">{t.contact.success}</p>
        )}
        {status === 'error' && (
          <p className="form-msg error" role="alert">{t.contact.error}</p>
        )}
      </form>
    </section>
  )
}

export default function Homepage() {
  useScrollReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useLanguage()
  const t = translations[lang]
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
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
            <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
            <a href="#process" onClick={closeMenu}>{t.nav.process}</a>
            <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
            <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
              <button
                className={lang === 'bg' ? 'active' : ''}
                onClick={() => setLang('bg')}
                aria-pressed={lang === 'bg'}
              >
                BG
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="page">
        <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow" data-reveal>{t.hero.eyebrow}</span>
            <h1 data-reveal>
              {t.hero.h1pre}
              <span className="grad">{t.hero.h1mid}</span>
              {t.hero.h1post}
            </h1>
            <p data-reveal>{t.hero.p}</p>
            <div className="cta" data-reveal>
              <a className="btn primary" href="#contact">{t.hero.ctaPrimary}</a>
              <a className="btn ghost" href="#services">{t.hero.ctaSecondary}</a>
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
            <h2>{t.servicesSection.heading}</h2>
            <p>{t.servicesSection.sub}</p>
          </div>
          <div className="services">
            {t.services.map((s, i) => (
              <article
                className="card"
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="card-icon">{serviceIcons[i]}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section process">
          <div className="section-head" data-reveal>
            <h2>{t.processSection.heading}</h2>
            <p>{t.processSection.sub}</p>
          </div>
          <div className="steps">
            {t.steps.map((step, i) => (
              <article
                className="step"
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="step-number">{stepNumbers[i]}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stats" data-reveal>
          {t.stats.map((label, i) => (
            <div className="stat" key={i}>
              <span className="stat-value">{statValues[i]}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section about">
          <div className="section-head" data-reveal>
            <h2>{t.aboutSection.heading}</h2>
          </div>
          <div className="about-grid">
            <p data-reveal>
              {t.about.p1pre}
              <strong>{t.about.p1strong}</strong>
              {t.about.p1post}
            </p>
            <p data-reveal style={{ transitionDelay: '120ms' }}>
              {t.about.p2}
            </p>
          </div>
          <div className="cta center" data-reveal>
            <a className="btn primary" href="#contact">{t.about.cta}</a>
          </div>
        </section>

        <ContactForm t={t} />
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Code Opposite logo" className="footer-logo" />
            <p>{t.footer.brandText}</p>
          </div>

          <div className="footer-col">
            <h4>{t.footer.servicesTitle}</h4>
            {t.footer.services.map((label, i) => (
              <a href="#services" key={i}>{label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t.footer.companyTitle}</h4>
            {t.footer.company.map((label, i) => (
              <a href={companyHrefs[i]} key={i}>{label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            <a href="mailto:info@codeopposite.com">info@codeopposite.com</a>
            <a href="tel:+359885727910">+359 885 727 910</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </footer>
      </div>
    </>
  )
}
