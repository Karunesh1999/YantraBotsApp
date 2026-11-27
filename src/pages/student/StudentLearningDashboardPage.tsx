import React from 'react'
import { Bot, Code2, Cpu, Trophy, Award, ChevronRight } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { StudentBottomNav } from '../../components/navigation/StudentBottomNav'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'

export const StudentLearningDashboardPage: React.FC = () => {
  return (
    <MobileShell>
      {/* Header with Mascot */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-lg rounded-b-xl flex items-center justify-between">
        <div className="flex items-center gap-gutter-md">
          <ResponsiveImage
            webpSrc="/assets/images/logos/yantra-mascot.webp"
            fallbackSrc="/assets/images/logos/yantra-mascot.png"
            alt="Yantra student mascot"
            className="w-12 h-12 rounded-full bg-surface object-cover shrink-0"
            loading="eager"
          />
          <div>
            <p className="font-body text-body-sm text-primary-container">Welcome back,</p>
            <h1 className="font-headline text-headline-md text-on-primary">Aarav Sharma</h1>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-warning text-on-warning font-mono text-label-md tabular-nums">
          1,240 XP
        </span>
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Active Course Progress */}
        <section className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-title-lg text-primary">My Learning Progress</h2>
            <span className="font-mono text-label-md text-secondary tabular-nums">75%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
            <div className="h-full w-3/4 bg-secondary rounded-full" />
          </div>
          <p className="font-body text-body-sm text-on-surface-variant">
            FLL Challenge Workshops · Unit 6: Gyro PID Line Following
          </p>
        </section>

        {/* Robotics & Coding Skill Tracks */}
        <section className="flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">Skill Tracks</h2>
          <div className="grid grid-cols-2 gap-gutter-sm">
            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
              <Bot className="w-6 h-6 text-secondary" aria-hidden="true" />
              <h3 className="font-body text-title-md text-on-surface">LEGO Robotics</h3>
              <span className="font-body text-body-sm text-on-success-container font-semibold">
                Level 4 · Active
              </span>
            </div>
            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
              <Code2 className="w-6 h-6 text-secondary" aria-hidden="true" />
              <h3 className="font-body text-title-md text-on-surface">Python &amp; Scratch</h3>
              <span className="font-body text-body-sm text-on-surface-variant">
                Level 3 · Loops
              </span>
            </div>
            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
              <Cpu className="w-6 h-6 text-secondary" aria-hidden="true" />
              <h3 className="font-body text-title-md text-on-surface">AI &amp; ML Basics</h3>
              <span className="font-body text-body-sm text-on-surface-variant">Next Track</span>
            </div>
            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-xs">
              <Trophy className="w-6 h-6 text-secondary" aria-hidden="true" />
              <h3 className="font-body text-title-md text-on-surface">FIRST LEGO League</h3>
              <span className="font-body text-body-sm text-secondary">Team #48210</span>
            </div>
          </div>
        </section>

        {/* Certificates & Achievements */}
        <section className="bg-surface rounded-lg p-gutter-md border border-outline-variant shadow-sm flex items-center justify-between gap-gutter-md">
          <div className="flex items-center gap-gutter-md">
            <div className="w-11 h-11 rounded-full bg-warning-container text-on-warning-container flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-body text-title-md text-on-surface">
                Explorer Robotics Certificate
              </h3>
              <p className="font-body text-body-sm text-on-surface-variant">
                Earned Oct 2026 · 12 Missions Completed
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
        </section>
      </main>

      <StudentBottomNav />
    </MobileShell>
  )
}
