import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, CreditCard } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { ParentBottomNav } from '../../components/navigation/ParentBottomNav'
import { ACADEMY_LOCATIONS, ACADEMY_MESSAGES } from '../../services/academyData'

export const MessagesAcademyInfoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'messages' | 'locations'>('messages')

  return (
    <MobileShell>
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex flex-col gap-gutter-md sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <Link
            to="/parent"
            aria-label="Back to home"
            className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </Link>
          <h1 className="font-headline text-headline-md text-on-primary">
            Messages &amp; Academy
          </h1>
          <span className="w-10" />
        </div>

        <div className="grid grid-cols-2 gap-1 p-1 rounded-md bg-secondary/40">
          <button
            type="button"
            onClick={() => setActiveTab('messages')}
            className={`min-h-[36px] rounded font-body text-label-md transition-colors duration-state-change ${
              activeTab === 'messages'
                ? 'bg-surface text-primary shadow-sm'
                : 'text-on-primary'
            }`}
          >
            Alerts &amp; Chat
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('locations')}
            className={`min-h-[36px] rounded font-body text-label-md transition-colors duration-state-change ${
              activeTab === 'locations'
                ? 'bg-surface text-primary shadow-sm'
                : 'text-on-primary'
            }`}
          >
            Locations (5)
          </button>
        </div>
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {activeTab === 'messages' ? (
          <section className="flex flex-col gap-gutter-sm">
            {ACADEMY_MESSAGES.map((msg) => (
              <article
                key={msg.id}
                className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-start gap-gutter-md"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    msg.type === 'checkin'
                      ? 'bg-success-container text-on-success-container'
                      : 'bg-warning-container text-on-warning-container'
                  }`}
                >
                  {msg.type === 'checkin' ? (
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <CreditCard className="w-5 h-5" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between gap-2">
                    <h2 className="font-body text-title-md text-on-surface">{msg.title}</h2>
                    <span className="font-mono text-label-sm text-on-surface-variant shrink-0">
                      {msg.time}
                    </span>
                  </div>
                  <p className="font-body text-body-sm text-on-surface-variant mt-gutter-xs">
                    {msg.body}
                  </p>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="flex flex-col gap-gutter-sm">
            <h2 className="font-headline text-title-lg text-on-surface">Academy Locations</h2>
            <div className="bg-surface rounded-xl border border-outline-variant divide-y divide-outline-variant shadow-sm">
              {ACADEMY_LOCATIONS.map((loc) => (
                <div key={loc.id} className="p-gutter-md">
                  <h3 className="font-body text-title-md text-primary">{loc.name}</h3>
                  <p className="font-body text-body-sm text-on-surface-variant">
                    {loc.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <ParentBottomNav />
    </MobileShell>
  )
}
