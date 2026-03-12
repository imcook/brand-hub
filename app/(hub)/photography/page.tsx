import PageHeader from "@/components/ui/PageHeader";
import PlaceholderSection from "@/components/ui/PlaceholderSection";

export default function PhotographyPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Photography"
        description="Guidelines for photography style, subject matter, and tone — ensuring visual consistency across all Vouch communications."
      />
      <PlaceholderSection
        title="Photography Style Guide"
        description="This section will cover photographic direction — mood, subject matter, colour treatment, and dos and don'ts for selecting and commissioning photography. Currently in development."
        contact="ian@vouchfor.com"
      />
    </div>
  );
}
