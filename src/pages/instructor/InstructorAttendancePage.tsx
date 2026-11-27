import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ScanLine, Search, X } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { InstructorBottomNav } from '../../components/navigation/InstructorBottomNav'
import { AppToast } from '../../components/common/AppToast'
import { useRole } from '../../context/RoleContext'
import { INITIAL_ROSTER } from '../../services/academyData'
import type { RosterStudent } from '../../types/academy'

export const InstructorAttendancePage: React.FC = () => {
  const { logout } = useRole()
  const [roster, setRoster] = useState<RosterStudent[]>(INITIAL_ROSTER)
  const [activeClass, setActiveClass] = useState<string>(
    'Class Roster: FLL Challenge · Ashburn HQ (4:30 PM)',
  )
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [checkoutStudent, setCheckoutStudent] = useState<RosterStudent | null>(null)
  const [step2Confirmed, setStep2Confirmed] = useState<boolean>(true)
  const [toast, setToast] = useState<string | null>(null)

  const filteredRoster = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return roster
    return roster.filter((r) => r.name.toLowerCase().includes(q))
  }, [roster, searchQuery])

  const handleCheckIn = (id: string) => {
    setRoster((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, status: 'Present', meta: 'In 4:35 PM · By Priya N.' }
          : student,
      ),
    )
    setToast('Student checked in as Present!')
  }

  const handleConfirmCheckout = () => {
    if (!checkoutStudent) return
    setRoster((prev) =>
      prev.map((student) =>
        student.id === checkoutStudent.id
          ? { ...student, status: 'Released', meta: 'In 4:28 PM · Out 6:00 PM (Verified)' }
          : student,
      ),
    )
    setCheckoutStudent(null)
    setToast('Check-out recorded & parent notified!')
  }

  return (
    <MobileShell>
      <AppToast message={toast} onClose={() => setToast(null)} />

      {/* Deep Navy Staff Dashboard Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to="/login"
          onClick={logout}
          aria-label="Back to role selection"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <div className="text-center">
          <h1 className="font-headline text-headline-md text-on-primary">Staff Dashboard</h1>
          <p className="font-body text-label-sm text-primary-container">
            Instructor: Ms. Priya Nair
          </p>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
          Synced
        </span>
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Class Roster Dropdown + Scan QR Code CTA */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <select
            aria-label="Select active class"
            value={activeClass}
            onChange={(e) => setActiveClass(e.target.value)}
            className="w-full min-h-[44px] px-3 rounded-lg bg-background border border-outline font-body text-title-md text-on-surface"
          >
            <option>Class Roster: FLL Challenge · Ashburn HQ (4:30 PM)</option>
            <option>Class Roster: Explorer Robotics · Ashburn HQ (6:15 PM)</option>
          </select>

          <button
            type="button"
            onClick={() =>
              setToast('Camera QR Scanner ready for Student Check-in or Guardian Pickup QR')
            }
            className="w-full min-h-[44px] rounded-lg bg-secondary text-on-secondary font-body text-label-lg flex items-center justify-center gap-gutter-sm hover:bg-primary"
          >
            <ScanLine className="w-5 h-5" aria-hidden="true" />
            Scan QR Code
          </button>

          <div className="relative flex items-center">
            <Search
              className="w-4 h-4 text-on-surface-variant absolute left-3 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search enrolled student..."
              className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-lg bg-background border border-outline text-body-md"
            />
          </div>
        </section>

        {/* Student Roster List */}
        <section className="flex flex-col gap-gutter-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-title-lg text-on-surface">
              Students ({filteredRoster.length})
            </h2>
            <span className="font-body text-label-sm text-on-surface-variant">
              Present / Checked-In
            </span>
          </div>

          {filteredRoster.map((student) => {
            if (student.status === 'Present') {
              return (
                <article
                  key={student.id}
                  className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm"
                >
                  <div className="flex items-center justify-between gap-gutter-sm">
                    <div className="flex items-center gap-gutter-sm">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-primary flex items-center justify-center font-headline text-label-lg">
                        {student.initials}
                      </div>
                      <div>
                        <h3 className="font-body text-title-md text-on-surface">{student.name}</h3>
                        <p className="font-mono text-body-sm text-on-surface-variant tabular-nums">
                          {student.meta}
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
                      Present
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-gutter-sm pt-gutter-xs border-t border-outline-variant">
                    <span className="font-body text-body-sm text-on-surface-variant">
                      {student.pickupAuthorized}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCheckoutStudent(student)}
                      className="min-h-10 px-3.5 py-1.5 rounded-md bg-primary text-on-primary font-body text-label-md"
                    >
                      Verify Check-Out
                    </button>
                  </div>
                </article>
              )
            }

            if (student.status === 'Pending') {
              return (
                <article
                  key={student.id}
                  className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center justify-between gap-gutter-sm"
                >
                  <div className="flex items-center gap-gutter-sm">
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center font-headline text-label-lg">
                      {student.initials}
                    </div>
                    <div>
                      <h3 className="font-body text-title-md text-on-surface">{student.name}</h3>
                      <p className="font-body text-body-sm text-on-surface-variant">
                        {student.meta}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCheckIn(student.id)}
                    className="min-h-10 px-3.5 py-1.5 rounded-md bg-secondary text-on-secondary font-body text-label-md"
                  >
                    Check In
                  </button>
                </article>
              )
            }

            return (
              <article
                key={student.id}
                className="bg-surface-container-low rounded-xl p-gutter-md border border-outline-variant flex items-center justify-between gap-gutter-sm"
              >
                <div className="flex items-center gap-gutter-sm">
                  <div className="w-10 h-10 rounded-full bg-surface text-on-surface-variant flex items-center justify-center font-headline text-label-lg border border-outline-variant">
                    {student.initials}
                  </div>
                  <div>
                    <h3 className="font-body text-title-md text-on-surface">{student.name}</h3>
                    <p className="font-mono text-body-sm text-on-surface-variant tabular-nums">
                      {student.meta}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-secondary-container font-body text-label-sm">
                  Released
                </span>
              </article>
            )
          })}
        </section>
      </main>

      {/* 2-Step Authorized Pickup Verification Modal */}
      {checkoutStudent && (
        <div className="fixed inset-0 bg-primary/50 z-40 flex items-end justify-center">
          <div className="w-full max-w-md bg-surface rounded-t-xl p-gutter-lg flex flex-col gap-gutter-md">
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-headline-md text-primary">
                2-Step Pickup Verification
              </h2>
              <button
                type="button"
                onClick={() => setCheckoutStudent(null)}
                className="p-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="bg-background p-gutter-sm rounded-md font-body text-body-sm">
              <strong>Student:</strong> {checkoutStudent.name}
              <br />
              <strong>Guardian Scanned:</strong> Anjali Sharma (Mother · Authorized)
            </div>
            <label className="flex items-center gap-gutter-sm cursor-pointer">
              <input
                type="checkbox"
                checked={step2Confirmed}
                onChange={(e) => setStep2Confirmed(e.target.checked)}
                className="rounded-sm text-primary"
              />
              <span className="font-body text-body-sm text-on-surface">
                Step 2 Confirmed: Photo ID / Guardian PIN (4920) verified
              </span>
            </label>
            <button
              type="button"
              disabled={!step2Confirmed}
              onClick={handleConfirmCheckout}
              className="w-full min-h-[44px] rounded-md bg-primary text-on-primary font-body text-label-lg disabled:opacity-50"
            >
              Confirm Check-Out &amp; Notify Parent
            </button>
          </div>
        </div>
      )}

      <InstructorBottomNav />
    </MobileShell>
  )
}
