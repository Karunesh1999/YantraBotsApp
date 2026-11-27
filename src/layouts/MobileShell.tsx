import React from 'react'

interface MobileShellProps {
  children: React.ReactNode
  bottomPaddingClass?: string
}

export const MobileShell: React.FC<MobileShellProps> = ({
  children,
  bottomPaddingClass = 'pb-24',
}) => {
  return (
    <div
      className={`min-h-screen w-full max-w-md mx-auto bg-background flex flex-col ${bottomPaddingClass}`}
    >
      {children}
    </div>
  )
}
