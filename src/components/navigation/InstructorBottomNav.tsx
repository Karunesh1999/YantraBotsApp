import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Calendar, CheckSquare, Users, User } from 'lucide-react'

export const InstructorBottomNav: React.FC = () => {
  return (
    <nav
      aria-label="Instructor navigation"
      className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface border-t border-outline-variant px-2 pt-2 pb-3 grid grid-cols-5 items-center z-30"
    >
      <NavLink
        to="/instructor"
        end
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1.5 font-body text-label-sm ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <Home className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>Home</span>
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
        <span>Classes</span>
      </NavLink>

      <NavLink
        to="/instructor"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1.5 font-body text-label-sm ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <CheckSquare className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>Attendance</span>
      </NavLink>

      <NavLink
        to="/instructor/profile"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1.5 font-body text-label-sm ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <Users className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>Students</span>
      </NavLink>

      <NavLink
        to="/instructor/profile"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1.5 font-body text-label-sm ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <User className="w-5 h-5 mb-0.5" aria-hidden="true" />
        <span>Profile</span>
      </NavLink>
    </nav>
  )
}
