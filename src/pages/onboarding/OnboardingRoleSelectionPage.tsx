import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import type { UserRole } from '../../types/academy'
import { ResponsiveImage } from '../../components/common/ResponsiveImage'
import { useRole } from '../../context/RoleContext'

interface RoleCardConfig {
  role: UserRole
  title: string
  badge: string
  badgeClass: string
  description: string
  imageWebp: string
  imageFallback: string
  imageAlt: string
}

const ROLE_CARDS: RoleCardConfig[] = [
  {
    role: 'Parent',
    title: 'Parent / Guardian',
    badge: 'Self-Signup',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    description: 'Enroll students, track attendance, manage QR pickup & billing.',
    imageWebp: '/assets/images/students/role-parent-child.webp',
    imageFallback: '/assets/images/students/role-parent-child.png',
    imageAlt: 'Parent and child with robot',
  },
  {
    role: 'Student',
    title: 'Student',
    badge: 'Academy ID',
    badgeClass: 'bg-surface-container text-on-secondary-container',
    description: 'View missions, Python & LEGO/VEX progress, and certificates.',
    imageWebp: '/assets/images/students/role-student-robot.webp',
    imageFallback: '/assets/images/students/role-student-robot.png',
    imageAlt: 'Student building a robot',
  },
  {
    role: 'Instructor',
    title: 'Instructor',
    badge: 'Staff Provisioned',
    badgeClass: 'bg-surface-container text-on-secondary-container',
    description: 'Run live class rosters, QR check-in/out & pickup verification.',
    imageWebp: '/assets/images/instructors/role-instructor-kit.webp',
    imageFallback: '/assets/images/instructors/role-instructor-kit.png',
    imageAlt: 'Instructor with robotics kit',
  },
]

