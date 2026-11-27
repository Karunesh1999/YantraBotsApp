import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CalendarOff, X } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { RoleBottomNav } from '../../components/navigation/RoleBottomNav'
import { AppToast } from '../../components/common/AppToast'
import { useRole } from '../../context/RoleContext'
import { SCHEDULE_SESSIONS } from '../../services/academyData'

const WEEK_DAYS = [
  { label: 'S', date: '22', highlight: false },
  { label: 'M', date: '23', highlight: false },
  { label: 'T', date: '24', highlight: false },
  { label: 'W', date: '25', highlight: false },
  { label: 'T', date: '26', highlight: true },
  { label: 'F', date: '27', highlight: false },
  { label: 'S', date: '28', highlight: false },
]

export const ScheduleCalendarPage: React.FC = () => {
  const { homePath } = useRole()
  const [absenceOpen, setAbsenceOpen] = useState(false)
  const [studentFilter, setStudentFilter] = useState<'All' | 'Ashburn – HQ'>('All')
  const [toast, setToast] = useState<string | null>(null)

  const filteredSessions = SCHEDULE_SESSIONS.filter(
    (s) => studentFilter === 'All' || s.campus === 'Ashburn – HQ' || s.campus === 'All',
  )

  return (
    <MobileShell>
      <AppToast message={toast} onClose={() => setToast(null)} />

      {/* Deep Navy Header + Horizontal Week Strip */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex flex-col gap-gutter-md sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <Link
            to={homePath}
            aria-label="Back to home"
            className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </Link>
          <div className="text-center">
            <h1 className="font-headline text-headline-md text-on-primary">Schedule</h1>
            <p className="font-body text-label-sm text-primary-container">
              November 2026 · Fall Q2
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAbsenceOpen(true)}
            aria-label="Report Absence"
            className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
          >
            <CalendarOff className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Week Strip */}
        <div className="grid grid-cols-7 text-center gap-1">
          {WEEK_DAYS.map((day) => (
            <div key={day.date} className="flex flex-col items-center gap-1">
              <span className="font-body text-label-sm text-primary-container">{day.label}</span>
              <span
                className={
                  day.highlight
                    ? 'w-7 h-7 rounded-full bg-warning text-on-warning font-mono text-body-sm flex items-center justify-center font-semibold'
                    : 'font-mono text-body-sm py-1'
                }
              >
                {day.date}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Main Calendar & Timeline Sessions */}
      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        <div className="flex items-center justify-between gap-gutter-sm">
          <div className="flex items-center gap-gutter-xs overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setStudentFilter('All')}
              className={`px-3 py-1 rounded-full font-body text-label-sm shrink-0 ${
                studentFilter === 'All'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface border border-outline text-on-surface'
              }`}
            >
              All Students
            </button>
            <button
              type="button"
              onClick={() => setStudentFilter('Ashburn – HQ')}
              className={`px-3 py-1 rounded-full font-body text-label-sm shrink-0 ${
                studentFilter === 'Ashburn – HQ'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface border border-outline text-on-surface'
              }`}
            >
              Ashburn – HQ
            </button>
          </div>

          <button
            type="button"
            onClick={() => setAbsenceOpen(true)}
            className="px-3 py-1.5 rounded-md bg-primary-container text-primary font-body text-label-md shrink-0"
          >
            Report Absence
          </button>
        </div>

        {/* Monthly Calendar Grid + Color Legend */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <div className="grid grid-cols-7 text-center font-body text-label-sm text-on-surface-variant">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>
          <div className="grid grid-cols-7 gap-y-2 text-center font-mono text-body-sm tabular-nums">
            <span className="py-1.5 text-on-surface-variant">22</span>
            <span className="py-1.5 text-on-surface-variant">23</span>
            <span className="py-1.5 text-on-surface-variant">24</span>
            <span className="py-1.5 rounded-full bg-success-container text-on-success-container font-semibold">
              25
            </span>
            <span className="py-1.5 rounded-full bg-primary text-on-primary font-semibold">26</span>
            <span className="py-1.5 rounded-full bg-warning-container text-on-warning-container">
              27
            </span>
            <span className="py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
              28
            </span>
          </div>

          <div className="pt-gutter-sm border-t border-outline-variant flex flex-wrap gap-gutter-sm font-body text-label-sm text-on-surface-variant">
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              Upcoming
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-success" />
              Completed
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-warning" />
              Holiday
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              Makeup
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-error" />
              Cancelled
            </span>
          </div>
        </section>

        {/* Timeline Session Cards */}
        <section className="flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">Sessions</h2>
          {filteredSessions.map((session) => {
            const cardColors =
              session.status === 'Holiday'
                ? 'bg-warning-container text-on-warning-container'
                : session.status === 'Makeup'
                  ? 'bg-success-container text-on-success-container'
                  : 'bg-primary-container text-primary'
            return (
              <div key={session.id} className="flex items-start gap-gutter-sm">
                <span className="font-mono text-label-sm text-on-surface-variant w-14 pt-2 shrink-0 tabular-nums">
                  {session.timeLabel}
                </span>
                <article
                  className={`flex-1 rounded-lg p-gutter-md border border-outline-variant flex flex-col gap-gutter-xs ${cardColors}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-body text-title-md">{session.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-surface font-body text-label-sm">
                      {session.status}
                    </span>
                  </div>
                  <p className="font-body text-body-sm opacity-90">{session.details}</p>
                </article>
              </div>
            )
          })}
        </section>
      </main>

      {/* Report Absence & Makeup Modal */}
      {absenceOpen && (
        <div className="fixed inset-0 bg-primary/50 z-40 flex items-end justify-center">
          <div className="w-full max-w-md bg-surface rounded-t-xl p-gutter-lg flex flex-col gap-gutter-md">
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-headline-md text-primary">
                Report Absence &amp; Makeup
              </h2>
              <button
                type="button"
                onClick={() => setAbsenceOpen(false)}
                className="p-2 text-on-surface-variant"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md">Select Student &amp; Class</span>
              <select className="min-h-[44px] px-3 rounded-md border border-outline text-body-md bg-surface">
                <option>Aarav · FLL Challenge (Nov 26, 4:30 PM)</option>
                <option>Diya · Discoverer Robotics (Nov 28, 10:00 AM)</option>
              </select>
            </label>
            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md">Available System Makeup Slots</span>
              <select className="min-h-[44px] px-3 rounded-md border border-outline text-body-md bg-surface">
                <option>Tue Dec 2 · 5:00 PM (Ashburn – HQ)</option>
                <option>Sun Dec 7 · 11:00 AM (Online)</option>
              </select>
            </label>
            <button
              type="button"
              onClick={() => {
                setAbsenceOpen(false)
                setToast('Absence reported & makeup slot requested!')
              }}
              className="w-full min-h-[44px] rounded-md bg-primary text-on-primary font-body text-label-lg"
            >
              Submit Absence &amp; Request Makeup
            </button>
          </div>
        </div>
      )}

      <RoleBottomNav />
    </MobileShell>
  )
}
