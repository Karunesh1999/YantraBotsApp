import React, { createContext, useContext, useState } from 'react'
import type { UserRole } from '../types/academy'

const ROLE_STORAGE_KEY = 'yantra_active_role'

interface RoleContextValue {
  role: UserRole
  setRole: (role: UserRole) => void
  homePath: string
}

const RoleContext = createContext<RoleContextValue | undefined>(undefined)

export function getHomePathForRole(role: UserRole): string {
  if (role === 'Student') return '/student'
  if (role === 'Instructor') return '/instructor'
  return '/parent'
}

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    if (typeof window === 'undefined') return 'Parent'
    const stored = window.sessionStorage.getItem(ROLE_STORAGE_KEY)
    if (stored === 'Parent' || stored === 'Student' || stored === 'Instructor') {
      return stored
    }
    return 'Parent'
  })

  const setRole = (nextRole: UserRole) => {
    setRoleState(nextRole)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(ROLE_STORAGE_KEY, nextRole)
    }
  }

  return (
    <RoleContext.Provider value={{ role, setRole, homePath: getHomePathForRole(role) }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext)
  if (!ctx) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return ctx
}
