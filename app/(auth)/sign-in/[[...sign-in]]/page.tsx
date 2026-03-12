import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-sand-light flex flex-col items-center justify-center px-4">
      <div className="mb-10 text-center">
        <span className="font-heading text-5xl font-bold text-sea-blue-dark">vouch</span>
        <p className="font-body text-sm text-sea-blue-mid/60 mt-2">Brand Hub</p>
      </div>
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#44607B",
            colorBackground: "#ffffff",
            colorText: "#212121",
            colorInputBackground: "#F9F6F1",
            borderRadius: "12px",
            fontFamily: "Inter, Arial, sans-serif",
          },
          elements: {
            card: "shadow-sm border border-black/5",
            headerTitle: "font-heading",
          },
        }}
      />
      <p className="mt-8 text-xs text-dark-neutral/30 font-body">
        For access, contact{" "}
        <a href="mailto:ian@vouchfor.com" className="text-sea-blue-mid hover:underline">
          ian@vouchfor.com
        </a>
      </p>
    </div>
  );
}
