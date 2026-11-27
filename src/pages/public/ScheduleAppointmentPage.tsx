import React, { useState } from 'react'
import { CheckCircle2, CalendarCheck } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { ACADEMY_LOCATIONS, COURSE_PROGRAMS } from '../../services/academyData'

export const ScheduleAppointmentPage: React.FC = () => {
  const [parentName, setParentName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [campus, setCampus] = useState(ACADEMY_LOCATIONS[0].name)
  const [program, setProgram] = useState(COURSE_PROGRAMS[0].title)
  const [preferredDate, setPreferredDate] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!parentName.trim() || !email.trim() || !phone.trim() || !preferredDate) {
      setError('Please complete all required appointment fields.')
      return
    }
    setError(null)
    setSubmitted(true)
  }

  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title="Book Appointment" backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        {submitted ? (
          <section className="bg-surface rounded-xl p-gutter-lg border border-outline-variant shadow-sm text-center flex flex-col items-center gap-gutter-sm">
            <div className="w-14 h-14 rounded-full bg-success-container text-on-success-container flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
            </div>
            <h2 className="font-headline text-headline-md text-primary">
              Appointment Request Received
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              Thank you, {parentName}. Our coordinator will confirm your {program} trial session at{' '}
              {campus} for {preferredDate}.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-2 min-h-[44px] px-5 py-2 rounded-md bg-secondary text-on-secondary font-body text-label-lg"
            >
              Book Another Appointment
            </button>
          </section>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-md"
          >
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-primary" aria-hidden="true" />
              <h2 className="font-headline text-headline-md text-primary">
                Schedule a Trial Class or Tour
              </h2>
            </div>

            {error && (
              <div className="p-3 rounded-md bg-error-container text-on-error-container font-body text-body-sm">
                {error}
              </div>
            )}

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Parent / Guardian Name *</span>
              <input
                type="text"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Full name"
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <div className="grid grid-cols-2 gap-gutter-sm">
              <label className="flex flex-col gap-gutter-xs">
                <span className="font-body text-label-md text-on-surface">Email *</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
                />
              </label>
              <label className="flex flex-col gap-gutter-xs">
                <span className="font-body text-label-md text-on-surface">Phone *</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
                />
              </label>
            </div>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Preferred Campus</span>
              <select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              >
                {ACADEMY_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Program of Interest</span>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              >
                {COURSE_PROGRAMS.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.ageRange})
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Preferred Date *</span>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="min-h-[44px] px-3 rounded-md bg-background border border-outline text-body-md"
              />
            </label>

            <button
              type="submit"
              className="w-full min-h-[44px] rounded-md bg-primary text-on-primary font-body text-label-lg hover:bg-secondary transition-colors duration-state-change"
            >
              Request Appointment
            </button>
          </form>
        )}
      </main>
    </MobileShell>
  )
}
