import Image from 'next/image'

interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
  showWordmark?: boolean
}

export function Logo({ className = '', variant = 'dark', showWordmark = true }: LogoProps) {
  // On light/solid backgrounds — blue wordmark; on dark/hero — white wordmark
  const wordmarkColor = variant === 'light' ? '#FFFFFF' : '#0033A0'

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Ezokhetho" role="img">
      {/* Brand mark: white icon on blue circle — always visible, never stretched */}
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-full"
        style={{
          width: 38,
          height: 38,
          background: '#0033A0',
          padding: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/Icon-White.png"
          alt="Ezokhetho icon"
          width={26}
          height={26}
          className="object-contain"
          style={{ width: 26, height: 26 }}
          priority
        />
      </div>

      {/* Wordmark — colour switches with header state */}
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

