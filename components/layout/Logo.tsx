export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="GroupMailBox"
    >
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4F8CFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3A75E0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0C1220" />
      <rect x="14" y="26" width="36" height="24" rx="4" fill="url(#iconGrad)" />
      <path
        d="M14,26 L32,42 L50,26"
        fill="none"
        stroke="#0C1220"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14,50 L26,40 M50,50 L38,40"
        fill="none"
        stroke="rgba(12,18,32,0.3)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="32" cy="17" r="4" fill="#4F8CFF" />
      <path d="M26,26 Q26,21 32,21 Q38,21 38,26" fill="#4F8CFF" />
      <circle cx="21" cy="19" r="2.8" fill="#3A75E0" />
      <path d="M16,26 Q16,23 21,23 Q26,23 26,26" fill="#3A75E0" />
      <circle cx="43" cy="19" r="2.8" fill="#3A75E0" />
      <path d="M38,26 Q38,23 43,23 Q48,23 48,26" fill="#3A75E0" />
    </svg>
  );
}
