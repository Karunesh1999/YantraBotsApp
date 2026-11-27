import React, { useEffect, useState } from 'react'
import { ResponsiveImage } from './ResponsiveImage'

interface SplashScreenProps {
  onFinish: () => void
  durationMs?: number
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  durationMs = 1800,
}) => {
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setFadingOut(true)
    }, Math.max(400, durationMs - 300))

    const doneTimer = window.setTimeout(() => {
      onFinish()
    }, durationMs)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
    }
  }, [durationMs, onFinish])

  return (
    <div
      onClick={onFinish}
      role="status"
      aria-label="Loading Yantra Robotics Academy"
      className={`fixed inset-0 z-50 max-w-md mx-auto bg-surface flex flex-col items-center justify-center px-gutter-lg transition-opacity duration-300 cursor-pointer ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-gutter-lg">
        <ResponsiveImage
          webpSrc="/assets/images/logos/yantra-brand-logo.webp"
          fallbackSrc="/assets/images/logos/yantra-brand-logo.png"
          alt="Yantra Robotics Academy Logo"
          className="w-64 h-auto object-contain select-none"
          loading="eager"
        />
        <div className="w-32 h-1 rounded-full bg-surface-container overflow-hidden">
          <div className="h-full w-1/2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
