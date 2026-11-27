import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, LogOut, ChevronRight, Plus, Lock } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { RoleBottomNav } from '../../components/navigation/RoleBottomNav'
import { useRole } from '../../context/RoleContext'
import { DEMO_STUDENTS } from '../../services/academyData'

export const FamilyProfilePage: React.FC = () => {
  const { homePath } = useRole()
  const [medRevealed, setMedRevealed] = useState(false)
  const aarav = DEMO_STUDENTS[0]
  const diya = DEMO_STUDENTS[1]

  return (
    <MobileShell>
      {/* Deep Navy Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to={homePath}
          aria-label="Back to home"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <h1 className="font-headline text-headline-md text-on-primary">My Family</h1>
        <Link
          to="/"
          aria-label="Switch role or logout"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <LogOut className="w-5 h-5" aria-hidden="true" />
        </Link>
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Parent Card */}
        <article className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center justify-between gap-gutter-sm">
          <div className="flex items-center gap-gutter-sm">
            <div className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline text-title-md">
              AS
            </div>
            <div>
              <h2 className="font-body text-title-md text-on-surface">Anjali Sharma (Parent)</h2>
              <p className="font-body text-body-sm text-on-surface-variant">
                (703) 555-0194 · Primary Account
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-on-surface-variant" aria-hidden="true" />
        </article>

        {/* Student Profiles */}
        <section className="flex flex-col gap-gutter-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-title-lg text-on-surface">Students</h2>
            <Link
              to="/enroll"
              className="inline-flex items-center gap-1 font-body text-label-md text-secondary"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              Add Student
            </Link>
          </div>

          {/* Student Card 1 */}
          <article className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
            <div className="flex items-start justify-between gap-gutter-sm">
              <div className="flex items-center gap-gutter-sm">
                <div className="w-11 h-11 rounded-full bg-primary-container text-primary flex items-center justify-center font-headline text-title-md">
                  {aarav.initials}
                </div>
                <div>
                  <h3 className="font-body text-title-md text-on-surface">{aarav.fullName}</h3>
                  <p className="font-body text-body-sm text-on-surface-variant">
                    Age {aarav.age} · {aarav.grade} · {aarav.school}
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
                {aarav.status}
              </span>
            </div>

            <div className="bg-background rounded-md p-gutter-sm flex flex-col gap-gutter-xs font-body text-body-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Program:</span>
                <span className="text-on-surface font-medium">{aarav.program}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Prior Experience:</span>
                <span className="text-on-surface">{aarav.experience}</span>
              </div>
            </div>

            {/* Private Medical / Emergency Notes */}
            <div className="flex items-center justify-between pt-gutter-xs border-t border-outline-variant">
              <div className="flex items-center gap-gutter-xs text-on-surface-variant font-body text-body-sm">
                <Lock className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                <span>
                  {medRevealed ? aarav.medicalNote : 'Medical/Emergency Notes: Private'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMedRevealed((prev) => !prev)}
                className="font-body text-label-md text-secondary shrink-0 ml-2"
              >
                {medRevealed ? 'Hide' : 'Reveal'}
              </button>
            </div>
          </article>

          {/* Student Card 2 */}
          <article className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center justify-between gap-gutter-sm">
            <div className="flex items-center gap-gutter-sm">
              <div className="w-11 h-11 rounded-full bg-secondary-container text-secondary flex items-center justify-center font-headline text-title-md">
                {diya.initials}
              </div>
              <div>
                <h3 className="font-body text-title-md text-on-surface">{diya.fullName}</h3>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Age {diya.age} · {diya.grade} · {diya.program}
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
              {diya.status}
            </span>
          </article>
        </section>

        {/* Authorized Pickups */}
        <section className="flex flex-col gap-gutter-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-title-lg text-on-surface">Authorized Pickups</h2>
            <Link to="/qr-pickup" className="font-body text-label-md text-secondary">
              QR Pass
            </Link>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant shadow-sm divide-y divide-outline-variant">
            <div className="p-gutter-md flex items-center justify-between">
              <div>
                <span className="font-body text-title-md text-on-surface block">
                  Anjali Sharma (Mother)
                </span>
                <span className="font-body text-body-sm text-on-surface-variant">
                  (703) 555-0194 · Verified ID
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
                Primary
              </span>
            </div>
            <div className="p-gutter-md flex items-center justify-between">
              <div>
                <span className="font-body text-title-md text-on-surface block">
                  Rohan Sharma (Father)
                </span>
                <span className="font-body text-body-sm text-on-surface-variant">
                  (703) 555-0148 · Verified ID
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-primary-container text-primary font-body text-label-sm">
                Authorized
              </span>
            </div>
          </div>
        </section>

        {/* Emergency Contacts & Settings */}
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm divide-y divide-outline-variant">
          <Link to="/payments" className="p-gutter-md flex items-center justify-between">
            <span className="font-body text-title-md text-on-surface">
              Payments &amp; Invoices
            </span>
            <ChevronRight className="w-5 h-5 text-on-surface-variant" aria-hidden="true" />
          </Link>
          <Link to="/messages" className="p-gutter-md flex items-center justify-between">
            <span className="font-body text-title-md text-on-surface">
              Academy Locations &amp; Help Center
            </span>
            <ChevronRight className="w-5 h-5 text-on-surface-variant" aria-hidden="true" />
          </Link>
        </section>
      </main>

      <RoleBottomNav />
    </MobileShell>
  )
}
