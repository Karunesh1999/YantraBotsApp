import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, QrCode, BadgeCheck, Shield } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { AppToast } from '../../components/common/AppToast'

export const QrPickupVerificationPage: React.FC = () => {
  const [toast, setToast] = useState<string | null>(null)

  return (
    <MobileShell bottomPaddingClass="pb-8">
      <AppToast message={toast} onClose={() => setToast(null)} />

      {/* Deep Navy Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between">
        <Link
          to="/attendance"
          aria-label="Back to attendance"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <div className="text-center">
          <h1 className="font-headline text-title-lg text-on-primary">QR Pickup Pass</h1>
          <p className="font-body text-label-sm text-primary-container">
            Two-Step Child Release Security
          </p>
        </div>
        <span className="w-10" />
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Navy-Framed Pickup QR Card */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col items-center text-center gap-gutter-md">
          <div className="w-full bg-primary text-on-primary rounded-xl p-gutter-lg flex flex-col items-center gap-gutter-md">
            <span className="font-headline text-title-lg text-on-primary">QR Pickup Pass</span>
            <div className="w-44 h-44 bg-surface rounded-lg flex items-center justify-center shadow-sm">
              <QrCode className="w-32 h-32 text-primary" aria-hidden="true" />
            </div>
            <div>
              <span className="font-body text-body-sm text-primary-container block">
                Authorized Pickup: Anjali Sharma
              </span>
              <span className="font-mono text-mono-md text-on-primary tabular-nums">
                PKP-8492-YRA
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-headline-md text-primary">Aarav Sharma</h2>
            <p className="font-body text-body-sm text-on-surface-variant">
              FLL Challenge · Ashburn – HQ · 6:00 PM Release
            </p>
            <span className="inline-flex items-center gap-1 mt-gutter-xs px-3 py-1 rounded-full bg-primary-container text-primary font-body text-label-sm">
              <BadgeCheck className="w-4 h-4" aria-hidden="true" />
              Verified Guardian
            </span>
          </div>

          {/* Security Warning */}
          <div className="w-full bg-warning-container text-on-warning-container p-gutter-sm rounded-md text-left flex items-start gap-gutter-sm">
            <Shield className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="font-body text-body-sm">
              <strong>2-Step Verification Required:</strong> QR scan must be paired with Photo ID
              check or Guardian PIN (<span className="font-mono font-semibold">4920</span>) before
              child release.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setToast('Encrypted single-session Pickup Pass link copied!')}
            className="w-full min-h-[44px] rounded-md bg-secondary text-on-secondary font-body text-label-lg hover:bg-primary"
          >
            Share Pass
          </button>
        </section>

        {/* Authorized Pickup List */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <h3 className="font-headline text-title-lg text-on-surface">
            Authorized Pickup Persons
          </h3>
          <div className="flex items-center justify-between py-gutter-xs border-b border-outline-variant">
            <div>
              <span className="font-body text-title-md text-on-surface block">
                Anjali Sharma (Mother)
              </span>
              <span className="font-body text-body-sm text-on-surface-variant">
                Photo ID on file · Primary
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
              Verified
            </span>
          </div>
          <div className="flex items-center justify-between py-gutter-xs">
            <div>
              <span className="font-body text-title-md text-on-surface block">
                Rohan Sharma (Father)
              </span>
              <span className="font-body text-body-sm text-on-surface-variant">
                Photo ID on file · Guardian
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
              Verified
            </span>
          </div>
        </section>
      </main>
    </MobileShell>
  )
}
