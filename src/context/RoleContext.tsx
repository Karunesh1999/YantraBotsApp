import React, { createContext, useContext, useState } from 'react'
import type { UserRole } from '../types/academy'

const ROLE_STORAGE_KEY = 'yantra_active_role'
const AUTH_STORAGE_KEY = 'yantra_is_authenticated'

interface RoleContextValue {
  role: UserRole
  isAuthenticated: boolean
  setRole: (role: UserRole) => void
  login: (role: UserRole) => void
  logout: () => void
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

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  })

  const setRole = (nextRole: UserRole) => {
    setRoleState(nextRole)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(ROLE_STORAGE_KEY, nextRole)
    }
  }

  const login = (nextRole: UserRole) => {
    setRole(nextRole)
    setIsAuthenticated(true)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(AUTH_STORAGE_KEY, 'true')
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(AUTH_STORAGE_KEY)
    }
  }

  const homePath = isAuthenticated ? getHomePathForRole(role) : '/'

  return (
    <RoleContext.Provider
      value={{ role, isAuthenticated, setRole, login, logout, homePath }}
    >
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
