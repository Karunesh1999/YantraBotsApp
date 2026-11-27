import React from 'react'
import { MobileShell } from '../../layouts/MobileShell'
import { PublicHeader } from '../../components/navigation/PublicHeader'
import { OFFICIAL_CONTACT } from '../../services/academyData'

interface LegalPageProps {
  mode: 'terms' | 'privacy'
}

export const LegalPage: React.FC<LegalPageProps> = ({ mode }) => {
  const isTerms = mode === 'terms'

  return (
    <MobileShell bottomPaddingClass="pb-0">
      <PublicHeader title={isTerms ? 'Terms & Conditions' : 'Privacy Policy'} backTo="/" />

      <main className="px-page-margin pt-gutter-md pb-gutter-lg flex flex-col gap-gutter-md">
        <article className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-headline-md text-primary">
            {isTerms ? 'Terms & Conditions' : 'Privacy Policy'}
          </h2>
          <p className="font-body text-body-sm text-on-surface-variant">
            {isTerms
              ? `${OFFICIAL_CONTACT.academyName} enrollment seats are confirmed once tuition verification is completed. Authorized pickup verification (QR + Photo ID / PIN) is mandatory for student release.`
              : `${OFFICIAL_CONTACT.academyName} collects parent, student, and emergency medical details solely for class safety, attendance tracking, and academic communication.`}
          </p>
          <p className="font-body text-body-sm text-on-surface-variant">
            For questions regarding {isTerms ? 'enrollment terms' : 'data privacy'}, contact{' '}
            {OFFICIAL_CONTACT.email} or call {OFFICIAL_CONTACT.phone}.
          </p>
        </article>
      </main>
    </MobileShell>
  )
}