export const OnboardingRoleSelectionPage: React.FC = () => {
  const navigate = useNavigate()
  const { setRole } = useRole()
  const [selectedRole, setSelectedRole] = useState<UserRole>('Parent')
  const [email, setEmail] = useState('anjali.sharma@familydemo.org')
  const [password, setPassword] = useState('YantraDemo2026')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  const isParent = selectedRole === 'Parent'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setRole(selectedRole)
    if (selectedRole === 'Parent') {
      navigate('/parent')
    } else if (selectedRole === 'Instructor') {
      navigate('/instructor')
    } else {
      navigate('/student')
    }
  }

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-background flex flex-col justify-between px-page-margin py-gutter-lg gap-gutter-lg">
      {/* Top Brand Header */}
      <header className="flex items-center justify-between pt-gutter-xs">
        <div className="flex items-center gap-gutter-sm">
          <div className="w-10 h-10 rounded-md bg-surface border border-outline-variant p-1 flex items-center justify-center shadow-sm overflow-hidden">
            <ResponsiveImage
              webpSrc="/assets/images/logos/yantra-brand-logo.webp"
              fallbackSrc="/assets/images/logos/yantra-brand-logo.png"
              alt="Yantra Robotics Academy"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <div>
            <span className="font-headline text-title-lg text-primary block leading-tight">
              Yantra Robotics
            </span>
            <span className="font-body text-label-sm text-on-surface-variant block">
              Academy Portal
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container font-body text-label-sm">
          v2.4 Mobile
        </span>
      </header>

      {/* Welcome Hero with Brand Logo */}
      <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex items-center gap-gutter-md">
        <ResponsiveImage
          webpSrc="/assets/images/logos/yantra-brand-logo.webp"
          fallbackSrc="/assets/images/logos/yantra-brand-logo.png"
          alt="Yantra Robotics Academy Logo"
          className="w-20 h-20 rounded-lg object-contain p-1 shrink-0 bg-surface border border-outline-variant"
          loading="eager"
        />
        <div className="flex flex-col gap-gutter-xs">
          <h1 className="font-headline text-headline-md text-primary text-balance">
            Welcome to Yantra Robotics Academy
          </h1>
          <p className="font-body text-body-sm text-on-surface-variant text-pretty">
            Choose your portal role to access classes, attendance check-in, and robotics projects.
          </p>
        </div>
      </section>

      {/* Role Selection Cards */}
      <main className="flex flex-col gap-gutter-md">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-title-lg text-on-surface">Select your role</h2>
          <span className="font-body text-label-sm text-on-surface-variant">3 portals available</span>
        </div>

        {ROLE_CARDS.map((card) => {
          const isSelected = selectedRole === card.role
          return (
            <button
              key={card.role}
              type="button"
              onClick={() => setSelectedRole(card.role)}
              className={`w-full text-left bg-surface rounded-lg p-gutter-md shadow-sm transition-colors duration-state-change flex items-center gap-gutter-md ${
                isSelected
                  ? 'border-2 border-secondary bg-primary-container/20'
                  : 'border border-outline-variant hover:border-secondary'
              }`}
            >
              <ResponsiveImage
                webpSrc={card.imageWebp}
                fallbackSrc={card.imageFallback}
                alt={card.imageAlt}
                className="w-16 h-16 rounded-md object-cover shrink-0 bg-primary-container"
                loading="eager"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-gutter-sm flex-wrap">
                  <h3
                    className={`font-body text-title-md ${
                      isSelected ? 'text-primary' : 'text-on-surface'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-full font-body text-label-sm ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant mt-gutter-xs">
                  {card.description}
                </p>
              </div>
              <ChevronRight
                className={`w-5 h-5 shrink-0 ${
                  isSelected ? 'text-secondary' : 'text-on-surface-variant'
                }`}
                aria-hidden="true"
              />
            </button>
          )
        })}

        {/* Inline Sign-In Card */}
        <section className="bg-surface rounded-xl p-gutter-md border border-outline-variant shadow-sm flex flex-col gap-gutter-md">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-headline-md text-primary">{selectedRole} Sign In</h2>
            {!isParent && (
              <span className="px-2.5 py-1 rounded-full bg-warning-container text-on-warning-container font-body text-label-sm">
                Provisioned Account
              </span>
            )}
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-gutter-md">
            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Email or username</span>
              <div className="relative flex items-center">
                <Mail
                  className="w-4 h-4 text-text-muted absolute left-3 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[44px] pl-10 pr-3 py-2 rounded-md bg-background border border-outline text-body-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                />
              </div>
            </label>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Password</span>
              <div className="relative flex items-center">
                <Lock
                  className="w-4 h-4 text-text-muted absolute left-3 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full min-h-[44px] pl-10 pr-11 py-2 rounded-md bg-background border border-outline text-body-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-2 p-2 text-on-surface-variant hover:text-primary"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Eye className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-gutter-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded-sm border-outline text-primary focus:ring-secondary"
                />
                <span className="font-body text-body-sm text-on-surface-variant">Remember me</span>
              </label>
              <Link
                to="/messages"
                className="font-body text-label-md text-secondary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full min-h-[44px] px-5 py-2.5 rounded-md bg-primary text-on-primary font-body text-label-lg shadow-sm hover:bg-secondary transition-colors duration-state-change"
            >
              Sign In to {selectedRole} Portal
            </button>
          </form>

          {isParent ? (
            <div className="pt-gutter-sm border-t border-outline-variant flex items-center justify-between">
              <span className="font-body text-body-sm text-on-surface-variant">
                New family at Yantra?
              </span>
              <Link
                to="/enroll"
                className="font-body text-label-md text-secondary hover:underline"
              >
                Create Parent Account
              </Link>
            </div>
          ) : (
            <p className="font-body text-body-sm text-on-surface-variant bg-surface-container-low p-gutter-sm rounded-md border border-outline-variant">
              Student and Instructor accounts are provisioned by Yantra Robotics Academy. Contact
              your center coordinator if you need a password reset or 2FA code.
            </p>
          )}
        </section>
      </main>

      {/* Footer Trust Note */}
      <footer className="text-center pb-gutter-sm">
        <p className="font-body text-body-sm text-on-surface-variant">
          Protected by 2FA verification · Ashburn &amp; Chantilly, VA
        </p>
      </footer>
    </div>
  )
}
