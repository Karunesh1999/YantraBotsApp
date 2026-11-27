import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle2 } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { OFFICIAL_CONTACT } from '../../services/academyData'

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSent(true)
  }

  return (
    <MobileShell bottomPaddingClass="pb-8">
      <PublicHeader title="Reset Password" backTo="/login" showSignIn={false} />

      <main className="px-page-margin pt-gutter-lg flex flex-col gap-gutter-md">
        {sent ? (
          <section className="bg-surface rounded-xl p-gutter-lg border border-outline-variant shadow-sm text-center flex flex-col items-center gap-gutter-sm">
            <div className="w-12 h-12 rounded-full bg-success-container text-on-success-container flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h2 className="font-headline text-headline-md text-primary">Reset Link Dispatched</h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              If an account exists for <strong>{email}</strong>, password reset instructions have
              been sent. For provisioned Student/Instructor accounts, contact{' '}
              {OFFICIAL_CONTACT.email}.
            </p>
            <Link
              to="/login"
              className="mt-2 w-full min-h-[44px] inline-flex items-center justify-center rounded-md bg-primary text-on-primary font-body text-label-lg"
            >
              Return to Sign In
            </Link>
          </section>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-md"
          >
            <h2 className="font-headline text-headline-md text-primary">Forgot your password?</h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              Enter your registered Parent email address to receive a password reset link.
            </p>

            {error && (
              <div className="p-3 rounded-md bg-error-container text-on-error-container font-body text-body-sm">
                {error}
              </div>
            )}

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Email Address</span>
              <div className="relative flex items-center">
                <Mail
                  className="w-4 h-4 text-text-muted absolute left-3 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full min-h-[44px] pl-10 pr-3 rounded-md bg-background border border-outline text-body-md"
                />
              </div>
            </label>

            <button
              type="submit"
              className="w-full min-h-[44px] rounded-md bg-primary text-on-primary font-body text-label-lg hover:bg-secondary"
            >
              Send Reset Instructions
            </button>
          </form>
        )}
      </main>
    </MobileShell>
  )
}
