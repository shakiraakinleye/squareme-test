import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SquareMe - Get Started",
  description: "Get Started - Social payment platform made simple!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
