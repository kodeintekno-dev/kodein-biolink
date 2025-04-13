"use client";

import { usePathname } from "next/navigation";

export function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <body
      className={`flex flex-col min-h-screen ${
        isHome ? "bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat" : ""
      }`}
    >
      {children}
    </body>
  );
}
