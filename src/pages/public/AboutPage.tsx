import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Award, Users } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { ACADEMY_LOCATIONS, OFFICIAL_CONTACT } from '../../services/academyData'

export const AboutPage: React.FC = () => {
  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title="About Academy" backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <ResponsiveImage
            webpSrc="/assets/images/courses/explorer-robotics.webp"
            fallbackSrc="/assets/images/courses/explorer-robotics.png"
            alt="Students building LEGO robotics at Yantra Robotics Academy"
            className="w-full aspect-video object-cover bg-primary-container"
            loading="eager"
          />
          <div className="p-gutter-md flex flex-col gap-gutter-sm">
            <h2 className="font-headline text-headline-md text-primary">
              Inspiring Young Innovators Across Northern Virginia
            </h2>
            <p className="font-body text-body-md text-on-surface-variant">
              {OFFICIAL_CONTACT.academyName} delivers structured, hands-on robotics, coding, and
              engineering education for elementary through high school students in Ashburn,
              Chantilly, and Online.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-gutter-sm">
          <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1">
            <Users className="w-5 h-5 text-secondary" aria-hidden="true" />
            <span className="font-headline text-title-lg text-primary">Grades K–9</span>
            <span className="font-body text-body-sm text-on-surface-variant">
              Progressive STEM pathways
            </span>
          </div>
          <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1">
            <Award className="w-5 h-5 text-secondary" aria-hidden="true" />
            <span className="font-headline text-title-lg text-primary">FLL &amp; VEX</span>
            <span className="font-body text-body-sm text-on-surface-variant">
              Competition-ready coaching
            </span>
          </div>
        </section>

        <section className="flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">Our Campuses</h2>
          <div className="bg-surface rounded-xl border border-outline-variant shadow-sm divide-y divide-outline-variant">
            {ACADEMY_LOCATIONS.map((loc) => (
              <div key={loc.id} className="p-gutter-md flex items-start gap-gutter-sm">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-body text-title-md text-primary">{loc.name}</h3>
                  <p className="font-body text-body-sm text-on-surface-variant">
                    {loc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link
          to="/appointment"
          className="w-full min-h-[44px] inline-flex items-center justify-center rounded-md bg-secondary text-on-secondary font-body text-label-lg hover:bg-primary"
        >
          Schedule a Campus Visit / Trial
        </Link>
      </main>
    </MobileShell>
  )
}
