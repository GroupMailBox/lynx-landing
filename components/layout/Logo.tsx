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
        <linearGradient id="gmbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2F6BF2" />
          <stop offset="100%" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#gmbGrad)" />
      {/* group members */}
      <circle cx="32" cy="16.5" r="4" fill="#fff" />
      <path d="M25.5 26c0-4 3-6 6.5-6s6.5 2 6.5 6" fill="#fff" />
      <circle cx="20.5" cy="19" r="3" fill="#fff" fillOpacity=".7" />
      <circle cx="43.5" cy="19" r="3" fill="#fff" fillOpacity=".7" />
      {/* mailbox */}
      <rect x="14" y="28" width="36" height="22" rx="4" fill="#fff" />
      <path d="M15.5 30 32 41.5 48.5 30" fill="none" stroke="#2F6BF2" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
