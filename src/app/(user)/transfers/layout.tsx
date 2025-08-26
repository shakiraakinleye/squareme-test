import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SquareMe - Transfers",
  description: "Transfers - Social payment platform made simple!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
