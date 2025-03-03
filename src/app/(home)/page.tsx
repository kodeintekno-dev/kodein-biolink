import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>

      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="My Image"
          width={128} // Sesuaikan ukuran
          height={128}
          className="rounded-lg shadow-lg"
        />
      </div>

      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
