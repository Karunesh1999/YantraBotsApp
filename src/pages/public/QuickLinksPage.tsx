import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, RotateCcw } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'

export const QuickLinksPage: React.FC = () => {
  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title="Quick Links" backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        {/* Pathway Flyers */}
        <section className="flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">
            Student Pathway Flyers
          </h2>

          <div className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
            <div className="flex items-center gap-2 text-primary">
              <Compass className="w-5 h-5" aria-hidden="true" />
              <h3 className="font-body text-title-md">New Student Pathway</h3>
            </div>
            <p className="font-body text-body-sm text-on-surface-variant">
              Grades K–2 start with Discoverer Robotics; Grades 3–5 begin in Explorer Robotics;
              Grades 6+ enter LegoEdu-Challenger, After-School Coding, or VEX-Challenger.
            </p>
            <Link
              to="/courses"
              className="font-body text-label-md text-secondary inline-flex items-center gap-1 mt-1 hover:underline"
            >
              Browse Beginner Programs <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
            <div className="flex items-center gap-2 text-secondary">
              <RotateCcw className="w-5 h-5" aria-hidden="true" />
              <h3 className="font-body text-title-md">Returning Student Pathway</h3>
            </div>
            <p className="font-body text-body-sm text-on-surface-variant">
              Continuing students advance into FLL Explore, FLL Challenge Workshops, or VEX-Challenger
              competition tracks.
            </p>
            <Link
              to="/register"
              className="font-body text-label-md text-secondary inline-flex items-center gap-1 mt-1 hover:underline"
            >
              Register for Next Quarter <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Directory Links */}
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm divide-y divide-outline-variant">
          {[
            { label: 'Courses & Programs', to: '/courses' },
            { label: 'Schedule a Trial Appointment', to: '/appointment' },
            { label: 'Student Opportunities', to: '/opportunities' },
            { label: 'Academy Achievements', to: '/achievements' },
            { label: 'Help Center & FAQs', to: '/help' },
            { label: 'Contact Us', to: '/contact' },
            { label: 'Terms & Conditions', to: '/page/terms' },
            { label: 'Privacy Policy', to: '/page/privacy' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="p-gutter-md flex items-center justify-between hover:bg-background"
            >
              <span className="font-body text-title-md text-on-surface">{item.label}</span>
              <ArrowRight className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
            </Link>
          ))}
        </section>
      </main>
    </MobileShell>
  )
}
