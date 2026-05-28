import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink text-white">
      <div className="mx-auto max-w-md px-5 text-center">
        <p className="text-8xl font-semibold text-mint">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Page not found</h1>
        <p className="mt-4 leading-7 text-white/60">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-mint px-5 py-3 font-semibold text-ink transition hover:bg-aqua"
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
