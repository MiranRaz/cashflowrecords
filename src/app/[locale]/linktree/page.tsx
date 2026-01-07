"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

interface LinkItem {
  title: string;
  url: string;
  description?: string;
}

const links: LinkItem[] = [
  {
    title: "YouTube",
    url: "https://www.youtube.com/@CASHFLOW-t5k",
    description: "Watch our official music videos",
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/21qJshnWk8F3ZhYw2Q4IEM",
    description: "Listen to the latest from Arula",
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com/us/artist/arula/1827666894",
    description: "Stream Arula on Apple Music",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/neverr_easy",
    description: "@neverr_easy",
  },
  {
    title: "TikTok",
    url: "https://tiktok.com/@neverr_easy",
    description: "@neverr_easy",
  },
];

export default function Linktree() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-8 font-sans overflow-hidden bg-black text-white">
      {/* Background Banner */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Cash Flow Records Banner"
          fill
          priority
          className="object-cover opacity-70"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <main className="relative z-10 flex w-full max-w-md flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Profile Picture (mwp.png) */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-2xl bg-zinc-800">
            <Image
              src="/mwp.png"
              alt="Cash Flow Records Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tighter drop-shadow-lg uppercase italic">
              CASH FLOW RECORDS
            </h1>
            <p className="text-zinc-200 font-semibold drop-shadow-md tracking-wide uppercase">
              {t("nav_linktree")}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col items-center justify-center rounded-2xl border border-white/30 bg-black/50 backdrop-blur-lg p-5 text-center transition-all hover:scale-[1.02] hover:bg-white/10 hover:border-white/60 hover:shadow-2xl"
            >
              <span className="text-lg font-black tracking-tight uppercase italic">{link.title}</span>
              {link.description && (
                <span className="text-xs text-zinc-300 font-bold uppercase tracking-tighter mt-1 group-hover:text-white transition-colors">
                  {link.description}
                </span>
              )}
            </a>
          ))}
        </div>

        <footer className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 drop-shadow-sm">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}
