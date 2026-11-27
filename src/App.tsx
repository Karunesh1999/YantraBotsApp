import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RoleProvider } from './context/RoleContext'
import { SplashScreen } from './components/common/SplashScreen'
import { OnboardingRoleSelectionPage } from './pages/onboarding/OnboardingRoleSelectionPage'
import { ParentDashboardPage } from './pages/parent/ParentDashboardPage'
import { ProgramsExplorePage } from './pages/courses/ProgramsExplorePage'
import { EnrollmentWizardPage } from './pages/enrollment/EnrollmentWizardPage'
import { ScheduleCalendarPage } from './pages/calendar/ScheduleCalendarPage'
import { FamilyProfilePage } from './pages/profile/FamilyProfilePage'
import { ParentAttendanceCheckinPage } from './pages/attendance/ParentAttendanceCheckinPage'
import { QrPickupVerificationPage } from './pages/attendance/QrPickupVerificationPage'
import { PaymentsBillingPage } from './pages/payments/PaymentsBillingPage'
import { InstructorAttendancePage } from './pages/instructor/InstructorAttendancePage'
import { StudentLearningDashboardPage } from './pages/student/StudentLearningDashboardPage'
import { MessagesAcademyInfoPage } from './pages/messaging/MessagesAcademyInfoPage'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <RoleProvider>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingRoleSelectionPage />} />
          <Route path="/parent" element={<ParentDashboardPage />} />
          <Route path="/courses" element={<ProgramsExplorePage />} />
          <Route path="/enroll" element={<EnrollmentWizardPage />} />
          <Route path="/schedule" element={<ScheduleCalendarPage />} />
          <Route path="/family" element={<FamilyProfilePage />} />
          <Route path="/attendance" element={<ParentAttendanceCheckinPage />} />
          <Route path="/qr-pickup" element={<QrPickupVerificationPage />} />
          <Route path="/payments" element={<PaymentsBillingPage />} />
          <Route path="/instructor" element={<InstructorAttendancePage />} />
          <Route path="/student" element={<StudentLearningDashboardPage />} />
          <Route path="/messages" element={<MessagesAcademyInfoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  )
}

export default App
