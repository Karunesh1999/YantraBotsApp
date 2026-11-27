import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Calendar } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { OPPORTUNITIES } from '../../services/academyData'

export const OpportunitiesPage: React.FC = () => {
  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title="Student Opportunities" backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <ResponsiveImage
            webpSrc="/assets/images/courses/vex-challenger.webp"
            fallbackSrc="/assets/images/courses/vex-challenger.png"
            alt="Students preparing competition robots"
            className="w-full aspect-video object-cover bg-primary-container"
            loading="eager"
          />
          <div className="p-gutter-md">
            <h2 className="font-headline text-headline-md text-primary">
              Competitions, Teams &amp; Seasonal Bootcamps
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant mt-1">
              Build teamwork, engineering notebooks, and tournament confidence alongside experienced
              mentors.
            </p>
          </div>
        </section>

        {OPPORTUNITIES.map((opp) => (
          <article
            key={opp.id}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
                <h3 className="font-headline text-title-lg text-primary">{opp.title}</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-primary font-body text-label-sm shrink-0">
                {opp.badge}
              </span>
            </div>
            <p className="font-body text-body-sm text-on-surface-variant">{opp.summary}</p>
            <div className="flex items-center gap-1.5 font-body text-label-sm text-secondary">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>
                {opp.audience} · {opp.schedule}
              </span>
            </div>
          </article>
        ))}

        <Link
          to="/courses"
          className="w-full min-h-[44px] inline-flex items-center justify-center rounded-md bg-primary text-on-primary font-body text-label-lg hover:bg-secondary"
        >
          Explore Eligible Programs
        </Link>
      </main>
    </MobileShell>
  )
}
