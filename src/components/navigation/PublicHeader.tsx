import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, LayoutDashboard, LogIn } from 'lucide-react'
import { ResponsiveImage } from '../common/ResponsiveImage'
import { useRole } from '../../context/RoleContext'

interface PublicHeaderProps {
  title?: string
  backTo?: string
  showSignIn?: boolean
}

export const PublicHeader: React.FC<PublicHeaderProps> = ({
  title,
  backTo,
  showSignIn = true,
}) => {
  const { isAuthenticated, homePath } = useRole()
  const resolvedBackTo = backTo === '/' && isAuthenticated ? homePath : backTo

  return (
    <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between gap-2 sticky top-0 z-20">
      <div className="flex items-center gap-gutter-sm min-w-0">
        {resolvedBackTo ? (
          <Link
            to={resolvedBackTo}
            aria-label="Back"
            className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary shrink-0"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to="/"
            className="w-10 h-10 rounded-md bg-surface p-1 flex items-center justify-center shrink-0"
          >
            <ResponsiveImage
              webpSrc="/assets/images/logos/yantra-brand-logo.webp"
              fallbackSrc="/assets/images/logos/yantra-brand-logo.png"
              alt="Yantra Robotics Academy"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </Link>
        )}
        <div className="min-w-0">
          <h1 className="font-headline text-headline-md text-on-primary truncate">
            {title ?? 'Yantra Robotics'}
          </h1>
          {!title && (
            <p className="font-body text-label-sm text-primary-container truncate">
              Infinite Possibilities · Ashburn &amp; Chantilly
            </p>
          )}
        </div>
      </div>

      {showSignIn && !isAuthenticated && (
        <Link
          to="/login"
          className="min-h-[38px] px-3 py-1.5 rounded-md bg-surface text-primary font-body text-label-md inline-flex items-center gap-1.5 shrink-0 hover:bg-primary-container transition-colors duration-state-change"
        >
          <LogIn className="w-4 h-4" aria-hidden="true" />
          <span>Sign In</span>
        </Link>
      )}

      {showSignIn && isAuthenticated && !resolvedBackTo && (
        <Link
          to={homePath}
          className="min-h-[38px] px-3 py-1.5 rounded-md bg-surface text-primary font-body text-label-md inline-flex items-center gap-1.5 shrink-0 hover:bg-primary-container transition-colors duration-state-change"
        >
          <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
          <span>My Portal</span>
        </Link>
      )}
    </header>
  )
}
