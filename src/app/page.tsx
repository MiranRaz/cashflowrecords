import Image from "next/image";

interface LinkItem {
  title: string;
  url: string;
  description?: string;
}

const links: LinkItem[] = [
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
    title: "YouTube",
    url: "https://www.youtube.com/@CASHFLOW-t5k",
    description: "Watch our official music videos",
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

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-8 font-sans overflow-hidden">
      {/* Background Banner */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Cash Flow Records Banner"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <main className="relative z-10 flex w-full max-w-md flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Profile Picture */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-zinc-800">
            <Image
              src="/profile.png"
              alt="Cash Flow Records Profile"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tighter text-white drop-shadow-md">
              CASH FLOW RECORDS
            </h1>
            <p className="text-zinc-300 font-medium drop-shadow-sm">
              Record Label & Media Production
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
              className="group flex w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center text-white transition-all hover:scale-[1.02] hover:bg-white/20 hover:shadow-xl"
            >
              <span className="text-lg font-bold tracking-tight">{link.title}</span>
              {link.description && (
                <span className="text-sm text-zinc-300 font-medium">{link.description}</span>
              )}
            </a>
          ))}
        </div>

        <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}
