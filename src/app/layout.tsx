import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tashi Tsering | Senior System Architect & Software Developer",
  description:
    "Portfolio of Tashi Tsering — Senior System Architect, Software Developer, and AI Infrastructure Enthusiast. Building robust mobile, backend, and AI systems.",
  keywords: [
    "Tashi Tsering",
    "System Architect",
    "Software Developer",
    "AI Infrastructure",
    "Flutter",
    "Python",
    "Next.js",
  ],
  openGraph: {
    title: "Tashi Tsering | Senior System Architect",
    description:
      "Senior System Architect & Software Developer specializing in full-stack development, AI model orchestration, and system optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
