import "#/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import { Header, Footer } from "#/ui/index";
import { Analytics } from "@vercel/analytics/react";
import { useMounted } from "#/hooks";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  const mounted = useMounted();

  return mounted ? (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Header />
        <div
          className={`${inter.variable} font-sans overflow-auto no-scrollbar`}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
      {process.env.ENV === "PROD" ? <Analytics /> : null}
    </>
  ) : null;
}
