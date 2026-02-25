import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-24 md:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          404 · Page not found
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          We could not find that page
        </h1>
        <p className="mb-8 text-sm text-slate-400 md:text-base">
          The link you followed might be broken or the page may have been moved.
          Start over from the homepage or explore our services.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-[opacity,transform] duration-200 hover:opacity-95 active:scale-[0.98]"
          >
            Go to homepage
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-sky-300 hover:text-sky-200"
          >
            View our services
          </Link>
        </div>
      </div>
    </main>
  );
}

