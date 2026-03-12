export default function PlaceholderSection({
  title,
  description,
  contact = "ian@vouchfor.com",
  badge = "Coming Soon",
}: {
  title: string;
  description: string;
  contact?: string;
  badge?: string;
}) {
  return (
    <div className="border border-dashed border-sea-blue-mid/20 rounded-2xl p-8 bg-white/50">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-sea-blue-mid/8 flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 6v4M10 14h.01" stroke="#44607B" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="10" cy="10" r="8" stroke="#44607B" strokeWidth="1.2" strokeOpacity="0.4"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-body font-semibold text-dark-neutral text-sm">{title}</h3>
            <span className="text-[10px] uppercase tracking-widest bg-sea-blue-mid/10 text-sea-blue-mid px-2 py-0.5 rounded-full font-body font-medium">
              {badge}
            </span>
          </div>
          <p className="text-sm text-dark-neutral/50 font-body leading-relaxed mb-3">{description}</p>
          <a
            href={`mailto:${contact}?subject=${encodeURIComponent(title + " — Brand Hub enquiry")}`}
            className="text-xs text-sea-blue-mid hover:text-sea-blue-dark transition-colors font-body"
          >
            Contact {contact} →
          </a>
        </div>
      </div>
    </div>
  );
}
