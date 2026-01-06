import Image from "next/image";

interface LinkItem {
  title: string;
  url: string;
  description?: string;
}

const links: LinkItem[] = [
  {
    title: "Instagram",
    url: "https://instagram.com/cashflowrecords",
    description: "Follow us for behind-the-scenes content",
  },
  {
    title: "Twitter / X",
    url: "https://twitter.com/cashflowrecords",
    description: "Stay updated with our latest news",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@cashflowrecords",
    description: "Watch our music videos and sessions",
  },
  {
    title: "Spotify",
    url: "https://spotify.com/artist/cashflowrecords",
    description: "Listen to our latest releases",
  },
  {
    title: "Official Website",
    url: "https://cashflowrecords.vercel.app",
    description: "Visit our main hub",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-8 font-sans transition-colors duration-500">
      <main className="flex w-full max-w-md flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-xl ring-4 ring-white dark:ring-zinc-800">
             <span className="text-4xl font-black">CF</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tighter">CASH FLOW RECORDS</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">Record Label & Media Production</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-sm p-5 text-center transition-all hover:scale-[1.02] hover:bg-white hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:bg-zinc-900 dark:hover:shadow-zinc-900/20"
            >
              <span className="text-lg font-bold tracking-tight">{link.title}</span>
              {link.description && (
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{link.description}</span>
              )}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
           {/* Placeholder for social icons if needed */}
        </div>

        <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}
