import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { signIn, configured } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    const res = await signIn(email, password)
    setBusy(false)
    if (res.error) {
      setError(res.error)
      return
    }
    navigate('/')
  }

  return (
    <section className="auth-page">
      <div className="wrap auth-wrap">
        <Reveal>
          <div className="auth-card">
            <span className="hero__eyebrow">Account</span>
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-sub">Log in to your Cortexa workspace.</p>

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
                  placeholder="Your password"
                  autoComplete="current-password"
                  required
                />
              </label>

              {error && <div className="auth-note auth-note--error">{error}</div>}

              <button type="submit" className="btn btn--primary btn--block" disabled={busy || !configured}>
                {busy ? 'Signing in…' : 'Log in'}
              </button>
            </form>

            <p className="auth-switch">
              New here? <Link to="/signup">Create an account</Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
