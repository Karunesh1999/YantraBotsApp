import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Info, Search } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { RoleBottomNav } from '../../components/navigation/RoleBottomNav'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { useRole } from '../../context/RoleContext'
import { COURSE_PROGRAMS } from '../../services/academyData'

const CATEGORIES = [
  { id: 'all', label: 'All Programs' },
  { id: 'Ashburn', label: 'Ashburn' },
  { id: 'Chantilly', label: 'Chantilly' },
  { id: 'Online', label: 'Online' },
]

export const ProgramsExplorePage: React.FC = () => {
  const { homePath } = useRole()
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return COURSE_PROGRAMS.filter((course) => {
      const matchCat =
        activeCategory === 'all' || course.categories.includes(activeCategory)
      const matchQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.tags.some((tag) => tag.toLowerCase().includes(q))
      return matchCat && matchQuery
    })
  }, [activeCategory, searchQuery])

  return (
    <MobileShell>
      {/* Deep Navy Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex flex-col gap-gutter-sm sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <Link
            to={homePath}
            aria-label="Back to home"
            className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </Link>
          <h1 className="font-headline text-headline-md text-on-primary">Explore Programs</h1>
          <Link
            to="/schedule"
            aria-label="My Schedule"
            className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Search Bar inside Navy Header */}
        <div className="relative flex items-center">
          <Search
            className="w-4 h-4 text-on-surface-variant absolute left-3 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search LEGO, VEX, Python, FLL..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-lg bg-surface text-body-md text-on-surface placeholder:text-on-surface-variant border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </header>

      {/* Location & Category Pills */}
      <div className="bg-surface px-page-margin py-gutter-sm border-b border-outline-variant flex items-center gap-gutter-sm overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full font-body text-label-md shrink-0 transition-colors duration-state-change ${
                isActive
                  ? 'bg-primary text-on-primary'
                  : 'bg-background border border-outline text-on-surface hover:border-secondary'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Main Course List */}
      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Placeholder Disclaimer */}
        <div className="px-3 py-2 rounded-md bg-warning-container text-on-warning-container font-body text-body-sm flex items-center gap-gutter-sm">
          <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>
            Demo Data: Tuition &amp; schedules below are editable placeholders. Verify live pricing
            in enrollment.
          </span>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="bg-surface rounded-xl p-gutter-lg border border-outline-variant text-center">
            <p className="font-body text-body-md text-on-surface-variant">
              No programs match your current filter. Try clearing the search box.
            </p>
          </div>
        ) : (
          filteredCourses.map((course, idx) => (
            <article
              key={course.id}
              className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col"
            >
              <ResponsiveImage
                webpSrc={course.imageWebp}
                fallbackSrc={course.imageFallback}
                alt={course.imageAlt}
                className="w-full aspect-video object-cover rounded-t-xl bg-primary-container"
                loading={idx < 2 ? 'eager' : 'lazy'}
              />
              <div className="p-gutter-md flex flex-col gap-gutter-sm">
                <div className="flex items-start justify-between gap-gutter-sm">
                  <div>
                    <h2 className="font-headline text-headline-md text-on-surface">
                      {course.title}
                    </h2>
                    <span className="font-body text-body-sm text-on-surface-variant">
                      {course.ageRange} · {course.grades} · {course.level}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-headline text-title-lg text-primary tabular-nums">
                      ${course.price}
                    </span>
                    <span className="block font-body text-label-sm text-on-surface-variant">
                      {course.priceLabel}
                    </span>
                  </div>
                </div>

                <p className="font-body text-body-sm text-on-surface-variant">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-gutter-xs">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-background text-on-surface font-body text-label-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {course.extraNote && (
                  <p className="font-body text-label-sm text-on-surface-variant">
                    {course.extraNote}
                  </p>
                )}

                <Link
                  to={`/enroll?program=${encodeURIComponent(course.title)}`}
                  className="w-full min-h-[44px] inline-flex items-center justify-center rounded-md bg-secondary text-on-secondary font-body text-label-lg hover:bg-primary transition-colors duration-state-change"
                >
                  Enroll Now
                </Link>
              </div>
            </article>
          ))
        )}
      </main>

      <RoleBottomNav />
    </MobileShell>
  )
}
