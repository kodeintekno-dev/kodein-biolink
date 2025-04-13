import { BodyWrapper } from "@/components/BodyWrapper";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Kodein Project",
  description: "Belajar dan Praktek membuat website dengan kodein",
  icons: {
    icon: "/kodein.ico",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <BodyWrapper>
        <RootProvider>{children}</RootProvider>
      </BodyWrapper>
    </html>
  );
}
