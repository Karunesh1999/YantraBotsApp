import React from 'react'

interface ResponsiveImageProps {
  webpSrc?: string
  fallbackSrc: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  webpSrc,
  fallbackSrc,
  alt,
  className = '',
  loading = 'lazy',
}) => {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img src={fallbackSrc} alt={alt} className={className} loading={loading} />
    </picture>
  )
}
