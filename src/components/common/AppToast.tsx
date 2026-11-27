import React from 'react'
import { CheckCircle2 } from 'lucide-react'

interface AppToastProps {
  message: string | null
  onClose: () => void
}

export const AppToast: React.FC<AppToastProps> = ({ message, onClose }) => {
  if (!message) return null

  return (
    <div
      role="status"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-primary text-on-primary px-4 py-3 rounded-lg shadow-lg border border-secondary flex items-center justify-between gap-2"
    >
      <div className="flex items-center gap-2 min-w-0">
        <CheckCircle2 className="w-4 h-4 text-success-container shrink-0" aria-hidden="true" />
        <span className="font-body text-body-sm truncate">{message}</span>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="font-body text-label-sm text-primary-container hover:text-on-primary shrink-0"
      >
        Dismiss
      </button>
    </div>
  )
}
