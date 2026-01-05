export default function LogoMark({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Logo mark"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      {/* Hexagon core */}
      <path
        d="M12 2.8l6 3.5v7l-6 3.5-6-3.5v-7z"
        fill="url(#logoGrad)"
        stroke="var(--glass-border)"
        strokeWidth="0.75"
      />
      {/* Inner spark */}
      <path
        d="M12 7.8l1.2 1.2 1.7.2-1.2 1.2.3 1.6-1.5-.7-1.5.7.3-1.6-1.2-1.2 1.7-.2z"
        fill="rgba(255,255,255,0.7)"
      />
      {/* Bottom facet */}
      <path d="M9.2 13.4L12 15l2.8-1.6L12 11.8z" fill="rgba(255,255,255,0.12)" />
    </svg>
  )
}
