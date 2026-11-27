import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, QrCode, CheckCircle2 } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { ParentBottomNav } from '../../components/navigation/ParentBottomNav'
import { ATTENDANCE_HISTORY } from '../../services/academyData'

export const ParentAttendanceCheckinPage: React.FC = () => {
  return (
    <MobileShell>
      {/* Deep Navy Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to="/parent"
          aria-label="Back to home"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <h1 className="font-headline text-headline-md text-on-primary">Live Status</h1>
        <Link
          to="/qr-pickup"
          aria-label="QR Pickup Pass"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <QrCode className="w-5 h-5" aria-hidden="true" />
        </Link>
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Live Status Card with Circular Ring */}
        <section className="bg-surface rounded-xl p-gutter-lg border border-outline-variant shadow-sm flex flex-col items-center text-center gap-gutter-md">
          <div className="w-full py-2 px-3 rounded-full bg-success-container text-on-success-container font-body text-label-md inline-flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            Checked in at 4:28 PM · Present
          </div>

          {/* Circular Active Status Ring */}
          <div className="w-40 h-40 rounded-full border-8 border-success bg-success-container/30 flex flex-col items-center justify-center gap-1">
            <span className="font-body text-label-md text-on-success-container">Active</span>
            <span className="font-mono text-display-lg-mobile text-primary tabular-nums">4:28</span>
            <span className="font-body text-label-sm text-on-surface-variant">Out: 6:00 PM</span>
          </div>

          <div>
            <span className="font-body text-body-sm text-on-surface-variant block">Student</span>
            <h2 className="font-headline text-headline-md text-primary">Aarav Sharma</h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              FLL Challenge · Ashburn – HQ · Ms. Priya Nair
            </p>
          </div>

          <Link
            to="/qr-pickup"
            className="w-full min-h-[44px] inline-flex items-center justify-center rounded-md bg-secondary text-on-secondary font-body text-label-lg hover:bg-primary"
          >
            Show QR Pickup Pass
          </Link>
        </section>

        {/* Student Attendance QR (Separate from Pickup QR) */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center justify-between gap-gutter-md">
          <div className="flex flex-col gap-gutter-xs">
            <span className="px-2 py-0.5 rounded-full bg-primary-container text-primary font-body text-label-sm w-fit">
              Drop-Off Only
            </span>
            <h3 className="font-body text-title-md text-on-surface">Student Attendance QR</h3>
            <p className="font-body text-body-sm text-on-surface-variant">
              Used by instructors for arrival check-in. Not valid for child pickup.
            </p>
          </div>
          <div className="w-16 h-16 rounded-md bg-primary-container border border-outline flex items-center justify-center shrink-0">
            <QrCode className="w-9 h-9 text-primary" aria-hidden="true" />
          </div>
        </section>

        {/* Attendance History */}
        <section className="flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">Attendance History</h2>
          <div className="bg-surface rounded-xl border border-outline-variant divide-y divide-outline-variant shadow-sm">
            {ATTENDANCE_HISTORY.map((rec) => (
              <div key={rec.id} className="p-gutter-md flex items-center justify-between">
                <div>
                  <span className="font-body text-title-md text-on-surface block">
                    {rec.dateLabel}
                  </span>
                  <span className="font-body text-body-sm text-on-surface-variant">
                    In: {rec.inTime} · Out: {rec.outTime} ({rec.guardian})
                  </span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full font-body text-label-sm ${
                    rec.status === 'Present'
                      ? 'bg-success-container text-on-success-container'
                      : 'bg-warning-container text-on-warning-container'
                  }`}
                >
                  {rec.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ParentBottomNav />
    </MobileShell>
  )
}
