import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseUrl = "https://minnesotanice.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Home | MinnesotaNice",
    template: "%s | MinnesotaNice",
  },
  icons: {
    icon: "/minnesota-outline.png",
    apple: "/minnesota-outline.png",
  },
  description: "Your guide to Minnesota's public programs and services. We simplify complex government resources for healthcare, housing, food assistance, and more.",
  keywords: [
    "Minnesota resources",
    "Minnesota public services",
    "Minnesota assistance programs",
    "MNsure",
    "Minnesota DHS",
    "Minnesota healthcare",
    "Minnesota housing assistance",
    "Minnesota SNAP",
    "Minnesota benefits",
    "Minnesota help",
  ],
  authors: [{ name: "MinnesotaNice" }],
  creator: "MinnesotaNice",
  publisher: "MinnesotaNice",
  openGraph: {
    title: "Home | MinnesotaNice",
    description: "Your guide to Minnesota's public programs and services. We simplify complex government resources so you can get the help you need.",
    url: baseUrl,
    siteName: "MinnesotaNice",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Home | MinnesotaNice",
    description: "Your guide to Minnesota's public programs and services.",
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
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
