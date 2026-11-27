import React from 'react'
import { useRole } from '../../context/RoleContext'
import { ParentBottomNav } from './ParentBottomNav'
import { StudentBottomNav } from './StudentBottomNav'
import { InstructorBottomNav } from './InstructorBottomNav'

export const RoleBottomNav: React.FC = () => {
  const { role } = useRole()

  if (role === 'Student') return <StudentBottomNav />
  if (role === 'Instructor') return <InstructorBottomNav />
  return <ParentBottomNav />
}
