export default function Icon({ name, size = 18, strokeWidth = 2, className }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
    focusable: false,
  }

  switch (name) {
    case 'external':
      return (
        <svg {...props}>
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M21 14v7H3V3h7" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      )
    case 'send':
      return (
        <svg {...props}>
          <path d="m22 2-7 20-3-8-8-3Z" />
          <path d="M22 2 11 11" />
        </svg>
      )
    case 'download':
      return (
        <svg {...props}>
          <path d="M12 3v12" />
          <path d="m7 11 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      )
    case 'printer':
      return (
        <svg {...props}>
          <path d="M6 9V2h12v7" />
          <rect x="6" y="13" width="12" height="8" rx="2" />
          <path d="M6 17h12" />
        </svg>
      )
    case 'github':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-1.98c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.76.41-1.26.75-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.45-2.28 1.2-3.08-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.12 11.12 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.8 1.2 1.83 1.2 3.08 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.07.8 2.15v3.19c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07-1.41-1.41M6.34 6.34 4.93 4.93m12.73 0-1.41 1.41M6.34 17.66l-1.41 1.41" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...props}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
