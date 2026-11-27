export type UserRole = 'Parent' | 'Student' | 'Instructor'

export interface StudentProfile {
  id: string
  initials: string
  firstName: string
  lastName: string
  fullName: string
  age: number
  grade: string
  school: string
  program: string
  scheduleSummary: string
  experience: string
  status: 'Enrolled' | 'Pending'
  medicalNote: string
}

export interface CourseProgram {
  id: string
  title: string
  ageRange: string
  grades: string
  level: string
  price: number
  priceLabel: string
  description: string
  tags: string[]
  categories: string[]
  imageWebp: string
  imageFallback: string
  imageAlt: string
  extraNote?: string
}

export interface ScheduleSession {
  id: string
  timeLabel: string
  title: string
  status: 'Upcoming' | 'Holiday' | 'Makeup' | 'Completed' | 'Cancelled'
  details: string
  campus: string
  studentName?: string
}

export interface AttendanceRecord {
  id: string
  dateLabel: string
  program: string
  inTime: string
  outTime: string
  guardian: string
  status: 'Present' | 'Late'
}

export interface RosterStudent {
  id: string
  initials: string
  name: string
  status: 'Present' | 'Pending' | 'Released'
  meta: string
  pickupAuthorized: string
}

export interface PaymentRecord {
  id: string
  title: string
  methodAndDate: string
  amount: string
  status: 'Paid' | 'Under Review' | 'Pending'
}

export interface AcademyMessage {
  id: string
  title: string
  time: string
  body: string
  type: 'checkin' | 'payment' | 'info'
}

export interface AcademyLocation {
  id: string
  name: string
  description: string
}
