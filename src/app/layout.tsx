// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lanh Phalla | Full Stack Developer",
  description:
    "Portfolio of Lanh Phalla - Full Stack Developer specializing in React, Next.js, Laravel, and modern web technologies.",
  keywords:
    "Full Stack Developer, React, Next.js, Laravel, Web Development, Cambodia",
  authors: [{ name: "Lanh Phalla" }],
  icons: {
    icon: "/aboutme.png",
    shortcut: "/aboutme.png",
    apple: "/aboutme.png",
  },


  openGraph: {
    title: "Lanh Phalla | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building modern web applications.",
    url: "https://your-domain.com",
    siteName: "Lanh Phalla Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lanh Phalla | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building modern web applications.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}