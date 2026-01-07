"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

interface SongLyricsEntry {
  title: string;
  artist: string;
  slug: string;
  coverImage: string;
}

const songs: SongLyricsEntry[] = [
  {
    title: "CARPE OMNIA",
    artist: "ARULA x ZZ",
    slug: "carpe-omnia",
    coverImage: "/carpeomniacover.png",
  },
  // More songs can be added here
];

export default function LyricsListPage() {
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

      <main className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-black tracking-tighter uppercase italic">
            {t("nav_lyrics")}
          </h1>
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm italic">
            {t("browse_lyrics")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {songs.map((song) => (
            <Link
              key={song.slug}
              href={`/${language}/lyrics/${song.slug}/`}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center transition-all hover:scale-[1.02] hover:bg-white/10 hover:border-white/30"
            >
              <div className="relative h-40 w-40 mb-4 overflow-hidden rounded-lg border-2 border-white/10 shadow-xl">
                <Image
                  src={song.coverImage}
                  alt={song.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-black tracking-tight uppercase italic">{song.title}</h2>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-tighter mt-1 group-hover:text-zinc-200 transition-colors">
                {song.artist}
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 pb-8">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}

