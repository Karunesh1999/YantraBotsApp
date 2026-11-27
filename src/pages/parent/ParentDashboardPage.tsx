import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bell,
  UserPlus,
  CalendarDays,
  CheckSquare,
  CreditCard,
  Bot,
  ChevronRight,
  QrCode,
  PartyPopper,
  Trophy,
  GraduationCap,
  CalendarCheck,
  Sparkles,
} from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { ParentBottomNav } from '../../components/navigation/ParentBottomNav'
import { DEMO_STUDENTS } from '../../services/academyData'

export const ParentDashboardPage: React.FC = () => {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('aarav')
  const activeStudent =
    DEMO_STUDENTS.find((s) => s.id === selectedStudentId) ?? DEMO_STUDENTS[0]

  return (
    <MobileShell>
      {/* Deep Navy Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-10 rounded-b-xl shadow-sm flex flex-col gap-gutter-md">
        <div className="flex items-center justify-between gap-gutter-sm">
          <div>
            <p className="font-body text-body-sm text-primary-container">Hello,</p>
            <h1 className="font-headline text-headline-lg text-on-primary">Anjali Sharma</h1>
          </div>
          <Link
            to="/messages"
            aria-label="Notifications"
            className="relative w-11 h-11 rounded-full bg-secondary/40 text-on-primary flex items-center justify-center hover:bg-secondary transition-colors duration-state-change"
          >
            <Bell className="w-5 h-5" aria-hidden="true" />
            <span
              className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-error ring-2 ring-primary"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* White Rounded Student Selector Dropdown */}
        <div className="bg-surface text-on-surface rounded-lg px-3 py-2 shadow-sm flex items-center gap-gutter-sm">
          <div className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-headline text-label-md shrink-0">
            {activeStudent.initials}
          </div>
          <select
            aria-label="Select student"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="flex-1 bg-transparent border-0 p-0 font-body text-title-md text-on-surface focus:outline-none focus:ring-0"
          >
            {DEMO_STUDENTS.map((student) => (
              <option key={student.id} value={student.id}>
                {student.fullName} ({student.grade})
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Overlapping Quick Action Strip */}
      <div className="px-page-margin -mt-6 z-10">
        <div className="bg-surface rounded-xl p-gutter-sm border border-outline-variant shadow-sm grid grid-cols-4 gap-1 text-center">
          <Link
            to="/enroll"
            className="flex flex-col items-center gap-1 py-1.5 rounded-md hover:bg-background"
          >
            <UserPlus className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-body text-label-sm text-on-surface">Enroll</span>
          </Link>
          <Link
            to="/schedule"
            className="flex flex-col items-center gap-1 py-1.5 rounded-md hover:bg-background"
          >
            <CalendarDays className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-body text-label-sm text-on-surface">Schedule</span>
          </Link>
          <Link
            to="/attendance"
            className="flex flex-col items-center gap-1 py-1.5 rounded-md hover:bg-background"
          >
            <CheckSquare className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-body text-label-sm text-on-surface">Check-In</span>
          </Link>
          <Link
            to="/payments"
            className="flex flex-col items-center gap-1 py-1.5 rounded-md hover:bg-background"
          >
            <CreditCard className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-body text-label-sm text-on-surface">Payments</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Demo Data Notice */}
        <div className="flex items-center justify-between px-3 py-2 rounded-md bg-surface-container border border-outline-variant">
          <span className="font-body text-body-sm text-on-secondary-container">
            Demo Data · Sample family records
          </span>
          <span className="font-mono text-label-sm text-secondary">Fall Q2</span>
        </div>

        {/* Upcoming Class Card */}
        <section className="flex flex-col gap-gutter-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-title-lg text-on-surface">Upcoming Class</h2>
            <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container font-mono text-label-sm tabular-nums">
              Starts in 2h 15m
            </span>
          </div>

          <article className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
            <div className="flex items-center justify-between gap-gutter-sm">
              <div className="flex items-center gap-gutter-sm min-w-0">
                <div className="w-11 h-11 rounded-full bg-primary-container text-primary flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-body text-title-md text-primary truncate">
                    {activeStudent.program}
                  </h3>
                  <p className="font-body text-body-sm text-on-surface-variant truncate">
                    {activeStudent.fullName} · {activeStudent.scheduleSummary}
                  </p>
                </div>
              </div>
              <Link
                to="/schedule"
                aria-label="View class details"
                className="p-1 text-on-surface-variant hover:text-primary shrink-0"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="pt-gutter-xs border-t border-outline-variant flex items-center justify-between gap-gutter-sm">
              <span className="font-body text-body-sm text-on-surface-variant">
                Instructor: Ms. Priya Nair
              </span>
              <Link
                to="/qr-pickup"
                className="inline-flex items-center gap-1 font-body text-label-md text-secondary hover:underline"
              >
                <QrCode className="w-4 h-4" aria-hidden="true" />
                QR Pickup Pass
              </Link>
            </div>
          </article>
        </section>

        {/* Warm Golden Holiday Announcement Card */}
        <section className="bg-warning text-on-warning rounded-xl p-gutter-md shadow-sm flex items-start gap-gutter-md">
          <div className="w-11 h-11 rounded-lg bg-surface/40 flex items-center justify-center shrink-0">
            <PartyPopper className="w-5 h-5 text-on-warning" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-gutter-xs">
            <div className="flex items-center gap-gutter-sm flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-surface text-on-warning font-body text-label-sm">
                Holiday Announcement
              </span>
              <span className="font-body text-label-sm text-on-warning font-semibold">
                Nov 27 – Nov 30
              </span>
            </div>
            <h3 className="font-headline text-headline-md text-on-warning">
              Thanksgiving Holiday Break
            </h3>
            <p className="font-body text-body-sm text-on-warning">
              Ashburn &amp; Chantilly campuses closed. Makeup slots open Dec 2.
            </p>
          </div>
        </section>

        {/* Quick Stats 2x2 Grid */}
        <section className="grid grid-cols-2 gap-gutter-sm" aria-label="Quick stats">
          <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
            <span className="font-body text-label-sm text-on-surface-variant">
              Enrolled Students
            </span>
            <div className="flex items-center justify-between">
              <span className="font-headline text-headline-lg text-primary tabular-nums">2</span>
              <span className="font-body text-label-sm text-on-success-container font-semibold">
                Active
              </span>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
            <span className="font-body text-label-sm text-on-surface-variant">
              Upcoming Classes
            </span>
            <div className="flex items-center justify-between">
              <span className="font-headline text-headline-lg text-primary tabular-nums">4</span>
              <span className="font-body text-label-sm text-secondary">This week</span>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
            <span className="font-body text-label-sm text-on-surface-variant">
              Attendance Rate
            </span>
            <div className="flex items-center justify-between">
              <span className="font-headline text-headline-lg text-primary tabular-nums">96%</span>
              <span className="font-body text-label-sm text-on-success-container font-semibold">
                On track
              </span>
            </div>
          </div>

          <Link
            to="/payments"
            className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs hover:border-secondary transition-colors duration-state-change"
          >
            <span className="font-body text-label-sm text-on-surface-variant">
              Pending Payments
            </span>
            <div className="flex items-center justify-between">
              <span className="font-headline text-headline-lg text-on-warning-container tabular-nums">
                $340
              </span>
              <span className="px-2 py-0.5 rounded-full bg-warning-container text-on-warning-container font-body text-label-sm">
                Due Dec 5
              </span>
            </div>
          </Link>
        </section>

        {/* Latest Announcements & Academy News */}
        <section className="flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">Academy News</h2>
          <article className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex items-start gap-gutter-md">
            <div className="w-10 h-10 rounded-md bg-primary-container text-primary flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-body text-title-md text-on-surface">
                Winter FLL Scrimmage Registration
              </h3>
              <p className="font-body text-body-sm text-on-surface-variant mt-gutter-xs">
                Teams at Ashburn – HQ can now RSVP for the December practice showcase.
              </p>
            </div>
          </article>
        </section>

        {/* Explore Academy 2x2 Grid */}
        <section className="flex flex-col gap-gutter-sm" aria-label="Explore Academy">
          <h2 className="font-headline text-title-lg text-on-surface">Explore Academy</h2>
          <div className="grid grid-cols-2 gap-gutter-sm">
            <Link
              to="/courses"
              className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary transition-colors duration-state-change"
            >
              <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-body text-title-md text-on-surface">Courses</span>
              <span className="font-body text-body-sm text-on-surface-variant">
                8 STEM &amp; Robotics tracks
              </span>
            </Link>

            <Link
              to="/appointment"
              className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary transition-colors duration-state-change"
            >
              <CalendarCheck className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-body text-title-md text-on-surface">Book Trial</span>
              <span className="font-body text-body-sm text-on-surface-variant">
                Schedule an appointment
              </span>
            </Link>

            <Link
              to="/opportunities"
              className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary transition-colors duration-state-change"
            >
              <Sparkles className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span className="font-body text-title-md text-on-surface">Opportunities</span>
              <span className="font-body text-body-sm text-on-surface-variant">
                FLL, VEX &amp; Bootcamps
              </span>
            </Link>

            <Link
              to="/achievements"
              className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary transition-colors duration-state-change"
            >
              <Trophy className="w-5 h-5 text-warning" aria-hidden="true" />
              <span className="font-body text-title-md text-on-surface">Achievements</span>
              <span className="font-body text-body-sm text-on-surface-variant">
                Awards &amp; milestones
              </span>
            </Link>
          </div>
        </section>
      </main>

      <ParentBottomNav />
    </MobileShell>
  )
}
