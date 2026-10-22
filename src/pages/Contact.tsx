import { useState, type FC, type FormEvent } from 'react'
import Reveal from '../components/Reveal'
import { EMAIL, SOCIALS } from '../data'
import { FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, TikTokIcon } from '../components/Icons'

const ICONS: Record<string, FC> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  LinkedIn: LinkedInIcon,
}

export default function Contact() {
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry${name ? ` — ${name}` : ''}`)
    const body = encodeURIComponent(`${message}\n\n—\n${name}${from ? `\nReply to: ${from}` : ''}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="hero__eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-hero__title">
              Let&rsquo;s build something that <span>performs</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-hero__sub">
              Tell us about your business and the tasks you want off your plate. We&rsquo;ll get back to you
              quickly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <form className="contact-form" onSubmit={submit}>
                <h2 className="contact-form__title">Send a message</h2>
                <label className="field">
                  <span>Your name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name or company"
                    required
                  />
                </label>
                <label className="field">
                  <span>Your email</span>
                  <input
                    type="email"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="field">
                  <span>Message</span>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What would you like help with?"
                    required
                  />
                </label>
                <div className="form-actions">
                  <button type="submit" className="btn btn--primary">
                    Send message
                  </button>
                  <a
                    className="icon-btn icon-btn--mail icon-btn--lg"
                    href={`mailto:${EMAIL}`}
                    aria-label="Email us directly"
                    title="Email us directly"
                  >
                    <MailIcon />
                  </a>
                </div>
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="contact-side">
                <div className="contact-side__card">
                  <h3 className="contact-side__h">Follow us</h3>
                  <p className="contact-side__p">Find Cortexa on your favourite platform.</p>
                  <div className="icon-row">
                    {SOCIALS.map(({ label, href, cls }) => {
                      const Icon = ICONS[label]
                      return (
                        <a
                          key={label}
                          className={`icon-btn ${cls}`}
                          href={href}
                          aria-label={label}
                          title={label}
                          target={href === '#' ? undefined : '_blank'}
                          rel={href === '#' ? undefined : 'noopener noreferrer'}
                        >
                          {Icon ? <Icon /> : null}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
