interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 150, height = 40, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="5" y="5" width="50" height="50" rx="8" fill="#CBD5E1" /> {/* cinza neutro */}
      <circle cx="20" cy="20" r="4" fill="#64748B" /> {/* azul acinzentado */}
      <circle cx="35" cy="20" r="4" fill="#94A3B8" /> {/* cinza claro */}
      <circle cx="20" cy="35" r="4" fill="#A3BFFA" /> {/* azul suave */}
      <circle cx="35" cy="35" r="4" fill="#C084FC" /> {/* lilás suave */}
      <text x="70" y="38" fontFamily="Arial, sans-serif" fontSize="28" fill="#334155" fontWeight="bold">
        Pixel
        <tspan fill="#6366F1">Code</tspan>
      </text>
    </svg>
  )
}
