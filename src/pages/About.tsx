import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { ArrowIcon } from '../components/Icons'
import { VALUES } from '../data'

const STATS = [
  { v: '24/7', l: 'Async support' },
  { v: '100%', l: 'Documented process' },
  { v: 'AI + Human', l: 'Working together' },
  { v: 'Fast', l: 'Rollout mindset' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="hero__eyebrow">About Cortexa</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-hero__title">
              A digital experience built for <span>performance</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-hero__sub">
              We combine trained remote assistants with AI automation to deliver consistent, reliable results for
              growing businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="about">
            <Reveal>
              <h2 className="about__title">Our mission</h2>
              <p className="about__p">
                Cortexa is an AI services company focused on optimizing the tasks that slow businesses down. We
                believe automation should feel personal &mdash; not cold &mdash; so every workflow we build is
                guided by clear communication and real accountability.
              </p>
              <p className="about__p">
                Our mission is simple: provide a personal experience in every prompt, and guide the future with
                every thread. Unique, motivated, dedicated and attentive &mdash; always finding the next
                opportunity, technique and trend.
              </p>
              <Link to="/services" className="btn btn--ghost about__cta">
                See our services <ArrowIcon />
              </Link>
            </Reveal>
            <div className="values">
              {VALUES.map((v, i) => (
                <Reveal key={v.n} delay={i * 90}>
                  <div className="value">
                    <div className="value__n">{v.n}</div>
                    <p className="value__t">{v.t}</p>
                    <p className="value__d">{v.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <Reveal className="section__head">
            <span className="section__eyebrow">At a glance</span>
            <h2 className="section__title">
              How we <span>operate</span>
            </h2>
          </Reveal>
          <div className="grid grid--4">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="stat">
                  <div className="stat__v">{s.v}</div>
                  <div className="stat__l">{s.l}</div>
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
                <h2 className="cta-band__title">Let&rsquo;s work together</h2>
                <p className="cta-band__p">Tell us about your business and where you want to save time.</p>
              </div>
              <Link to="/contact" className="btn btn--primary">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
