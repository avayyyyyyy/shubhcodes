import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Meteors from "@/components/magicui/meteors";
import { Toaster } from "sonner";

// Load Bricolage Grotesque font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

// Metadata configuration for Next.js
export const metadata: Metadata = {
  title: "Shubhankit Jain - Web Developer & Software Engineer",
  description:
    "Shubhankit Jain's personal portfolio website for showcasing thier achievements like winning Hackathons, freelancing as a Full Stack AI Developer or Professional Experiences and pursuing a Bachelor of Computer Applications (BCA) at Poornima University.",
  keywords:
    "Shubhankit Jain, portfolio, web developer, software engineer, React, JavaScript, TypeScript, Full Stack AI Developer, StoryDev, Poornima University",
  authors: [{ name: "Shubhankit Jain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhcodes.me",
    siteName: "Shubhankit Jain Portfolio",
    title: "Shubhankit Jain - Web Developer & Software Engineer",
    description:
      "Explore Shubhankit Jain's portfolio featuring his achievements, including winning India's first GEN AI Hackathon, freelancing as a Full Stack AI Developer, and more.",
    images: [
      {
        url: "https://utfs.io/f/4e91f9d4-4a88-4b19-a25e-6ebdee6b7229-dhi6qr.png",
        width: 1200,
        height: 630,
        alt: "Shubhankit Jain - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shubhcodes",
    creator: "@shubhcodes",
    images: [
      "https://utfs.io/f/4e91f9d4-4a88-4b19-a25e-6ebdee6b7229-dhi6qr.png",
    ],
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
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shubhankit Jain",
              url: "https://shubhcodes.me",
              image:
                "https://utfs.io/f/4e91f9d4-4a88-4b19-a25e-6ebdee6b7229-dhi6qr.png",
              sameAs: [
                "https://www.linkedin.com/in/shubhcodes",
                "https://github.com/avayyyyyyy",
              ],
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: "Opinify.in",
              },
              knowsAbout: [
                "Web Development",
                "React",
                "JavaScript",
                "TypeScript",
                "AI Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Poornima University",
              },
              description:
                "Shubhankit Jain is a Web Developer and Software Engineer with a passion for creating innovative AI-driven solutions. As the winner of India's first GEN AI Hackathon, Shubhankit developed 'StoryDev', a tool for parents to create customizable bedtime stories using GEN AI. He is also a Freelance Full Stack AI Developer and is currently pursuing a Bachelor of Computer Applications at Poornima University.",
            }),
          }}
        />
        <link rel="canonical" href="https://shubhcodes.me" />
      </head>
      <body
        className={`${bricolageGrotesque.className} antialiased z-50 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        </ThemeProvider>
        <Meteors number={30} />
        <Toaster
          theme="light"
          duration={2000}
          className="bg-background text-foreground"
          toastOptions={{
            classNames: {
              toast: "bg-secondary text-secondary-foreground border-0",
              title: "text-secondary-foreground",
              description: "text-secondary-foreground",
              actionButton: "bg-primary text-primary-foreground",
              cancelButton: "bg-muted text-muted-foreground",
            },
          }}
        />
      </body>
    </html>
  );
}
