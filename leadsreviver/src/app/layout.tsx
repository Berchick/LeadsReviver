import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Heebo } from "next/font/google";
import "./globals.css";
import RootNav from "./RootNav";
import { LanguageProvider } from "./LanguageContext";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EchoLynk — Follow-Up Intelligence Layer",
  description: "100 Actions/Day. Zero Guessing. AI-powered follow-up that tells your team who to contact, what to say, and why.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${plusJakartaSans.variable} ${heebo.variable} antialiased`}
      >
        <LanguageProvider>
          <RootNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
