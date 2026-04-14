import type { Metadata } from "next";

export const metadata: Metadata = { title: "Iconography — Vouch Brand Hub" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
