import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Max Liu - CS @ UofT",
  description: "Max's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <nav className="bg-black px-4">
          <div className="container mx-auto flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-[var(--accent)]">Home</Link>
            <Link href="https://maxliu.me/blog" className="hover:text-[var(--accent)]">Blog</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
