import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { ArrowIcon } from '../components/Icons'
import { SERVICES, VALUES } from '../data'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__orbs" aria-hidden>
          <span className="orb orb--1" />
          <span className="orb orb--2" />
          <span className="orb orb--3" />
        </div>
        <div className="wrap hero__inner">
          <Reveal>
            <span className="hero__eyebrow">AI Business Automation</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero__title">
              Optimizing life&rsquo;s tasks with a digital experience built for performance.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero__sub">
              Cortexa builds AI-powered assistants and automation for growing businesses &mdash; personal in
              every prompt, and guiding the future with every thread.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Start a conversation
              </Link>
              <Link to="/services" className="btn btn--ghost">
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <span className="section__eyebrow">What we do</span>
            <h2 className="section__title">
              Services built for <span>performance</span>
            </h2>
            <p className="section__lede">
              From virtual assistants to custom AI agents, we handle the operational work so your business keeps
              moving.
            </p>
          </Reveal>
          <div className="grid grid--3">
            {SERVICES.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <article className="card">
                  <span className="card__icon" aria-hidden>
                    {s.icon}
                  </span>
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__body">{s.body}</p>
                  <span className="card__sheen" aria-hidden />
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="section__foot">
              <Link to="/services" className="btn btn--ghost">
                See all services <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal className="section__head">
            <span className="section__eyebrow">Why Cortexa</span>
            <h2 className="section__title">
              Built on <span>four values</span>
            </h2>
          </Reveal>
          <div className="grid grid--4">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="value value--center">
                  <div className="value__n">{v.n}</div>
                  <p className="value__t">{v.t}</p>
                  <p className="value__d">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <div>
                <h2 className="cta-band__title">Ready to get tasks off your plate?</h2>
                <p className="cta-band__p">
                  Tell us what slows you down and we&rsquo;ll suggest the right mix of assistants, automation and
                  agents.
                </p>
              </div>
              <Link to="/contact" className="btn btn--primary">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
