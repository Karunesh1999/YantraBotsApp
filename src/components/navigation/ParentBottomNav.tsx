import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, GraduationCap, QrCode, MessageSquare, User } from 'lucide-react'

export const ParentBottomNav: React.FC = () => {
  return (
    <nav
      aria-label="Parent navigation"
      className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface border-t border-outline-variant px-gutter-sm py-gutter-xs grid grid-cols-5 items-end z-30"
    >
      <NavLink
        to="/parent"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1 font-body text-label-sm transition-colors duration-state-change ${
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
          `flex flex-col items-center justify-center py-1 font-body text-label-sm transition-colors duration-state-change ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <GraduationCap className="w-5 h-5 mb-0.5" fill={isActive ? 'currentColor' : 'none'} aria-hidden="true" />
            <span>Classes</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/attendance"
        aria-label="Attendance"
        className="flex flex-col items-center justify-center -mt-5"
      >
        {({ isActive }) => (
          <>
            <div
              className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center border-4 border-surface transition-colors duration-state-change ${
                isActive ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary'
              }`}
            >
              <QrCode className="w-5 h-5" aria-hidden="true" />
            </div>
            <span
              className={`font-body text-label-sm mt-0.5 ${
                isActive ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              Attendance
            </span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/messages"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1 font-body text-label-sm transition-colors duration-state-change ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <MessageSquare className="w-5 h-5 mb-0.5" fill={isActive ? 'currentColor' : 'none'} aria-hidden="true" />
            <span>Messages</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/family"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1 font-body text-label-sm transition-colors duration-state-change ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <User className="w-5 h-5 mb-0.5" fill={isActive ? 'currentColor' : 'none'} aria-hidden="true" />
            <span>Profile</span>
          </>
        )}
      </NavLink>
    </nav>
  )
}
