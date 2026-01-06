import Image from "next/image";

interface LinkItem {
  title: string;
  url: string;
  icon?: string;
}

const links: LinkItem[] = [
  {
    title: "Instagram",
    url: "https://instagram.com/cashflowrecords",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/cashflowrecords",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@cashflowrecords",
  },
  {
    title: "Official Website",
    url: "https://cashflowrecords.vercel.app",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 font-sans">
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
             <span className="text-3xl font-bold">CF</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Cash Flow Records</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Record Label & Media Production</p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 text-center font-medium shadow-sm transition-all hover:scale-[1.02] hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/50"
            >
              {link.title}
            </a>
          ))}
        </div>

        <footer className="mt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Cash Flow Records
        </footer>
      </main>
    </div>
  );
}
