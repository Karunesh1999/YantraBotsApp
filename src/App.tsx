import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RoleProvider } from './context/RoleContext'
import { SplashScreen } from './components/common/SplashScreen'
import { PublicHomePage } from './pages/public/PublicHomePage'
import { AboutPage } from './pages/public/AboutPage'
import { OpportunitiesPage } from './pages/public/OpportunitiesPage'
import { PublicAchievementsPage } from './pages/public/PublicAchievementsPage'
import { ScheduleAppointmentPage } from './pages/public/ScheduleAppointmentPage'
import { QuickLinksPage } from './pages/public/QuickLinksPage'
import { ContactPage } from './pages/public/ContactPage'
import { HelpCenterPage } from './pages/public/HelpCenterPage'
import { LegalPage } from './pages/public/LegalPage'
import { OnboardingRoleSelectionPage } from './pages/onboarding/OnboardingRoleSelectionPage'
import { ForgotPasswordPage } from './pages/authentication/ForgotPasswordPage'
import { RegisterPage } from './pages/authentication/RegisterPage'
import { ParentDashboardPage } from './pages/parent/ParentDashboardPage'
import { ProgramsExplorePage } from './pages/courses/ProgramsExplorePage'
import { CourseDetailPage } from './pages/courses/CourseDetailPage'
import { EnrollmentWizardPage } from './pages/enrollment/EnrollmentWizardPage'
import { ScheduleCalendarPage } from './pages/calendar/ScheduleCalendarPage'
import { FamilyProfilePage } from './pages/profile/FamilyProfilePage'
import { ParentAttendanceCheckinPage } from './pages/attendance/ParentAttendanceCheckinPage'
import { QrPickupVerificationPage } from './pages/attendance/QrPickupVerificationPage'
import { PaymentsBillingPage } from './pages/payments/PaymentsBillingPage'
import { InstructorAttendancePage } from './pages/instructor/InstructorAttendancePage'
import { InstructorProfilePage } from './pages/instructor/InstructorProfilePage'
import { StudentLearningDashboardPage } from './pages/student/StudentLearningDashboardPage'
import { StudentProfilePage } from './pages/student/StudentProfilePage'
import { MessagesAcademyInfoPage } from './pages/messaging/MessagesAcademyInfoPage'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <RoleProvider>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <BrowserRouter>
        <Routes>
          {/* Public Pre-Login Experience */}
          <Route path="/" element={<PublicHomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/achievements" element={<PublicAchievementsPage />} />
          <Route path="/appointment" element={<ScheduleAppointmentPage />} />
          <Route path="/quick-links" element={<QuickLinksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/page/terms" element={<LegalPage mode="terms" />} />
          <Route path="/page/privacy" element={<LegalPage mode="privacy" />} />

          {/* Authentication & Registration */}
          <Route path="/login" element={<OnboardingRoleSelectionPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Courses & Enrollment */}
          <Route path="/courses" element={<ProgramsExplorePage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/enroll" element={<EnrollmentWizardPage />} />

          {/* Parent Portal */}
          <Route path="/parent" element={<ParentDashboardPage />} />
          <Route path="/schedule" element={<ScheduleCalendarPage />} />
          <Route path="/family" element={<FamilyProfilePage />} />
          <Route path="/attendance" element={<ParentAttendanceCheckinPage />} />
          <Route path="/qr-pickup" element={<QrPickupVerificationPage />} />
          <Route path="/payments" element={<PaymentsBillingPage />} />
          <Route path="/messages" element={<MessagesAcademyInfoPage />} />

          {/* Instructor Portal */}
          <Route path="/instructor" element={<InstructorAttendancePage />} />
          <Route path="/instructor/profile" element={<InstructorProfilePage />} />

          {/* Student Portal */}
          <Route path="/student" element={<StudentLearningDashboardPage />} />
          <Route path="/student/profile" element={<StudentProfilePage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  )
}

export default App
