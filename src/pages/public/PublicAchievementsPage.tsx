import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Award } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { ACHIEVEMENTS } from '../../services/academyData'

export const PublicAchievementsPage: React.FC = () => {
  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title="Achievements" backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <ResponsiveImage
            webpSrc="/assets/images/courses/fll-explore.webp"
            fallbackSrc="/assets/images/courses/fll-explore.png"
            alt="Students showcasing collaborative STEM models"
            className="w-full aspect-video object-cover bg-primary-container"
            loading="eager"
          />
          <div className="p-gutter-md">
            <h2 className="font-headline text-headline-md text-primary">
              Student Milestones &amp; Tournament Honors
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant mt-1">
              Celebrating problem-solving, Core Values, and autonomous robotics engineering across
              our Ashburn and Chantilly teams.
            </p>
          </div>
        </section>

        {ACHIEVEMENTS.map((item) => (
          <article
            key={item.id}
            className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-start gap-gutter-md"
          >
            <div className="w-11 h-11 rounded-full bg-warning-container text-on-warning-container flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-body text-title-md text-on-surface">{item.title}</h3>
                <span className="font-mono text-label-sm text-secondary shrink-0">{item.year}</span>
              </div>
              <p className="font-body text-label-sm text-primary mt-0.5">{item.event}</p>
              <p className="font-body text-body-sm text-on-surface-variant mt-1">
                {item.highlight}
              </p>
            </div>
          </article>
        ))}

        <Link
          to="/login"
          className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-md bg-secondary text-on-secondary font-body text-label-lg hover:bg-primary"
        >
          <Award className="w-4 h-4" aria-hidden="true" />
          <span>Sign In to View Student Certificates</span>
        </Link>
      </main>
    </MobileShell>
  )
}
