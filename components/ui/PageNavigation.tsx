import Link from "next/link";
import { NAV_SEQUENCE } from "@/content/nav";

export default function PageNavigation({ currentHref }: { currentHref: string }) {
  const index = NAV_SEQUENCE.findIndex((p) => p.href === currentHref);
  if (index === -1) return null;

  const prev = index > 0 ? NAV_SEQUENCE[index - 1] : null;
  const next = index < NAV_SEQUENCE.length - 1 ? NAV_SEQUENCE[index + 1] : null;

  return (
    <div className="border-t border-black/5 pt-6 mt-4">
      <div className="grid grid-cols-2 gap-3">

        {/* Prev */}
        <div>
          {prev && (
            <Link href={prev.href} className="group flex flex-col px-4 py-3 rounded-xl hover:bg-black/[0.03] transition-colors">
              <span className="font-body text-[10px] text-dark-neutral/25 uppercase tracking-widest mb-1 group-hover:text-dark-neutral/40 transition-colors">← Previous</span>
              <span className="font-body font-medium text-dark-neutral/50 text-sm group-hover:text-dark-neutral/70 transition-colors">{prev.label}</span>
              <span className="font-body text-dark-neutral/30 text-xs leading-snug mt-0.5 group-hover:text-dark-neutral/50 transition-colors">{prev.description}</span>
            </Link>
          )}
        </div>

        {/* Next */}
        <div className="flex justify-end">
          {next && (
            <Link href={next.href} className="group flex flex-col items-end px-4 py-3 rounded-xl hover:bg-black/[0.03] transition-colors">
              <span className="font-body text-[10px] text-dark-neutral/25 uppercase tracking-widest mb-1 group-hover:text-dark-neutral/40 transition-colors">Next →</span>
              <span className="font-body font-medium text-dark-neutral/50 text-sm group-hover:text-dark-neutral/70 transition-colors">{next.label}</span>
              <span className="font-body text-dark-neutral/30 text-xs leading-snug mt-0.5 group-hover:text-dark-neutral/50 transition-colors">{next.description}</span>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
