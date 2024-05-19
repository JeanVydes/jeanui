import type { Metadata } from "next";
import { Quicksand } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "App",
  description: "Generic description for generic app",
};

const font = Quicksand({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`bg-neutral-950 w-auto h-auto box-border text-neutral-400 ${font.className}`}>{children}</body>
    </html>
  );
}
