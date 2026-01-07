import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import { LanguageProvider, Language } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cash Flow Records",
  description: "Official links for Cash Flow Records",
  icons: {
    icon: "/mwp.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const initialLanguage = (["en", "de", "bs"].includes(locale) ? locale : "en") as Language;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        <LanguageProvider initialLanguage={initialLanguage}>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
