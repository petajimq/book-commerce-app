import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { NextAuthProvider } from "./lib/next-auth/provider";
import { Suspense } from "react";
import LoadingSpinner from "./loading";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Book commerce",
  description: "book commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <NextAuthProvider>
          <Header />
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
}
