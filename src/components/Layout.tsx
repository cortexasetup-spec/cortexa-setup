import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import cortexaLogo from '../assets/Logo.png'
import { MoonIcon, SunIcon } from './Icons'
import { useAuth } from '../context/AuthContext'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

type Theme = 'dark' | 'light'
const THEME_KEY = 'cortexa-site-theme'

function getInitialTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const location = useLocation()
  const { user, signOut } = useAuth()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="accent-strip" aria-hidden />
        <div className="wrap site-header__inner">
          <Link to="/" className="brand">
            <img src={cortexaLogo} alt="Cortexa AI" className="brand__logo" />
            <span className="brand__name">Cortexa AI</span>
          </Link>

          <div className="header-right">
            <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}>
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                >
                  {n.label}
                </NavLink>
              ))}
              {user ? (
                <button
                  type="button"
                  className="site-nav__link nav-logout"
                  onClick={() => {
                    void signOut()
                    setMenuOpen(false)
                  }}
                >
                  Log out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                >
                  Log in
                </NavLink>
              )}
            </nav>

            <button
              type="button"
              className="theme-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              type="button"
              className={`site-nav__toggle${menuOpen ? ' is-open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main key={location.pathname} className="page">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer__inner">
          <div className="site-footer__brand">
            <img src={cortexaLogo} alt="Cortexa AI" className="site-footer__logo" />
            <span>Cortexa AI</span>
          </div>
          <div className="site-footer__copy">
            &copy; {new Date().getFullYear()} Cortexa. Optimizing life&rsquo;s tasks.
          </div>
        </div>
      </footer>
    </>
  )
}
