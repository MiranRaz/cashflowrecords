import Image from "next/image";
import Link from "next/link";

interface ReleaseItem {
  title: string;
  artist: string;
  date: string;
  url: string;
  coverImage: string;
}

const releases: ReleaseItem[] = [
  {
    title: "CARPE OMNIA",
    artist: "ARULA x ZZ",
    date: "2026",
    url: "#",
    coverImage: "/carpeomniacover.png",
  },
];

export default function Releases() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-6 pt-24 sm:p-8 sm:pt-24 font-sans overflow-hidden bg-black text-white">
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

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-1">
            <h1 className="text-5xl font-black tracking-tighter drop-shadow-lg uppercase italic">
              RELEASES
            </h1>
            <p className="text-zinc-200 font-semibold drop-shadow-md tracking-wide">
              LATEST FROM CASH FLOW RECORDS
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6">
          {releases.map((release) => (
            <Link
              key={release.title}
              href="/releases/carpe-omnia"
              className="group flex flex-col items-center rounded-2xl border border-white/30 bg-black/50 backdrop-blur-lg p-6 text-center transition-all hover:scale-[1.02] hover:bg-white/10 hover:border-white/60 hover:shadow-2xl"
            >
              <div className="relative h-48 w-48 mb-4 overflow-hidden rounded-lg border-2 border-white/20 shadow-xl">
                <Image
                  src={release.coverImage}
                  alt={release.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-black tracking-tight uppercase italic">{release.title}</h2>
              <p className="text-sm text-zinc-300 font-bold uppercase tracking-tighter mt-1 group-hover:text-white transition-colors">
                {release.artist}
              </p>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-2">
                {release.date}
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 drop-shadow-sm">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}

