import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SquareMe - Settings",
  description: "Settings - Social payment platform made simple!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
