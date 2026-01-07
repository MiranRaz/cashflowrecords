"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

interface StreamingLink {
  platform: string;
  url: string;
}

const streamingLinks: StreamingLink[] = [
  { platform: "Spotify", url: "#" },
  { platform: "Apple Music", url: "#" },
  { platform: "YouTube", url: "#" },
  { platform: "Deezer", url: "#" },
  { platform: "Tidal", url: "#" },
];

export default function CarpeOmniaRelease() {
  const { language, t } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-6 pt-24 sm:p-8 sm:pt-24 font-sans overflow-x-hidden bg-black text-white">
      {/* Background Banner */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-12">
        {/* Back Link */}
        <Link 
          href={`/${language}/releases/`}
          className="self-start text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
        >
          {t("back_to_releases")}
        </Link>

        {/* Release Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
            <Image
              src="/carpeomniacover.png"
              alt="Carpe Omnia Cover"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tighter uppercase italic">CARPE OMNIA</h1>
            <p className="text-xl text-zinc-400 font-bold uppercase tracking-widest italic">ARULA x ZZ</p>
          </div>
        </div>

        {/* Text/Lyrics Link Button */}
        <Link
          href={`/${language}/lyrics/carpe-omnia/`}
          className="group flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white px-8 py-3 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white"
        >
          {t("btn_lyrics")}
        </Link>

        {/* Streaming Links (Linktree Style) */}
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-2">{t("streaming_links_title")}</h3>
          {streamingLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 py-4 text-sm font-black uppercase tracking-widest transition-all hover:bg-white/10 hover:border-white/50"
            >
              {link.platform}
            </a>
          ))}
        </div>

        <footer className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}

