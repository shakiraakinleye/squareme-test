import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "../providers";
import Header from "@/components/organisms/header";

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
  description: "Social payment platform made simple!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen w-full max-w-full bg-background-200 selection:bg-zinc-200 transition-colors duration-700 ease-in`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
        {/*
        main here - containing the side nav and rest of the page depending on href
        both meed to have max-w-screen-2xl or [1440px] */}
      </body>
    </html>
  );
}
