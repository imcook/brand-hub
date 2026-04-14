import type { Metadata } from "next";

export const metadata: Metadata = { title: "Brand Application — Vouch Brand Hub" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
