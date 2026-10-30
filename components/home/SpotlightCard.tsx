'use client';

/** A card whose background lights up under the cursor (see .spotlight in globals.css). */
export default function SpotlightCard({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`spotlight ${className}`}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}
