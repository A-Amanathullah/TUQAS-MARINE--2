import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import heroImage from './assets/ocen-harber-sunset-view.jpg'
import aboutImage from './assets/king-ship-on-darky-sky.jpg'
import charteringImage from './assets/big-ship-near-harber.jpg'
import salePurchaseImage from './assets/south-east-ship-view.jpg'
import consultancyImage from './assets/persian-gulf-conflict-shipping-impact-bunker-crisis-mn72e2fp.webp'
import globalReachImage from './assets/from top of ship - ocen view.jpg'
import contactImage from './assets/ship-sunrais-view.jpg'
import logoMark from './assets/logo r.svg'

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/chartering', label: 'Chartering' },
  { to: '/sale-purchase', label: 'Sale & Purchase' },
  { to: '/consultancy', label: 'Consultancy' },
  { to: '/global-reach', label: 'Global reach' },
  { to: '/contact', label: 'Contact' },
]

const highlights = [
  {
    title: 'Ship Chartering',
    text: 'Voyage, time, and bespoke charter solutions aligned with tonnage, route, and commercial timing.',
  },
  {
    title: 'Sale & Purchase',
    text: 'Brokerage support for owners and buyers seeking the right vessel at the right market moment.',
  },
  {
    title: 'Project Consultancy',
    text: 'Independent guidance for complex maritime projects, asset positioning, and strategic negotiations.',
  },
]

const reachStats = [
  { value: '24/7', label: 'Responsive brokerage desk' },
  { value: 'Worldwide', label: 'Routes, markets, and connections' },
  { value: '94%', label: 'Client retention from trusted service' },
]

const charterServices = [
  'Voyage chartering for spot cargo and immediate liftings',
  'Time charter consultancy for operators and commercial managers',
  'Tanker, bulker, and project cargo market positioning',
  'Fixture negotiation, documentation, and post-fixture follow-up',
]

const salePurchaseServices = [
  'Vessel sourcing and discreet buyer representation',
  'Price guidance, market comparisons, and valuation support',
  'Negotiation of heads of agreement and closing terms',
  'Owner-to-owner introductions for private, high-value transactions',
]

const consultancyServices = [
  'Commercial strategy for ship owners, charterers, and investors',
  'Project feasibility reviews across trade routes and vessel classes',
  'Market intelligence to support timing, entry, or exit decisions',
  'Ongoing advisory for long-term maritime growth plans',
]

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

