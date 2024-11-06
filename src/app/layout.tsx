import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Building With AIP",
  description: "AIP is a powerful tool for building applications.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
