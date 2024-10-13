import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to Cineamo</h1>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/cinemas" className="text-lg font-semibold text-blue-500 hover:underline">
                Browse Cinemas
              </Link>
            </li>
            <li>
              <Link href="/movies" className="text-lg font-semibold text-blue-500 hover:underline">
                Browse Movies
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
