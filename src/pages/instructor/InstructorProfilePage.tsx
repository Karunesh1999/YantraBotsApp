import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, LogOut, MapPin, ShieldCheck, Users } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { InstructorBottomNav } from '../../components/navigation/InstructorBottomNav'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { useRole } from '../../context/RoleContext'
import { OFFICIAL_CONTACT } from '../../services/academyData'

export const InstructorProfilePage: React.FC = () => {
  const { logout } = useRole()
  return (
    <MobileShell>
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to="/instructor"
          aria-label="Back to staff dashboard"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <h1 className="font-headline text-headline-md text-on-primary">Instructor Profile</h1>
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
            webpSrc="/assets/images/instructors/role-instructor-kit.webp"
            fallbackSrc="/assets/images/instructors/role-instructor-kit.png"
            alt="Ms. Priya Nair"
            className="w-16 h-16 rounded-full object-cover shrink-0 bg-primary-container"
            loading="eager"
          />
          <div className="min-w-0">
            <h2 className="font-headline text-headline-md text-primary truncate">
              Ms. Priya Nair
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              Lead Robotics Instructor · Staff ID: YRA-STF-104
            </p>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
              Roster Synced
            </span>
          </div>
        </section>

        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <h3 className="font-headline text-title-lg text-on-surface">Assigned Cohorts</h3>
          <div className="flex items-start gap-gutter-sm">
            <Users className="w-4 h-4 text-secondary shrink-0 mt-1" aria-hidden="true" />
            <div className="font-body text-body-sm">
              <span className="font-semibold text-on-surface block">
                FLL Challenge Workshops (Wed 4:30 PM)
              </span>
              <span className="text-on-surface-variant">8 Students · Ashburn – HQ</span>
            </div>
          </div>
          <div className="flex items-start gap-gutter-sm">
            <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1" aria-hidden="true" />
            <div className="font-body text-body-sm">
              <span className="font-semibold text-on-surface block">
                Explorer Robotics (Sat 10:00 AM)
              </span>
              <span className="text-on-surface-variant">10 Students · Ashburn – HQ</span>
            </div>
          </div>
        </section>

        <section className="bg-primary-container rounded-xl p-gutter-md border border-outline-variant flex items-start gap-gutter-sm">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <p className="font-body text-body-sm text-on-primary-container">
            Staff support: {OFFICIAL_CONTACT.email} · {OFFICIAL_CONTACT.phone}
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

      <InstructorBottomNav />
    </MobileShell>
  )
}
