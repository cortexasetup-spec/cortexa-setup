import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

type AuthState = {
  session: Session | null
  user: User | null
  loading: boolean
  configured: boolean
  signUp: (email: string, password: string) => Promise<{ error: string | null; needsConfirm: boolean }>
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    let active = true

    // Supabase signs the user in from the confirmation link. Cortexa wants the
    // user to log in manually after verifying, so drop that session and send
    // them to the login page with a notice.
    const hash = window.location.hash || ''
    const search = window.location.search || ''
    const justConfirmed =
      /(^|[#&?])type=signup/.test(hash) || /(^|[?&])type=signup/.test(search)

    if (justConfirmed) {
      supabase.auth
        .signOut()
        .catch(() => undefined)
        .finally(() => {
          window.location.replace('/login?verified=1')
        })
      return () => {
        active = false
      }
    }

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return
      setSession(data.session)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next)
    })

    return () => {
      active = false
      listener.subscription.unsubscribe()
    }
  }, [])

  const signUp = async (email: string, password: string) => {
    if (!supabase) return { error: 'Supabase is not configured', needsConfirm: false }
    const { data, error } = await supabase.auth.signUp({ email, password })
    return {
      error: error?.message ?? null,
      needsConfirm: Boolean(data.user && !data.session),
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: 'Supabase is not configured' }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error?.message ?? null }
  }

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        loading,
        configured: isSupabaseConfigured,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
