import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { ArrowIcon } from '../components/Icons'
import { SERVICES, STEPS } from '../data'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="hero__eyebrow">Services</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-hero__title">
              Everything you need to <span>run lean</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-hero__sub">
              Six ways we take operational weight off your team &mdash; built with AI, delivered with care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <article className="card card--tall">
                  <span className="card__icon" aria-hidden>
                    {s.icon}
                  </span>
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__body">{s.body}</p>
                  <ul className="card__list">
                    {s.points.map((p) => (
                      <li key={p}>
                        <span aria-hidden>✓</span> {p}
                      </li>
                    ))}
                  </ul>
                  <span className="card__sheen" aria-hidden />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--alt">
        <div className="wrap">
          <Reveal className="section__head">
            <span className="section__eyebrow">How it works</span>
            <h2 className="section__title">
              A simple <span>four-step</span> process
            </h2>
          </Reveal>
          <div className="grid grid--4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="step">
                  <span className="step__n">{s.n}</span>
                  <h3 className="step__t">{s.t}</h3>
                  <p className="step__d">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <div>
                <h2 className="cta-band__title">Not sure which service fits?</h2>
                <p className="cta-band__p">
                  Send us a short note and we&rsquo;ll recommend the right starting point.
                </p>
              </div>
              <Link to="/contact" className="btn btn--primary">
                Ask us <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
