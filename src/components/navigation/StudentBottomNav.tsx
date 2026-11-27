import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, BookOpen, Calendar, Trophy, User } from 'lucide-react'

export const StudentBottomNav: React.FC = () => {
  const location = useLocation()
  const isAchievements = location.pathname === '/student' && location.hash === '#achievements'

  return (
    <nav
      aria-label="Student navigation"
      className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface border-t border-outline-variant px-2 pt-2 pb-3 grid grid-cols-5 items-center z-30"
    >
      <NavLink
        to="/student"
        end
        className={({ isActive }) =>
          `flex flex-col items-center justify-center gap-1 py-1 font-body text-[10px] leading-none font-semibold whitespace-nowrap ${
            isActive && !isAchievements ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Home
              className="w-5 h-5"
              fill={isActive && !isAchievements ? 'currentColor' : 'none'}
              aria-hidden="true"
            />
            <span>Home</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center gap-1 py-1 font-body text-[10px] leading-none font-semibold whitespace-nowrap ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <BookOpen className="w-5 h-5" aria-hidden="true" />
        <span>My Learning</span>
      </NavLink>

      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center gap-1 py-1 font-body text-[10px] leading-none font-semibold whitespace-nowrap ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <Calendar className="w-5 h-5" aria-hidden="true" />
        <span>Schedule</span>
      </NavLink>

      <NavLink
        to="/student#achievements"
        className={`flex flex-col items-center justify-center gap-1 py-1 font-body text-[10px] leading-none font-semibold whitespace-nowrap ${
          isAchievements ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <Trophy
          className="w-5 h-5"
          fill={isAchievements ? 'currentColor' : 'none'}
          aria-hidden="true"
        />
        <span>Achievements</span>
      </NavLink>

      <NavLink
        to="/family"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center gap-1 py-1 font-body text-[10px] leading-none font-semibold whitespace-nowrap ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`
        }
      >
        <User className="w-5 h-5" aria-hidden="true" />
        <span>Profile</span>
      </NavLink>
    </nav>
  )
}
