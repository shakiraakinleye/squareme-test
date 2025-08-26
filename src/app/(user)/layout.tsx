import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "../../providers";
import {
  DesktopSideNav,
  DesktopNavBar,
} from "@/components/organisms/desktop-navs";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SquareMe",
  description: "Dashboard - Social payment platform made simple!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} w-full flex flex-col antialiased min-h-screen bg-background-100 lg:bg-background-200 selection:bg-zinc-200 transition-colors duration-700 ease-in`}
      >
        <Providers>
          <DesktopNavBar />
          <main className="flex w-full flex-1 mx-auto">
            <DesktopSideNav />
            <div className="flex w-full flex-1">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
