import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavDock from "@/components/NavDock";

// Load Bricolage Grotesque font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

// Metadata configuration for Next.js
export const metadata: Metadata = {
  title: "Shubhankit Jain - Full Stack Developer & Designer",
  description:
    "Experienced React Developer with expertise in Next.js, TypeScript, and more. View my portfolio, projects, and achievements.",
  keywords:
    "Shubhankit Jain, Full Stack Developer, React, Next.js, TypeScript, JavaScript, Web Development",
  authors: [{ name: "Shubhankit Jain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shubhankitjain.com",
    siteName: "Shubhankit Jain Portfolio",
    title: "Shubhankit Jain - Full Stack Developer & Designer",
    description:
      "Experienced React Developer with expertise in Next.js, TypeScript, and more. View my portfolio, projects, and achievements.",
    images: [
      {
        url: "https://www.shubhankitjain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubhankit Jain - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shubhankitjain",
    creator: "@shubhankitjain",
    images: ["https://www.shubhankitjain.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <NavDock />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
