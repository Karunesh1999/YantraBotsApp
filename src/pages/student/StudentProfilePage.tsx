import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Award, BookOpen, LogOut, ShieldCheck, Trophy } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { StudentBottomNav } from '../../components/navigation/StudentBottomNav'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { useRole } from '../../context/RoleContext'
import { DEMO_STUDENTS, OFFICIAL_CONTACT } from '../../services/academyData'

export const StudentProfilePage: React.FC = () => {
  const { logout } = useRole()
  const student = DEMO_STUDENTS[0]

  return (
    <MobileShell>
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to="/student"
          aria-label="Back to student dashboard"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <h1 className="font-headline text-headline-md text-on-primary">Student Profile</h1>
        <Link
          to="/login"
          onClick={logout}
          aria-label="Switch role or sign out"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <LogOut className="w-5 h-5" aria-hidden="true" />
        </Link>
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center gap-gutter-md">
          <ResponsiveImage
            webpSrc="/assets/images/logos/yantra-mascot.webp"
            fallbackSrc="/assets/images/logos/yantra-mascot.png"
            alt="Aarav Sharma avatar"
            className="w-16 h-16 rounded-full bg-primary-container object-cover shrink-0"
            loading="eager"
          />
          <div className="min-w-0">
            <h2 className="font-headline text-headline-md text-primary truncate">
              {student.fullName}
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              Student ID: YRA-STU-4821 · {student.grade}
            </p>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
              Active · 1,240 XP
            </span>
          </div>
        </section>

        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <h3 className="font-headline text-title-lg text-on-surface">Academic Details</h3>
          <div className="flex justify-between font-body text-body-sm">
            <span className="text-on-surface-variant">Current Track</span>
            <span className="text-on-surface font-medium">{student.program}</span>
          </div>
          <div className="flex justify-between font-body text-body-sm">
            <span className="text-on-surface-variant">School</span>
            <span className="text-on-surface">{student.school}</span>
          </div>
          <div className="flex justify-between font-body text-body-sm">
            <span className="text-on-surface-variant">FLL Team</span>
            <span className="font-mono text-secondary">#48210</span>
          </div>
          <div className="flex justify-between font-body text-body-sm">
            <span className="text-on-surface-variant">Guardian</span>
            <span className="text-on-surface">Anjali Sharma</span>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-gutter-sm text-center">
          <div className="bg-surface rounded-lg p-gutter-sm border border-outline-variant shadow-sm flex flex-col items-center gap-1">
            <Trophy className="w-5 h-5 text-warning" aria-hidden="true" />
            <span className="font-headline text-title-md text-primary">12</span>
            <span className="font-body text-label-sm text-on-surface-variant">Missions</span>
          </div>
          <div className="bg-surface rounded-lg p-gutter-sm border border-outline-variant shadow-sm flex flex-col items-center gap-1">
            <Award className="w-5 h-5 text-secondary" aria-hidden="true" />
            <span className="font-headline text-title-md text-primary">3</span>
            <span className="font-body text-label-sm text-on-surface-variant">Badges</span>
          </div>
          <div className="bg-surface rounded-lg p-gutter-sm border border-outline-variant shadow-sm flex flex-col items-center gap-1">
            <BookOpen className="w-5 h-5 text-success" aria-hidden="true" />
            <span className="font-headline text-title-md text-primary">75%</span>
            <span className="font-body text-label-sm text-on-surface-variant">Unit 6</span>
          </div>
        </section>

        <section className="bg-primary-container rounded-xl p-gutter-md border border-outline-variant flex items-start gap-gutter-sm">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <p className="font-body text-body-sm text-on-primary-container">
            Student accounts are managed by {OFFICIAL_CONTACT.academyName}. Need help? Contact{' '}
            {OFFICIAL_CONTACT.email}.
          </p>
        </section>

        <Link
          to="/login"
          onClick={logout}
          className="w-full min-h-[44px] inline-flex items-center justify-center rounded-md bg-surface border border-outline text-primary font-body text-label-lg"
        >
          Switch Portal Role / Sign Out
        </Link>
      </main>

      <StudentBottomNav />
    </MobileShell>
  )
}
