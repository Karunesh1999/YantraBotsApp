import React from 'react'
import { Link } from 'react-router-dom'
import { OFFICIAL_CONTACT } from '../../services/academyData'

export const PublicFooter: React.FC = () => {
  return (
    <footer className="mt-auto px-page-margin py-gutter-lg border-t border-outline-variant bg-surface text-center flex flex-col gap-gutter-sm">
      <p className="font-headline text-title-md text-primary">{OFFICIAL_CONTACT.academyName}</p>
      <p className="font-body text-body-sm text-on-surface-variant">
        {OFFICIAL_CONTACT.email} · {OFFICIAL_CONTACT.phone}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body text-label-sm text-secondary">
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/quick-links" className="hover:underline">
          Quick Links
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/help" className="hover:underline">
          Help
        </Link>
        <Link to="/page/terms" className="hover:underline">
          Terms
        </Link>
        <Link to="/page/privacy" className="hover:underline">
          Privacy
        </Link>
      </div>
    </footer>
  )
}
