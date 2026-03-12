import PageHeader from "@/components/ui/PageHeader";
import PlaceholderSection from "@/components/ui/PlaceholderSection";

export default function BrandApplicationPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Brand Application"
        description="How the Vouch brand comes to life across real-world applications — from presentations to email signatures to physical materials."
      />
      <PlaceholderSection
        title="Brand Application Examples"
        description="This section will include real-world brand application examples — email signatures, presentation templates, social media templates, and print materials. Currently in development."
        contact="ian@vouchfor.com"
      />
    </div>
  );
}
