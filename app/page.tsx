import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-20 font-sans">
      <header className="w-full max-w-5xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
            Fresh Project
          </span>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center my-auto max-w-3xl text-center space-y-8 py-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Ready for development
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-balance">
            Build something incredible.
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto text-balance">
            Your workspace is fresh and clean. Start building your application by editing{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono text-sm border border-border">
              app/page.tsx
            </code>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-medium h-10 px-5 text-sm hover:opacity-90 transition-opacity"
          >
            Next.js Docs →
          </a>
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background font-medium h-10 px-5 text-sm hover:bg-muted transition-colors"
          >
            Components
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8 text-left">
          <div className="p-4 rounded-xl border border-border bg-card/50">
            <h3 className="font-semibold text-sm mb-1">⚡ Next.js 16</h3>
            <p className="text-xs text-muted-foreground">
              App Router, Turbopack, Server Actions and modern React 19 capabilities.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card/50">
            <h3 className="font-semibold text-sm mb-1">🎨 Tailwind CSS v4</h3>
            <p className="text-xs text-muted-foreground">
              Modern styling engine with CSS variables and dark mode support.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card/50">
            <h3 className="font-semibold text-sm mb-1">🧩 TypeScript</h3>
            <p className="text-xs text-muted-foreground">
              Strict type safety and high developer productivity out of the box.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-5xl flex flex-wrap items-center justify-between text-xs text-muted-foreground border-t border-border pt-6 gap-4">
        <p>Clean starter environment ready to deploy.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-foreground"
          >
            Deploy on Vercel
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
