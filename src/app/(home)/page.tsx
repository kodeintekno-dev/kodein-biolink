import Link from "next/link";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col text-center justify-between">
      <h1
        className={`mb-4 mt-8 font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${orbitron.className}`}
      >
        BioLink Web Project
      </h1>
      <div className="mb-12">
        <p
          className={`text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto italic opacity-90 ${orbitron.className}`}
        >
          🔗 Satukan semua link pentingmu dalam satu tempat yang keren dan mudah
          diakses!
        </p>

        <Link href="/docs">
          <button
            className={`mt-6 px-6 py-3 w-fit bg-yellow-400 text-white text-lg sm:text-xl font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 active:scale-95 cursor-pointer ${orbitron.className}`}
          >
            Mulai
          </button>
        </Link>
      </div>
    </main>
  );
}
