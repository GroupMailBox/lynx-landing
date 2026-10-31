import type { Integration } from '@/lib/integrations';

/** Brand logo on its brand colour, or initials for tools without a public icon. */
export default function IntegrationLogo({ i, size = 'h-11 w-11' }: { i: Integration; size?: string }) {
  return (
    <span className={`grid ${size} shrink-0 place-items-center rounded-xl text-xs font-bold text-white ${i.color}`} aria-hidden>
      {i.logo ? (
        // eslint-disable-next-line @next/next/no-img-element -- static export, tiny SVG
        <img src={i.logo} alt="" width={24} height={24} className="h-6 w-6" />
      ) : (
        i.initials
      )}
    </span>
  );
}
