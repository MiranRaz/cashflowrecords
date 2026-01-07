"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function LandingPage() {
  const { t, language } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col items-center font-sans overflow-x-hidden bg-black text-white">
      {/* Background Banner with stronger contrast and parallax feel */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Cash Flow Records Background"
          fill
          priority
          className="object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center gap-8 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-[10rem] font-black tracking-[-0.08em] uppercase italic leading-[0.8] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              CASH FLOW <br /> 
              <span className="text-white/90">RECORDS</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-white/30" />
              <p className="text-xs md:text-sm font-black tracking-[0.5em] uppercase text-zinc-400">
                {t("hero_subtitle")}
              </p>
              <span className="h-px w-8 bg-white/30" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl animate-in fade-in slide-in-from-bottom-20 delay-500 duration-1000 fill-mode-both">
          <Link
            href={`/${language}/releases/`}
            className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white px-8 py-5 transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 text-sm font-black italic uppercase tracking-widest text-black">{t("btn_explore")}</span>
          </Link>
          <Link
            href={`/${language}/linktree/`}
            className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black/40 backdrop-blur-xl px-8 py-5 transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            <span className="relative z-10 text-sm font-black italic uppercase tracking-widest text-white">{t("btn_social")}</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="h-10 w-px bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative z-10 w-full max-w-6xl px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Link 
            href={`/${language}/releases/carpe-omnia/`}
            className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl group cursor-pointer"
          >
            <Image
              src="/carpeomniacover.png"
              alt="Latest Release"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full">{t("latest_release")}</span>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mt-2">CARPE OMNIA</h2>
            </div>
          </Link>

          <div className="space-y-8 text-left">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
              {t("featured_title").split(".")[0]}. <br /> {t("featured_title").split(".")[1]}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              {t("featured_desc")}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">{t("stat_artists")}</h4>
                <p className="text-3xl font-black italic uppercase tracking-tighter">{t("stat_global")}</p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">{t("stat_reach")}</h4>
                <p className="text-3xl font-black italic uppercase tracking-tighter">{t("stat_worldwide")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="relative z-10 w-full max-w-6xl px-6 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-white/20">
            <div className="h-12 w-12 bg-white flex items-center justify-center rounded-xl mb-6">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            </div>
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{t("service_label_title")}</h3>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider leading-relaxed">
              {t("service_label_desc")}
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-white/20">
            <div className="h-12 w-12 bg-white flex items-center justify-center rounded-xl mb-6">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{t("service_media_title")}</h3>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider leading-relaxed">
              {t("service_media_desc")}
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-white/20">
            <div className="h-12 w-12 bg-white flex items-center justify-center rounded-xl mb-6">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </div>
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{t("service_studio_title")}</h3>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider leading-relaxed">
              {t("service_studio_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-12 px-6 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">
          © {new Date().getFullYear()} Cash Flow Records • EST. 2026 • EUROPE
        </p>
      </footer>
    </div>
  );
}
