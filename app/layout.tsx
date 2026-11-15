import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Tdomy — Software Engineer", template: "%s — Tdomy" },
  description:
    "バックエンドを軸に、フロントエンド、クラウド、品質改善まで横断するSoftware Engineer / Tech Leadのポートフォリオ。",
  openGraph: {
    title: "Tdomy — Software Engineer",
    description: "Backend depth. Full-stack perspective.",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tdomy — Software Engineer",
    description: "Backend depth. Full-stack perspective.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
