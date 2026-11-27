import React from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  CalendarCheck,
  Trophy,
  Sparkles,
  Info,
  HelpCircle,
  Phone,
  Link2,
  ArrowRight,
  LogIn,
  UserPlus,
} from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { COURSE_PROGRAMS, OFFICIAL_CONTACT } from '../../services/academyData'

export const PublicHomePage: React.FC = () => {
  const featuredCourses = COURSE_PROGRAMS.slice(0, 3)

  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        {/* Hero Card */}
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <div className="relative">
            <ResponsiveImage
              webpSrc="/assets/images/courses/fll-challenge.webp"
              fallbackSrc="/assets/images/courses/fll-challenge.png"
              alt="Students collaborating on robotics projects at Yantra Robotics Academy"
              className="w-full aspect-video object-cover bg-primary-container"
              loading="eager"
            />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/90 text-on-primary font-body text-label-sm">
              Ashburn &amp; Chantilly, VA
            </span>
          </div>

          <div className="p-gutter-md flex flex-col gap-gutter-sm">
            <h2 className="font-headline text-headline-md text-primary">
              Hands-On Robotics, Coding &amp; Competition STEM
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              Empowering K–9 innovators with LEGO Education SPIKE, VEX Robotics, Python, Scratch,
              and FIRST LEGO League coaching.
            </p>

            <div className="grid grid-cols-2 gap-gutter-sm pt-gutter-xs">
              <Link
                to="/login"
                className="min-h-[44px] px-4 py-2 rounded-md bg-primary text-on-primary font-body text-label-lg inline-flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors duration-state-change"
              >
                <LogIn className="w-4 h-4" aria-hidden="true" />
                <span>Portal Sign In</span>
              </Link>
              <Link
                to="/register"
                className="min-h-[44px] px-4 py-2 rounded-md bg-secondary-container text-on-secondary-container font-body text-label-lg inline-flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors duration-state-change"
              >
                <UserPlus className="w-4 h-4" aria-hidden="true" />
                <span>Register</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Public Quick Explore Grid */}
        <section className="grid grid-cols-2 gap-gutter-sm" aria-label="Explore Academy">
          <Link
            to="/courses"
            className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary"
          >
            <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-body text-title-md text-on-surface">Courses</span>
            <span className="font-body text-body-sm text-on-surface-variant">
              8 STEM &amp; Robotics tracks
            </span>
          </Link>

          <Link
            to="/appointment"
            className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary"
          >
            <CalendarCheck className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-body text-title-md text-on-surface">Book Trial</span>
            <span className="font-body text-body-sm text-on-surface-variant">
              Schedule an appointment
            </span>
          </Link>

          <Link
            to="/opportunities"
            className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary"
          >
            <Sparkles className="w-5 h-5 text-secondary" aria-hidden="true" />
            <span className="font-body text-title-md text-on-surface">Opportunities</span>
            <span className="font-body text-body-sm text-on-surface-variant">
              FLL, VEX &amp; Bootcamps
            </span>
          </Link>

          <Link
            to="/achievements"
            className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-1.5 hover:border-secondary"
          >
            <Trophy className="w-5 h-5 text-warning" aria-hidden="true" />
            <span className="font-body text-title-md text-on-surface">Achievements</span>
            <span className="font-body text-body-sm text-on-surface-variant">
              Awards &amp; milestones
            </span>
          </Link>
        </section>

        {/* Featured Programs */}
        <section className="flex flex-col gap-gutter-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-title-lg text-on-surface">Popular Programs</h2>
            <Link
              to="/courses"
              className="font-body text-label-md text-secondary inline-flex items-center gap-1 hover:underline"
            >
              View all
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-col gap-gutter-sm">
            {featuredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-surface rounded-xl p-gutter-sm border border-outline-variant shadow-sm flex items-center gap-gutter-md hover:border-secondary transition-colors duration-state-change"
              >
                <ResponsiveImage
                  webpSrc={course.imageWebp}
                  fallbackSrc={course.imageFallback}
                  alt={course.imageAlt}
                  className="w-20 h-16 rounded-md object-cover shrink-0 bg-primary-container"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-title-md text-primary truncate">{course.title}</h3>
                  <p className="font-body text-body-sm text-on-surface-variant truncate">
                    {course.ageRange} · {course.grades}
                  </p>
                </div>
                <span className="font-mono text-label-md text-primary shrink-0">
                  ${course.price}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Academy Resources */}
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm divide-y divide-outline-variant">
          <Link to="/about" className="p-gutter-md flex items-center justify-between">
            <div className="flex items-center gap-gutter-sm">
              <Info className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-body text-title-md text-on-surface">
                About Yantra Robotics Academy
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
          </Link>
          <Link to="/quick-links" className="p-gutter-md flex items-center justify-between">
            <div className="flex items-center gap-gutter-sm">
              <Link2 className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-body text-title-md text-on-surface">
                Quick Links &amp; Pathway Flyers
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
          </Link>
          <Link to="/help" className="p-gutter-md flex items-center justify-between">
            <div className="flex items-center gap-gutter-sm">
              <HelpCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-body text-title-md text-on-surface">Help Center &amp; FAQs</span>
            </div>
            <ArrowRight className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
          </Link>
          <Link to="/contact" className="p-gutter-md flex items-center justify-between">
            <div className="flex items-center gap-gutter-sm">
              <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              <div>
                <span className="font-body text-title-md text-on-surface block">Contact Us</span>
                <span className="font-body text-body-sm text-on-surface-variant">
                  {OFFICIAL_CONTACT.email} · {OFFICIAL_CONTACT.phone}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
          </Link>
        </section>
      </main>
    </MobileShell>
  )
}
