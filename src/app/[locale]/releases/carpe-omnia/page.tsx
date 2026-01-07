"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

const lyrics = {
  bs: `CARPE OMNIA

Verse 1 (ARULA)
Upozno sam kuje što ne vole bez keša
Upozno sam bolje što me vole kakav jesam
Ti i ja nikad više ista adresa
Ne jedem bez mesa ulicom push-am S-a 
Oči se crvene ispod cartier stakla
U studiju magla, u studiju magla

Koga da krivim za kraj
Sipam codein u sprite
Cartier je full iced out
Lebdim ko astronaut
Koda pada onda lije
Umjesto s tobom ja sam s njih dvije
Čovjek sam od rutine
Nikad im ne pamtim ime

Malo Ana malo marija
Nikad nije smetala mi malo starija
Najljepšu dušu si za roli prodala
Oči mrtve svjetla grada te pojela

Ref
Buran dan burna godina
Burna noć insomnia
Ruši me bol padam ko domina
Buran život carpe omnia

Verse 2 (ZZ) 
VVS kamenje, kupujem ga za sebe.
Srce mi je hladno, njene suze su otrov.
Nije htjela dilera, htjela je samo mene,
ali ja sam traper – to se ne mijenja.

Vidim samo Bellu, nema mira na vidiku.
Kada ću konačno doći sebi?
Hodam opušteno s parama od droge i par karata.

Zizou, punim Milly-ja i čuvam svoj hak.
Svaki dan sam ovdje vani, Zizou, gledaj – Caliweed je upravo spakovan.
Zizou, punim devetku i Zizou, čuvam svoj hak.
Šta god joj treba od mene – Zizou, da, imam to.
Svaki dan sam na ulici i Zizou, gledaj – skidam ih.

Ref
Buran dan burna godina
Burna noć insomnia
Ruši me bol padam ko domina
Buran život carpe omnia`,
  de: `CARPE OMNIA

Verse 1 (ARULA)
Ich habe Bitches getroffen, die ohne Geld nicht lieben
Ich habe bessere getroffen, die mich lieben, wie ich bin
Du und ich, nie wieder die gleiche Adresse
Ich esse nicht ohne Fleisch, ich pushe den S(-Klasse) durch die Straße
Die Augen sind rot unter dem Cartier-Glas
Im Studio ist Nebel, im Studio ist Nebel

Wem soll ich die Schuld am Ende geben
Ich gieße Codein in die Sprite
Cartier ist komplett iced out
Ich schwebe wie ein Astronaut
Wenn es regnet, dann schüttet es
Anstatt mit dir bin ich mit zwei von ihnen
Ich bin ein Mann der Routine
Ich merke mir nie ihre Namen

Ein bisschen Ana, ein bisschen Marija
Mich hat eine etwas ältere nie gestört
Du hast die schönste Seele für eine Roli verkauft
Tote Augen, die Lichter der Stadt haben dich gefressen

Ref
Stürmischer Tag, stürmisches Jahr
Stürmische Nacht, Insomnia
Der Schmerz reißt mich nieder, ich falle wie ein Domino
Stürmisches Leben, carpe omnia

Verse 2 (ZZ) 
VVS Stones, ich kauf’s für mich.
Mein Herz ist kalt, ihre Tränen sind Gift.
Sie wollte keinen Dealer, sie wollte nur mich,
doch ich bin ein Trapper – das ändert sich nicht.

Ich seh nur Bella, kein Frieden in Sicht.
Wann komm ich endlich klar?
Laufe entspannt mit Drogengeld und ein paar Karat.

Zizou, ich lad die Milly nach und beschütz mein Haq.
Jeden Tag bin ich hier draußen, Zizou, guck – das Caliweed es ist grad verpackt.
Zizou, ich lad die Neuner nach und Zizou, ich beschütz mein Haq.
Egal, was sie von mir braucht – Zizou, ja, ich hab’s.
Jeden Tag bin ich auf der Straße und Zizou, guck – ich schieß die ab.

Ref
Stürmischer Tag, stürmisches Jahr
Stürmische Nacht, Insomnia
Der Schmerz reißt mich nieder, ich falle wie ein Domino
Stürmisches Leben, carpe omnia`,
  en: `CARPE OMNIA

Verse 1 (ARULA)
I've met girls who don't love without cash
I've met better ones who love me for who I am
You and I, never again the same address
I don't eat without meat, pushing an S-class through the street
Eyes turning red under Cartier glass
Fog in the studio, fog in the studio

Who is to blame for the end
I pour codeine into sprite
Cartier is full iced out
Floating like an astronaut
When it rains, it pours
Instead of you, I'm with two of them
I'm a man of routine
I never remember their names

A little Ana, a little Marija
I never minded a little older
You sold the most beautiful soul for a Rollie
Eyes dead, city lights swallowed you up

Ref
Stormy day, stormy year
Stormy night, insomnia
Pain breaks me, I fall like a domino
Stormy life, carpe omnia

Verse 2 (ZZ) 
VVS Stones, I buy them for myself.
My heart is cold, her tears are poison.
She didn't want a dealer, she only wanted me,
but I'm a trapper – that doesn't change.

I only see Bella, no peace in sight.
When will I finally get it straight?
Walking relaxed with drug money and a few carats.

Zizou, I reload the Milly and protect my Haq.
Every day I'm on the street, Zizou, look – the Caliweed is just packed.
Zizou, I reload the nine and Zizou, I protect my Haq.
No matter what she needs from me – Zizou, yes, I have it.
Every day I'm on the street and Zizou, look – I shoot them down.

Ref
Stormy day, stormy year
Stormy night, insomnia
Pain breaks me, I fall like a domino
Stormy life, carpe omnia`,
};

export default function CarpeOmniaRelease() {
  const { language, setLanguage, t } = useLanguage();
  const [activeLyrics, setActiveLyrics] = useState(language);

  // Sync lyrics language with global language on initial load or change
  useEffect(() => {
    setActiveLyrics(language);
  }, [language]);

  const scrollToLyrics = () => {
    const element = document.getElementById("lyrics-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

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

        {/* Text/Lyrics Scroll Button */}
        <button
          onClick={scrollToLyrics}
          className="group flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white px-8 py-3 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white"
        >
          {t("btn_lyrics")}
        </button>

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

        {/* Video Section */}
        <div className="flex w-full flex-col items-center gap-8 py-12" id="lyrics-section">
          <div className="w-full max-w-md aspect-video overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Lyrics Language Selection */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex gap-4">
              {(["bs", "de", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setActiveLyrics(l);
                    setLanguage(l); // Optional: also sync global language
                  }}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all border-b-2 ${
                    activeLyrics === l ? "border-white text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {l === "bs" ? "BOS" : l === "de" ? "GER" : "ENG"}
                </button>
              ))}
            </div>

            {/* Lyrics Display Area */}
            <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <pre className="whitespace-pre-wrap font-sans text-sm font-medium leading-relaxed tracking-wide text-zinc-300">
                {lyrics[activeLyrics]}
              </pre>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}
