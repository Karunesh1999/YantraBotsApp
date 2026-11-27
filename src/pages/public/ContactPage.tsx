import React, { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { ACADEMY_LOCATIONS, OFFICIAL_CONTACT } from '../../services/academyData'

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please enter your name, email address, and message.')
      return
    }
    setError(null)
    setSent(true)
  }

  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title="Contact Us" backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        {/* Official Contact Channels */}
        <section className="grid grid-cols-1 gap-gutter-sm">
          <a
            href={`mailto:${OFFICIAL_CONTACT.email}`}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center gap-gutter-md hover:border-secondary"
          >
            <div className="w-10 h-10 rounded-full bg-primary-container text-primary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-body text-label-sm text-on-surface-variant block">
                Official Email
              </span>
              <span className="font-body text-title-md text-primary">{OFFICIAL_CONTACT.email}</span>
            </div>
          </a>

          <a
            href={`tel:${OFFICIAL_CONTACT.phone}`}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center gap-gutter-md hover:border-secondary"
          >
            <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-body text-label-sm text-on-surface-variant block">
                Academy Phone
              </span>
              <span className="font-mono text-title-md text-primary">{OFFICIAL_CONTACT.phone}</span>
            </div>
          </a>
        </section>

        {/* Contact Form */}
        {sent ? (
          <section className="bg-surface rounded-xl p-gutter-lg border border-outline-variant shadow-sm text-center flex flex-col items-center gap-gutter-sm">
            <div className="w-12 h-12 rounded-full bg-success-container text-on-success-container flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h2 className="font-headline text-headline-md text-primary">Message Sent</h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              Thank you, {name}. Our team at {OFFICIAL_CONTACT.email} will reply shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false)
                setMessage('')
              }}
              className="min-h-[44px] px-4 py-2 rounded-md bg-secondary text-on-secondary font-body text-label-lg"
            >
              Send Another Message
            </button>
          </section>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-md"
          >
            <h2 className="font-headline text-title-lg text-primary">Send Us a Message</h2>
            {error && (
              <div className="p-3 rounded-md bg-error-container text-on-error-container font-body text-body-sm">
                {error}
              </div>
            )}

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Your Name *</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Email Address *</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">How can we help? *</span>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Questions about classes, schedules, or enrollment..."
                className="p-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <button
              type="submit"
              className="w-full min-h-[44px] rounded-md bg-primary text-on-primary font-body text-label-lg hover:bg-secondary"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Campus Locations */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">Centers</h2>
          {ACADEMY_LOCATIONS.map((loc) => (
            <div key={loc.id} className="flex items-start gap-2 text-body-sm">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-body font-semibold text-on-surface">{loc.name}</span>
                <span className="block text-on-surface-variant">{loc.description}</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </MobileShell>
  )
}
