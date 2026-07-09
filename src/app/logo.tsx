interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0A0A0A'
  const accentColor = '#FF6B00'

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label="Ezokhetho"
      role="img"
    >
      {/* Wordmark in Butler-style letterforms via SVG text */}
      <svg
        width="172"
        height="28"
        viewBox="0 0 172 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="22"
          fontFamily="'Butler', 'Georgia', serif"
          fontWeight="400"
          fontSize="20"
          letterSpacing="5"
          fill={textColor}
        >
          EZOKHETHO
        </text>
        {/* Brand orange accent dot */}
        <circle cx="168" cy="20" r="2.5" fill={accentColor} />
      </svg>
    </div>
  )
}
