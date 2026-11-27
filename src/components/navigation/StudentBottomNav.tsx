import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Calendar, Trophy, User } from 'lucide-react'

export const StudentBottomNav: React.FC = () => {
  return (
    <nav
      aria-label="Student navigation"
      className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface border-t border-outline-variant px-gutter-sm py-gutter-xs grid grid-cols-5 z-30"
    >
      <NavLink
        to="/student"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1.5 font-body text-label-sm ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Home className="w-5 h-5 mb-0.5" fill={isActive ? 'currentColor' : 'none'} aria-hidden="true" />
            <span>Home</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1.5 font-body text-label-sm ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <BookOpen className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>My Learning</span>
      </NavLink>

      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1.5 font-body text-label-sm ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <Calendar className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>Schedule</span>
      </NavLink>

      <NavLink
        to="/student"
        className="flex flex-col items-center justify-center py-1.5 text-on-surface-variant hover:text-primary font-body text-label-sm"
      >
        <Trophy className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>Achievements</span>
      </NavLink>

      <NavLink
        to="/"
        className="flex flex-col items-center justify-center py-1.5 text-on-surface-variant hover:text-primary font-body text-label-sm"
      >
        <User className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>Profile</span>
      </NavLink>
    </nav>
  )
}
