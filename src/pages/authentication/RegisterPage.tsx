import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { useRole } from '../../context/RoleContext'

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useRole()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [humanVerified, setHumanVerified] = useState(false)
  const [agreedTerms, setAgreedTerms] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [registered, setRegistered] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !email.includes('@') || !phone.trim() || password.length < 8) {
      setError('Please enter valid name, email, phone, and a password of at least 8 characters.')
      return
    }
    if (!humanVerified) {
      setError('Please complete the verification check before creating your account.')
      return
    }
    if (!agreedTerms) {
      setError('Please agree to the Terms & Conditions and Privacy Policy.')
      return
    }
    setError(null)
    login('Parent')
    setRegistered(true)
  }

  return (
    <MobileShell bottomPaddingClass="pb-8">
      <PublicHeader title="Create Account" backTo="/login" showSignIn={false} />

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {registered ? (
          <section className="bg-surface rounded-xl p-gutter-lg border border-outline-variant shadow-sm text-center flex flex-col items-center gap-gutter-sm">
            <div className="w-14 h-14 rounded-full bg-success-container text-on-success-container flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
            </div>
            <h2 className="font-headline text-headline-md text-primary">
              Parent Account Created
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              Welcome, {fullName}. You can now continue to enroll a student or open your Parent
              Portal.
            </p>
            <div className="w-full grid grid-cols-2 gap-gutter-sm mt-2">
              <Link
                to="/enroll"
                className="min-h-[44px] inline-flex items-center justify-center rounded-md bg-secondary text-on-secondary font-body text-label-lg"
              >
                Enroll Student
              </Link>
              <button
                type="button"
                onClick={() => navigate('/parent')}
                className="min-h-[44px] rounded-md bg-primary text-on-primary font-body text-label-lg"
              >
                Go to Portal
              </button>
            </div>
          </section>
        ) : (
          <form
            onSubmit={handleRegister}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-md"
          >
            <div>
              <h2 className="font-headline text-headline-md text-primary">Parent Self-Signup</h2>
              <p className="font-body text-body-sm text-on-surface-variant">
                Create a family account to register students for Yantra Robotics Academy classes.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-md bg-error-container text-on-error-container font-body text-body-sm">
                {error}
              </div>
            )}

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Parent Full Name *</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Anjali Sharma"
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Email Address *</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@example.com"
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Mobile Phone *</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(201) 673-2418"
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">
                Password (min 8 characters) *
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            {/* Verification Check Box */}
            <label className="p-3 rounded-md bg-background border border-outline flex items-center justify-between cursor-pointer">
              <span className="inline-flex items-center gap-2 font-body text-body-sm text-on-surface">
                <input
                  type="checkbox"
                  checked={humanVerified}
                  onChange={(e) => setHumanVerified(e.target.checked)}
                  className="rounded-sm text-primary"
                />
                <span>I am not a robot (reCAPTCHA check)</span>
              </span>
              <ShieldCheck className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="mt-1 rounded-sm text-primary"
              />
              <span className="font-body text-body-sm text-on-surface-variant">
                I agree to the{' '}
                <Link to="/page/terms" className="text-secondary underline">
                  Terms &amp; Conditions
                </Link>{' '}
                and{' '}
                <Link to="/page/privacy" className="text-secondary underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              className="w-full min-h-[44px] rounded-md bg-primary text-on-primary font-body text-label-lg hover:bg-secondary"
            >
              Create Parent Account
            </button>
          </form>
        )}
      </main>
    </MobileShell>
  )
}