function AppShell() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src={logoMark} alt="Tuqas Marine International Management Consultant" />
          <div>
            <p className="brand-kicker">Tuqas Marine International Management Consultant</p>
            <p className="brand-subtitle">Ship SL | Sale and Purchase | Charter | Project Consultant</p>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="nav-cta" href="tel:+97450101228">
          00974-50101228
        </a>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chartering" element={<CharteringPage />} />
          <Route path="/sale-purchase" element={<SalePurchasePage />} />
          <Route path="/consultancy" element={<ConsultancyPage />} />
          <Route path="/global-reach" element={<GlobalReachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <p className="footer-title">Tuqas Marine International Management Consultant</p>
          <p className="footer-copy">Premium maritime brokerage, chartering, and consultancy with a global outlook.</p>
        </div>

        <div className="footer-meta">
          <a href="mailto:info@tuqasmarine.com">info@tuqasmarine.com</a>
          <a href="tel:+97450101228">00974-50101228</a>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero hero-home" style={{ backgroundImage: `linear-gradient(180deg, rgba(4, 9, 20, 0.2), rgba(4, 9, 20, 0.88)), url(${heroImage})` }}>
        <div className="hero-content hero-content-home">
          <p className="eyebrow">Premium / Luxury Maritime</p>
          <h1>Connecting Opportunities Across the Maritime World</h1>
          <p className="hero-lead">
            Ship Chartering | Sale &amp; Purchase | Project Consultancy
          </p>
          <p className="hero-copy">
            Tuqas Marine International Management Consultant supports owners, operators, buyers, and charterers with
            discreet brokerage, informed market intelligence, and elegant execution.
          </p>

          <div className="hero-actions">
            <NavLink className="button button-primary" to="/contact">
              Start a conversation
            </NavLink>
            <NavLink className="button button-secondary" to="/global-reach">
              Explore global reach
            </NavLink>
          </div>

          <div className="hero-stats">
            {reachStats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-intro">
        <SectionHeading
          kicker="Trusted maritime desk"
          title="A brokerage presence shaped for high-value shipping decisions"
          text="The company blends international market awareness with a calm, premium presentation designed for serious marine business."
        />

        <div className="card-grid card-grid-3">
          {highlights.map((item) => (
            <article key={item.title} className="info-card">
              <span className="gold-line" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-band-text">
          <p className="eyebrow">Global chartering intelligence</p>
          <h2>Strategic support for owners and decision makers across the maritime cycle</h2>
          <p>
            From first market scan to final fixture or closing, the focus stays on clarity, discretion, and
            commercially sound outcomes.
          </p>
        </div>

        <img className="feature-image" src={globalReachImage} alt="View over the sea from the top of a ship" />
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <PageBanner
      image={aboutImage}
      kicker="About the company"
      title="A focused maritime consultancy with an international mindset"
      text="Tuqas Marine International Management Consultant represents a polished approach to ship brokerage, chartering, and project advisory."
    >
      <div className="section two-column">
        <div>
          <h2>Our role</h2>
          <p>
            We connect the right counterparties, help frame the right commercial position, and maintain a clear path
            through negotiations. That includes asset introductions, market review, and project-level guidance.
          </p>
          <p>
            The brand is intentionally restrained, premium, and international in tone, suitable for serious marine
            business.
          </p>
        </div>

        <div className="quote-panel">
          <p className="quote-mark">“</p>
          <p>
            The value lies in market judgment, trusted relationships, and precise execution across every maritime
            conversation.
          </p>
        </div>
      </div>
    </PageBanner>
  )
}

function CharteringPage() {
  return (
    <PageBanner
      image={charteringImage}
      kicker="Chartering"
      title="Chartering solutions built around timing, tonnage, and trade"
      text="The chartering desk supports voyage and time charter requirements with measured advice and clear communication."
    >
      <ServiceDetailList items={charterServices} />
    </PageBanner>
  )
}

function SalePurchasePage() {
  return (
    <PageBanner
      image={salePurchaseImage}
      kicker="Sale & Purchase"
      title="Discreet vessel transactions handled with commercial discipline"
      text="A premium brokerage presentation for buyers and sellers seeking trust, privacy, and market-aware negotiation."
    >
      <ServiceDetailList items={salePurchaseServices} />
    </PageBanner>
  )
}

function ConsultancyPage() {
  return (
    <PageBanner
      image={consultancyImage}
      kicker="Consultancy"
      title="Project consultancy for complex maritime decisions"
      text="Independent advice for owners, investors, and operators planning moves in dynamic shipping markets."
    >
      <div className="section two-column">
        <ServiceDetailList items={consultancyServices} />
        <div className="feature-note">
          <h2>Why it matters</h2>
          <p>
            Better decisions come from better framing. The consultancy service helps shape those decisions before they
            become costly.
          </p>
        </div>
      </div>
    </PageBanner>
  )
}

function GlobalReachPage() {
  return (
    <PageBanner
      image={globalReachImage}
      kicker="Global reach"
      title="Relationships and visibility across key maritime corridors"
      text="The company is positioned for international engagement, with a visual language that feels polished and assured."
    >
      <div className="section">
        <div className="map-grid">
          {['Middle East', 'Europe', 'Asia', 'Africa', 'Americas', 'Cross-trade'].map((region) => (
            <article key={region} className="region-card">
              <span />
              <h3>{region}</h3>
              <p>Brokerage support and market awareness for international shipping conversations.</p>
            </article>
          ))}
        </div>
      </div>
    </PageBanner>
  )
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageBanner
      image={contactImage}
      kicker="Contact"
      title="Speak with the marine desk"
      text="Share your charter, sale, or consultancy inquiry and the team will respond with discretion and care."
    >
      <div className="section contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="your@email.com"
              required
            />
          </label>

          <label>
            <span>Message / Inquiry</span>
            <textarea
              rows="6"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="Tell us about your vessel, route, timing, or project requirement"
              required
            />
          </label>

          <button className="button button-primary" type="submit">
            Send inquiry
          </button>

          {submitted ? <p className="form-note">Your inquiry is ready to be followed up by the marine team.</p> : null}
        </form>

        <aside className="contact-card">
          <h2>Direct contact</h2>
          <p>Phone: 00974-50101228</p>
          <p>Email: info@tuqasmarine.com</p>
          <p>Response style: professional, discreet, and commercial.</p>
        </aside>
      </div>
    </PageBanner>
  )
}

function PageBanner({ image, kicker, title, text, children }) {
  return (
    <div className="page">
      <section className="page-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(4, 9, 20, 0.18), rgba(4, 9, 20, 0.9)), url(${image})` }}>
        <div className="page-hero-copy">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </section>

      {children}
    </div>
  )
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function ServiceDetailList({ items }) {
  return (
    <div className="service-grid">
      {items.map((item) => (
        <article className="service-card" key={item}>
          <span className="service-dot" />
          <p>{item}</p>
        </article>
      ))}
    </div>
  )
}

export default App
