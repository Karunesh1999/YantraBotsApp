import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Clock, Cpu, UserCheck, CalendarCheck } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { RoleBottomNav } from '../../components/navigation/RoleBottomNav'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { useRole } from '../../context/RoleContext'
import { COURSE_PROGRAMS } from '../../services/academyData'

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { isAuthenticated } = useRole()
  const course = COURSE_PROGRAMS.find((c) => c.id === id) ?? COURSE_PROGRAMS[0]

  return (
    <MobileShell bottomPaddingClass={isAuthenticated ? 'pb-24' : 'pb-8'}>
      {/* Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to="/courses"
          aria-label="Back to programs"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <h1 className="font-headline text-headline-md text-on-primary truncate px-2">
          Course Details
        </h1>
        <span className="w-10" />
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Hero Image + Title */}
        <section className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <ResponsiveImage
            webpSrc={course.imageWebp}
            fallbackSrc={course.imageFallback}
            alt={course.imageAlt}
            className="w-full aspect-video object-cover bg-primary-container"
            loading="eager"
          />
          <div className="p-gutter-md flex flex-col gap-gutter-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-headline text-headline-md text-primary">{course.title}</h2>
                <span className="font-body text-body-sm text-on-surface-variant">
                  {course.ageRange} · {course.grades} · {course.level}
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="font-headline text-headline-md text-primary tabular-nums">
                  ${course.price}
                </span>
                <span className="block font-body text-label-sm text-on-surface-variant">
                  {course.priceLabel}
                </span>
              </div>
            </div>

            <p className="font-body text-body-md text-on-surface-variant">{course.description}</p>
          </div>
        </section>

        {/* Key Specs */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <div className="flex items-center gap-gutter-sm">
            <Cpu className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
            <span className="font-body text-body-sm text-on-surface">
              <strong>Platform:</strong> {course.platform}
            </span>
          </div>
          <div className="flex items-center gap-gutter-sm">
            <Clock className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
            <span className="font-body text-body-sm text-on-surface">
              <strong>Duration:</strong> {course.duration}
            </span>
          </div>
          <div className="flex items-center gap-gutter-sm">
            <UserCheck className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
            <span className="font-body text-body-sm text-on-surface">
              <strong>Lead Instructor:</strong> {course.instructor}
            </span>
          </div>
        </section>

        {/* Curriculum */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <h3 className="font-headline text-title-lg text-on-surface">What Students Learn</h3>
          <ul className="flex flex-col gap-gutter-xs">
            {course.curriculum.map((item) => (
              <li
                key={item}
                className="flex items-start gap-gutter-sm font-body text-body-sm text-on-surface-variant"
              >
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Available Schedules */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
          <h3 className="font-headline text-title-lg text-on-surface">Available Cohorts</h3>
          {course.scheduleOptions.map((slot) => (
            <div
              key={slot}
              className="py-1.5 px-3 rounded-md bg-background font-body text-body-sm text-on-surface"
            >
              {slot}
            </div>
          ))}
        </section>

        {/* Action CTAs */}
        <div className="grid grid-cols-2 gap-gutter-sm">
          <Link
            to="/appointment"
            className="min-h-[44px] px-3 py-2 rounded-md bg-surface border border-outline text-primary font-body text-label-lg inline-flex items-center justify-center gap-1.5"
          >
            <CalendarCheck className="w-4 h-4" aria-hidden="true" />
            <span>Book Trial</span>
          </Link>
          <Link
            to={`/enroll?program=${encodeURIComponent(course.title)}`}
            className="min-h-[44px] px-3 py-2 rounded-md bg-secondary text-on-secondary font-body text-label-lg inline-flex items-center justify-center hover:bg-primary"
          >
            Enroll Now
          </Link>
        </div>
      </main>

      {isAuthenticated && <RoleBottomNav />}
    </MobileShell>
  )
}
