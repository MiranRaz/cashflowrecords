"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "de" | "bs";

interface Translations {
  [key: string]: {
    en: string;
    de: string;
    bs: string;
  };
}

export const translations: Translations = {
  // Navigation
  nav_home: { en: "HOME", de: "STARTSEITE", bs: "POČETNA" },
  nav_linktree: { en: "LINKTREE", de: "LINKS", bs: "LINKTREE" },
  nav_releases: { en: "RELEASES", de: "RELEASES", bs: "RELEASES" },

  // Landing Page
  hero_subtitle: { 
    en: "Media & Music Production", 
    de: "Medien- & Musikproduktion", 
    bs: "Media i Muzička Produkcija" 
  },
  btn_explore: { en: "EXPLORE RELEASES", de: "RELEASES ENTDECKEN", bs: "ISTRAŽI RELEASES" },
  btn_social: { en: "SOCIAL LINKS", de: "SOCIAL LINKS", bs: "SOCIJALNI LINKOVI" },
  
  featured_title: { en: "PUSHING BOUNDARIES.", de: "GRENZEN VERSCHIEBEN.", bs: "POMIJERANJE GRANICA." },
  featured_desc: { 
    en: "Cash Flow Records is more than just a label. We are a creative powerhouse specializing in high-end media production, strategic artist management, and international music distribution.", 
    de: "Cash Flow Records ist mehr als nur ein Label. Wir sind ein kreatives Kraftpaket, das sich auf High-End-Medienproduktion, strategisches Künstlermanagement und internationalen Musikvertrieb spezialisiert hat.", 
    bs: "Cash Flow Records je više od label-a. Mi smo kreativna snaga specijalizovana za vrhunsku medijsku produkciju, strateški menadžment umjetnika i međunarodnu distribuciju muzike." 
  },
  latest_release: { en: "LATEST RELEASE", de: "NEUESTE VERÖFFENTLICHUNG", bs: "NAJNOVIJI RELEASE" },
  
  stat_artists: { en: "ARTISTS", de: "KÜNSTLER", bs: "UMJETNICI" },
  stat_reach: { en: "REACH", de: "REICHWEITE", bs: "DOSEG" },
  stat_global: { en: "GLOBAL", de: "GLOBAL", bs: "GLOBALNO" },
  stat_worldwide: { en: "WORLDWIDE", de: "WELTWEIT", bs: "ČITAV SVIJET" },

  service_label_title: { en: "RECORD LABEL", de: "MUSIKLABEL", bs: "RECORD LABEL" },
  service_label_desc: { 
    en: "International distribution, marketing, and strategic growth for the next generation of sound.", 
    de: "Internationaler Vertrieb, Marketing und strategisches Wachstum für die nächste Generation des Sounds.", 
    bs: "Međunarodna distribucija, marketing i strateški rast za sljedeću generaciju zvuka." 
  },
  service_media_title: { en: "MEDIA PRODUCTION", de: "MEDIENPRODUKTION", bs: "MEDIA PRODUKCIJA" },
  service_media_desc: { 
    en: "Cinematic music videos, professional photography, and high-end digital content creation.", 
    de: "Kinoreife Musikvideos, professionelle Fotografie und hochwertige Erstellung digitaler Inhalte.", 
    bs: "Filmski muzički spotovi, profesionalna fotografija i vrhunsko kreiranje digitalnog sadržaja." 
  },
  service_studio_title: { en: "IN-HOUSE STUDIO", de: "HAUSEIGENES STUDIO", bs: "STUDIO" },
  service_studio_desc: { 
    en: "World-class recording, mixing, and mastering services powered by industry-leading gear.", 
    de: "Weltklasse Aufnahme-, Misch- und Mastering-Services, unterstützt durch branchenführendes Equipment.", 
    bs: "Usluge snimanja, miksanja i masteringa svjetske klase uz vrhunsku opremu." 
  },

  // Linktree Page
  linktree_subtitle: { en: "OFFICIAL LINKS", de: "OFFIZIELLE LINKS", bs: "ZVANIČNI LINKOVI" },
  
  // Navigation
  nav_lyrics: { en: "LYRICS", de: "SONGTEXTE", bs: "TEKSTOVI" },
  
  // Releases Page
  releases_title: { en: "RELEASES", de: "RELEASES", bs: "RELEASES" },
  releases_subtitle: { en: "LATEST FROM CASH FLOW RECORDS", de: "NEUES VON CASH FLOW RECORDS", bs: "NAJNOVIJE OD CASHFLOW RECORDS" },

  // Carpe Omnia Page
  btn_lyrics: { en: "TEXT / LYRICS", de: "SONGTEXT", bs: "TEKST" },
  streaming_links_title: { en: "STREAM NOW", de: "JETZT STREAMEN", bs: "SLUŠAJ SADA" },

  // Shared / Helpers
  back_to_releases: { en: "← BACK TO RELEASES", de: "← ZURÜCK ZU RELEASES", bs: "← NAZAD NA RELEASES" },
  back_to_lyrics: { en: "← BACK TO LYRICS", de: "← ZURÜCK ZU SONGTEXTEN", bs: "← NAZAD NA TEKSTOVE" },
  lyrics_and_video: { en: "LYRICS & VIDEO", de: "SONGTEXT & VIDEO", bs: "TEKST I VIDEO" },
  browse_lyrics: { en: "BROWSE SONG TEXTS & VIDEOS", de: "SONGTEXTE & VIDEOS DURCHSUCHEN", bs: "PREGLEDAJ TEKSTOVE I VIDEO SNIMKE" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  initialLanguage 
}: { 
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(() => {
    if (initialLanguage) return initialLanguage;
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language");
      if (savedLang && (savedLang === "en" || savedLang === "de" || savedLang === "bs")) {
        return savedLang as Language;
      }
    }
    return "en";
  });

  const [prevInitialLanguage, setPrevInitialLanguage] = useState(initialLanguage);

  // Sync language if initialLanguage changes (e.g. on navigation)
  if (initialLanguage !== prevInitialLanguage) {
    setPrevInitialLanguage(initialLanguage);
    setLanguage(initialLanguage || "en");
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string) => {
    if (!translations[key]) return key;
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
