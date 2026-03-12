export default function PageHeader({
  title,
  description,
  badge,
}: {
  title: string;
  description?: string;
  badge?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="font-heading text-4xl text-dark-neutral tracking-tight">{title}</h1>
        {badge && (
          <span className="text-[10px] uppercase tracking-widest bg-sun-mid/20 text-sun-dark px-2.5 py-1 rounded-full font-body font-medium self-center">
            {badge}
          </span>
        )}
      </div>
      {description && (
        <p className="text-sea-blue-mid/70 font-body text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 h-px bg-sea-blue-mid/10" />
    </div>
  );
}
