import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Upload } from 'lucide-react'
import { MobileShell } from '../../layouts/MobileShell'
import { ParentBottomNav } from '../../components/navigation/ParentBottomNav'
import { AppToast } from '../../components/common/AppToast'
import { INITIAL_PAYMENTS } from '../../services/academyData'
import type { PaymentRecord } from '../../types/academy'

export const PaymentsBillingPage: React.FC = () => {
  const [payments, setPayments] = useState<PaymentRecord[]>(INITIAL_PAYMENTS)
  const [balanceStatus, setBalanceStatus] = useState<'Pending' | 'Under Review'>('Pending')
  const [toast, setToast] = useState<string | null>(null)

  const handleUploadReceipt = () => {
    if (balanceStatus === 'Under Review') {
      setToast('Receipt already submitted and under review.')
      return
    }
    setBalanceStatus('Under Review')
    setPayments((prev) => [
      {
        id: 'p-new',
        title: 'FLL Challenge · Aarav (Fall Q2)',
        methodAndDate: 'Zelle · Today',
        amount: '$340.00',
        status: 'Under Review',
      },
      ...prev,
    ])
    setToast('Receipt uploaded! Status updated to Under Review.')
  }

  return (
    <MobileShell>
      <AppToast message={toast} onClose={() => setToast(null)} />

      {/* Deep Navy Header */}
      <header className="bg-primary text-on-primary px-page-margin pt-gutter-lg pb-gutter-md flex items-center justify-between sticky top-0 z-20">
        <Link
          to="/parent"
          aria-label="Back to dashboard"
          className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-on-primary"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        </Link>
        <div className="text-center">
          <h1 className="font-headline text-headline-md text-on-primary">Payments</h1>
          <p className="font-body text-label-sm text-primary-container">
            Demo Data · Tuition &amp; receipts
          </p>
        </div>
        <span className="w-10" />
      </header>

      <main className="px-page-margin pt-gutter-md flex flex-col gap-gutter-md">
        {/* Centered Outstanding Balance + Fee Breakdown Card */}
        <section className="bg-surface rounded-xl p-gutter-lg border border-outline-variant shadow-sm flex flex-col gap-gutter-md">
          <div className="text-center flex flex-col items-center gap-gutter-xs pb-gutter-sm border-b border-outline-variant">
            <span className="font-body text-label-md text-on-surface-variant">
              Outstanding Balance
            </span>
            <span className="font-headline text-display-lg-mobile text-primary tabular-nums">
              $340.00
            </span>
            <p className="font-body text-body-sm text-on-surface-variant">
              Aarav Sharma · FLL Challenge (Fall Q2)
            </p>
            <span className="px-2.5 py-0.5 rounded-full bg-warning-container text-on-warning-container font-body text-label-sm">
              {balanceStatus === 'Under Review' ? 'Receipt Under Review' : 'Due Dec 5, 2026'}
            </span>
          </div>

          <div className="flex flex-col gap-gutter-xs font-body text-body-md">
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Tuition Fee</span>
              <span className="font-mono tabular-nums">$295.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Yearly Registration Fee</span>
              <span className="font-mono tabular-nums">$45.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Sibling Discount</span>
              <span className="font-mono text-on-success-container tabular-nums">-$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Late Fee</span>
              <span className="font-mono tabular-nums">$0.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-gutter-xs border-t border-outline-variant">
            <span className="font-body text-body-sm text-on-surface-variant">
              Pay via Zelle / Venmo / Check
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-primary font-body text-label-sm">
              Academy Approved
            </span>
          </div>

          <button
            type="button"
            onClick={handleUploadReceipt}
            className="w-full min-h-[44px] rounded-md bg-secondary text-on-secondary font-body text-label-lg flex items-center justify-center gap-gutter-xs hover:bg-primary"
          >
            <Upload className="w-4 h-4" aria-hidden="true" />
            Upload Payment Receipt
          </button>

          <div className="grid grid-cols-2 gap-gutter-sm pt-gutter-xs">
            <span className="py-1.5 text-center rounded-md bg-warning-container text-on-warning-container font-body text-label-md">
              Pending
            </span>
            <span className="py-1.5 text-center rounded-md bg-success-container text-on-success-container font-body text-label-md">
              Paid
            </span>
          </div>
        </section>

        {/* Payment History */}
        <section className="flex flex-col gap-gutter-sm">
          <h2 className="font-headline text-title-lg text-on-surface">Payment History</h2>
          <div className="bg-surface rounded-xl border border-outline-variant divide-y divide-outline-variant shadow-sm">
            {payments.map((item) => (
              <div key={item.id} className="p-gutter-md flex items-center justify-between">
                <div>
                  <span className="font-body text-title-md text-on-surface block">{item.title}</span>
                  <span className="font-body text-body-sm text-on-surface-variant">
                    {item.methodAndDate}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-title-md text-on-surface block tabular-nums">
                    {item.amount}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-body text-label-sm ${
                      item.status === 'Paid'
                        ? 'bg-success-container text-on-success-container'
                        : 'bg-secondary-container text-on-secondary-container'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ParentBottomNav />
    </MobileShell>
  )
}
