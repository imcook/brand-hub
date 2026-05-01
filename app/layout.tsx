import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vouch Brand Hub",
  description: "The central source of truth for Vouch brand guidelines, assets, and Vouch Flow.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
