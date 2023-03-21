import "#/styles/globals.css";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import { Header, Footer } from "#/ui/index";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounter] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounter(true);
    }
  }, [mounted]);

  return mounted ? (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Header />
      <div className={`${inter.variable} font-sans overflow-auto no-scrollbar`}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  ) : (
    <div>Loading ...</div>
  );
}
