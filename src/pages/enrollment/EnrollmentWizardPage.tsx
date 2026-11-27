import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, UserPlus, Hourglass } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { AppToast } from '../../components/common/AppToast'
import { DEMO_STUDENTS } from '../../services/academyData'

const STEP_TITLES = [
  '',
  'Step 1 of 7 · Select Student',
  'Step 2 of 7 · Select Program',
  'Step 3 of 7 · Student Details',
  'Step 4 of 7 · Class Schedule',
  'Step 5 of 7 · Payment',
  'Step 6 of 7 · Additional Info',
  'Step 7 of 7 · Confirmation',
]

export const EnrollmentWizardPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const initialProgram = searchParams.get('program') || 'Explorer Robotics'

  const [step, setStep] = useState<number>(1)
  const [selectedStudent, setSelectedStudent] = useState<string>('aarav')
  const [location, setLocation] = useState<string>('Ashburn – HQ')
  const [firstName, setFirstName] = useState<string>('Aarav')
  const [lastName, setLastName] = useState<string>('Sharma')
  const [dob, setDob] = useState<string>('04/15/2016')
  const [grade, setGrade] = useState<string>('5th Grade')
  const [experience, setExperience] = useState<string>('1–2 Years (Discoverer Robotics)')
  const [selectedSlot, setSelectedSlot] = useState<string>('sat-10')
  const [paymentMethod, setPaymentMethod] = useState<string>(
    'Zelle (treasury@yantrabots-demo.org)',
  )
  const [referral, setReferral] = useState<string>('Parent Referral')
  const [agreed, setAgreed] = useState<boolean>(true)
  const [toast, setToast] = useState<string | null>(null)

  const handleStudentChange = (id: string) => {
    setSelectedStudent(id)
    const found = DEMO_STUDENTS.find((s) => s.id === id)
    if (found) {
      setFirstName(found.firstName)
      setLastName(found.lastName)
      setGrade(found.grade)
    }
  }

  return (
    <MobileShell bottomPaddingClass="pb-8">
      <AppToast message={toast} onClose={() => setToast(null)} />

      {/* Deep Navy Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to="/courses"
          aria-label="Back to programs"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <div className="text-center">
          <h1 className="font-headline text-title-lg text-on-primary">Program Enrollment</h1>
          <p className="font-body text-label-sm text-primary-container">{STEP_TITLES[step]}</p>
        </div>
        <button
          type="button"
          onClick={() => setToast('Draft saved!')}
          className="font-body text-label-md text-primary-container hover:text-on-primary"
        >
          Save
        </button>
      </header>

      {/* Numbered Circular Stepper */}
      <div className="bg-surface px-page-margin py-gutter-md border-b border-outline-variant">
        <div className="flex items-center justify-between gap-1" aria-label="Enrollment steps">
          {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
            <React.Fragment key={num}>
              <button
                type="button"
                onClick={() => setStep(num)}
                className={`w-7 h-7 rounded-full font-mono text-label-sm flex items-center justify-center shrink-0 transition-colors duration-state-change ${
                  num <= step
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {num}
              </button>
              {idx < 6 && <div className="h-0.5 flex-1 bg-outline-variant" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Step Content */}
      <main className="px-page-margin pt-gutter-md flex-1 flex flex-col gap-gutter-md">
        {step === 1 && (
          <section className="flex flex-col gap-gutter-md">
            <h2 className="font-headline text-headline-md text-on-surface">
              Who are you enrolling?
            </h2>
            <div className="flex flex-col gap-gutter-sm">
              {DEMO_STUDENTS.map((s) => {
                const checked = selectedStudent === s.id
                return (
                  <label
                    key={s.id}
                    className={`bg-surface rounded-lg p-gutter-md flex items-center justify-between cursor-pointer ${
                      checked ? 'border-2 border-secondary' : 'border border-outline-variant'
                    }`}
                  >
                    <div className="flex items-center gap-gutter-md">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-headline text-title-md ${
                          s.id === 'aarav'
                            ? 'bg-primary-container text-primary'
                            : 'bg-secondary-container text-secondary'
                        }`}
                      >
                        {s.initials}
                      </div>
                      <div>
                        <span className="font-body text-title-md text-on-surface block">
                          {s.fullName}
                        </span>
                        <span className="font-body text-body-sm text-on-surface-variant">
                          Age {s.age} · {s.grade} · Existing Student
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="student"
                      checked={checked}
                      onChange={() => handleStudentChange(s.id)}
                      className="text-primary focus:ring-secondary"
                    />
                  </label>
                )
              })}

              <Link
                to="/family"
                className="bg-surface-container-low rounded-lg p-gutter-md border border-dashed border-secondary flex items-center justify-center gap-gutter-sm text-secondary font-body text-label-lg"
              >
                <UserPlus className="w-5 h-5" aria-hidden="true" />
                Add New Student
              </Link>
            </div>

            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Parent / Guardian</span>
              <span className="font-body text-body-md text-on-surface-variant">
                Anjali Sharma · (703) 555-0194 · anjali.sharma@familydemo.org
              </span>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="flex flex-col gap-gutter-md">
            <h2 className="font-headline text-headline-md text-on-surface">
              Select Program &amp; Location
            </h2>
            <div className="bg-surface rounded-lg p-gutter-md border-2 border-secondary flex flex-col gap-gutter-xs">
              <span className="font-body text-label-sm text-secondary">Selected Program</span>
              <span className="font-body text-title-md text-on-surface">{initialProgram}</span>
              <span className="font-body text-body-sm text-on-surface-variant">
                Ages 8–11 · LEGO SPIKE Prime
              </span>
            </div>
            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Academy Location</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full min-h-[44px] px-3 rounded-md bg-surface border border-outline text-body-md text-on-surface"
              >
                <option>Ashburn – HQ</option>
                <option>Ashburn – Best Brains</option>
                <option>Ashburn – Moorefield Station ES</option>
                <option>Chantilly – Chinmaya Somnath</option>
                <option>Online</option>
              </select>
            </label>
          </section>
        )}

        {step === 3 && (
          <section className="flex flex-col gap-gutter-md">
            <h2 className="font-headline text-headline-md text-on-surface">Student Details</h2>
            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant flex flex-col gap-gutter-md">
              <div className="grid grid-cols-2 gap-gutter-sm">
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-body text-label-md text-on-surface">First Name</span>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="min-h-[44px] px-3 rounded-md border border-outline text-body-md"
                  />
                </label>
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-body text-label-md text-on-surface">Last Name</span>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="min-h-[44px] px-3 rounded-md border border-outline text-body-md"
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-gutter-sm">
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-body text-label-md text-on-surface">Date of Birth</span>
                  <input
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="min-h-[44px] px-3 rounded-md border border-outline text-body-md"
                  />
                </label>
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-body text-label-md text-on-surface">Grade</span>
                  <input
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="min-h-[44px] px-3 rounded-md border border-outline text-body-md"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-gutter-xs">
                <span className="font-body text-label-md text-on-surface">
                  Previous Robotics Experience
                </span>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="min-h-[44px] px-3 rounded-md border border-outline text-body-md bg-surface"
                >
                  <option>1–2 Years (Discoverer Robotics)</option>
                  <option>None / Beginner</option>
                  <option>FLL Explore / Challenge</option>
                </select>
              </label>
              <label className="flex flex-col gap-gutter-xs">
                <span className="font-body text-label-md text-on-surface">
                  Supporting Documents (Optional)
                </span>
                <input type="file" className="text-body-sm text-on-surface-variant" />
              </label>
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="flex flex-col gap-gutter-md">
            <h2 className="font-headline text-headline-md text-on-surface">
              Choose Class Schedule
            </h2>
            <label
              className={`bg-surface rounded-lg p-gutter-md flex items-start justify-between gap-gutter-sm cursor-pointer ${
                selectedSlot === 'sat-10'
                  ? 'border-2 border-secondary'
                  : 'border border-outline-variant'
              }`}
            >
              <div>
                <span className="font-body text-title-md text-on-surface block">
                  Saturdays · 10:00 AM – 11:30 AM
                </span>
                <span className="font-body text-body-sm text-on-surface-variant">
                  Jan 10 – Mar 21 · {location}
                </span>
                <span className="inline-block mt-gutter-xs px-2 py-0.5 rounded-full bg-success-container text-on-success-container font-body text-label-sm">
                  4 seats left
                </span>
              </div>
              <input
                type="radio"
                name="slot"
                checked={selectedSlot === 'sat-10'}
                onChange={() => setSelectedSlot('sat-10')}
                className="mt-1 text-primary"
              />
            </label>

            <label
              className={`bg-surface rounded-lg p-gutter-md flex items-start justify-between gap-gutter-sm cursor-pointer ${
                selectedSlot === 'wed-5'
                  ? 'border-2 border-secondary'
                  : 'border border-outline-variant'
              }`}
            >
              <div>
                <span className="font-body text-title-md text-on-surface block">
                  Wednesdays · 5:00 PM – 6:30 PM
                </span>
                <span className="font-body text-body-sm text-on-surface-variant">
                  Jan 14 – Mar 25 · {location}
                </span>
                <span className="inline-block mt-gutter-xs px-2 py-0.5 rounded-full bg-warning-container text-on-warning-container font-body text-label-sm">
                  2 seats left
                </span>
              </div>
              <input
                type="radio"
                name="slot"
                checked={selectedSlot === 'wed-5'}
                onChange={() => setSelectedSlot('wed-5')}
                className="mt-1 text-primary"
              />
            </label>
          </section>
        )}

        {step === 5 && (
          <section className="flex flex-col gap-gutter-md">
            <h2 className="font-headline text-headline-md text-on-surface">
              Tuition &amp; Payment
            </h2>
            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant flex flex-col gap-gutter-sm">
              <div className="flex justify-between font-body text-body-md">
                <span className="text-on-surface-variant">Course Fee (Demo)</span>
                <span className="font-mono tabular-nums">$295.00</span>
              </div>
              <div className="flex justify-between font-body text-body-md">
                <span className="text-on-surface-variant">
                  Yearly Registration Fee (if applicable)
                </span>
                <span className="font-mono tabular-nums">$45.00</span>
              </div>
              <div className="pt-gutter-sm border-t border-outline-variant flex justify-between font-body text-title-md text-primary">
                <span>Total Due</span>
                <span className="font-mono tabular-nums">$340.00</span>
              </div>
            </div>

            <label className="flex flex-col gap-gutter-xs">
              <span className="font-body text-label-md text-on-surface">Payment Method</span>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="min-h-[44px] px-3 rounded-md border border-outline text-body-md bg-surface"
              >
                <option>Zelle (treasury@yantrabots-demo.org)</option>
                <option>Venmo (@YantraRobotics-Demo)</option>
                <option>Check (Payable at Ashburn – HQ)</option>
              </select>
            </label>

            <div className="bg-warning-container text-on-warning-container p-gutter-sm rounded-md font-body text-body-sm">
              Important: A seat is not guaranteed until required payment is received and verified by
              the academy.
            </div>
          </section>
        )}

        {step === 6 && (
          <section className="flex flex-col gap-gutter-md">
            <h2 className="font-headline text-headline-md text-on-surface">
              Referral &amp; Agreements
            </h2>
            <div className="bg-surface rounded-lg p-gutter-md border border-outline-variant flex flex-col gap-gutter-md">
              <label className="flex flex-col gap-gutter-xs">
                <span className="font-body text-label-md text-on-surface">
                  How did you hear about us?
                </span>
                <select
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  className="min-h-[44px] px-3 rounded-md border border-outline text-body-md bg-surface"
                >
                  <option>Parent Referral</option>
                  <option>School Flyer</option>
                  <option>Online Search</option>
                </select>
              </label>

              <label className="flex items-start gap-gutter-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 rounded-sm text-primary"
                />
                <span className="font-body text-body-sm text-on-surface-variant">
                  I agree to Yantra Robotics Academy&apos;s Terms, Safety Policy, and Authorized
                  Pickup rules.
                </span>
              </label>
            </div>
          </section>
        )}

        {step === 7 && (
          <section className="flex flex-col gap-gutter-md">
            <div className="bg-surface rounded-xl p-gutter-lg border border-outline-variant text-center flex flex-col items-center gap-gutter-sm">
              <div className="w-14 h-14 rounded-full bg-warning-container text-on-warning-container flex items-center justify-center">
                <Hourglass className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="font-headline text-headline-md text-primary">
                Enrollment Submitted (Pending Payment)
              </h2>
              <p className="font-body text-body-sm text-on-surface-variant">
                {firstName} {lastName} · {initialProgram} · {location} (
                {selectedSlot === 'sat-10' ? 'Sat 10:00 AM' : 'Wed 5:00 PM'})
              </p>
              <span className="px-3 py-1 rounded-full bg-warning-container text-on-warning-container font-body text-label-md">
                Seat Reserved Pending Verification
              </span>
            </div>

            <Link
              to="/payments"
              className="w-full min-h-[44px] inline-flex items-center justify-center rounded-md bg-primary text-on-primary font-body text-label-lg"
            >
              Upload Payment Receipt
            </Link>
          </section>
        )}
      </main>

      {/* Bottom Action Bar */}
      <footer className="px-page-margin pt-gutter-md grid grid-cols-2 gap-gutter-sm">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="min-h-[44px] px-5 py-2.5 rounded-md bg-surface border border-outline text-primary font-body text-label-lg disabled:opacity-50"
        >
          Back
        </button>
        {step < 7 && (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(7, s + 1))}
            className="min-h-[44px] px-5 py-2.5 rounded-md bg-secondary text-on-secondary font-body text-label-lg shadow-sm hover:bg-primary"
          >
            {step === 6 ? 'Submit Enrollment' : 'Continue'}
          </button>
        )}
      </footer>
    </MobileShell>
  )
}
