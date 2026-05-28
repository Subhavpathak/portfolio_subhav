import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream text-primary">
      <div className="mx-auto max-w-md px-5 text-center">
        <p className="text-8xl font-bold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-4 leading-7 text-secondary">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
