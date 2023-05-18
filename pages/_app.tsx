import "#/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import { Header, Footer } from "#/ui/index";
import { Analytics } from "@vercel/analytics/react";
import { useMounted } from "#/hooks";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  const mounted = useMounted();
  const { pathname } = useRouter();

  return mounted ? (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <div
          className={`${inter.variable} ${
            pathname === "/about"
              ? "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
              : "overflow-hidden flex h-screen flex-col"
          }`}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
      {process.env.ENV === "PROD" ? <Analytics /> : null}
    </>
  ) : null;
}
