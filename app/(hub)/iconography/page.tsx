import PageHeader from "@/components/ui/PageHeader";
import PlaceholderSection from "@/components/ui/PlaceholderSection";

export default function IconographyPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Iconography"
        description="The Vouch icon library — purpose-built icons that reflect our design principles: clean, purposeful, and recognisably ours."
      />
      <PlaceholderSection
        title="Iconography"
        description="This section will house the approved Vouch icon set — usage guidelines, sizing specifications, and downloadable assets. Currently in development."
        contact="ian@vouchfor.com"
      />
    </div>
  );
}
