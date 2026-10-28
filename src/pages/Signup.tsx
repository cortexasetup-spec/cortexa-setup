import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const { signUp, configured } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setDone('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setBusy(true)
    const res = await signUp(email, password)
    setBusy(false)

    if (res.error) {
      setError(res.error)
      return
    }
    if (res.needsConfirm) {
      setDone('Account created. Check your email to confirm, then log in.')
      return
    }
    setDone('Account created. You can log in now.')
  }

  return (
    <section className="auth-page">
      <div className="wrap auth-wrap">
        <Reveal>
          <div className="auth-card">
            <span className="hero__eyebrow">Get started</span>
            <h1 className="auth-title">Create your account</h1>
            <p className="auth-sub">Set up your Cortexa workspace.</p>

            {!configured && (
              <div className="auth-note auth-note--warn">
                Supabase is not configured yet. Add VITE_SUPABASE_URL and
                VITE_SUPABASE_ANON_KEY to your environment.
              </div>
            )}

            <form className="auth-form" onSubmit={submit}>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="field">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </label>
              <label className="field">
                <span>Confirm password</span>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </label>

              {error && <div className="auth-note auth-note--error">{error}</div>}
              {done && <div className="auth-note auth-note--ok">{done}</div>}

              <button type="submit" className="btn btn--primary btn--block" disabled={busy || !configured}>
                {busy ? 'Creating…' : 'Create account'}
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
