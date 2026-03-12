import PageHeader from "@/components/ui/PageHeader";
import PlaceholderSection from "@/components/ui/PlaceholderSection";

export default function VisualGraphicsPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Visual Graphics"
        description="Patterns, textures, graphic elements, and illustrative assets that support the Vouch brand identity."
      />
      <PlaceholderSection
        title="Visual Graphics"
        description="This section will include approved graphic elements — patterns, decorative assets, and illustrative components for use across Vouch touchpoints. Content is in development."
        contact="ian@vouchfor.com"
      />
    </div>
  );
}
