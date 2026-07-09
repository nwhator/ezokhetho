import Image from 'next/image'

interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
  showWordmark?: boolean
}

export function Logo({ className = '', variant = 'dark', showWordmark = true }: LogoProps) {
  // On light backgrounds (scrolled header, footer) show the blue/dark wordmark
  // On dark/transparent backgrounds show the white wordmark
  const wordmarkColor = variant === 'light' ? '#FFFFFF' : '#0033A0'

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Ezokhetho" role="img">
      {/* Brand mark icon — always uses the actual logo.jpg */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: 40, height: 40, borderRadius: '50%', background: '#0033A0' }}
      >
        <Image
          src="/images/logo.jpg"
          alt="Ezokhetho brand mark"
          fill
          className="object-cover"
          sizes="40px"
          priority
        />
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <svg
          width="130"
          height="18"
          viewBox="0 0 130 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <text
            x="0"
            y="14"
            fontFamily="'Butler', 'Georgia', serif"
            fontWeight="400"
            fontSize="14"
            letterSpacing="5"
            fill={wordmarkColor}
          >
            EZOKHETHO
          </text>
        </svg>
      )}
    </div>
  )
}
