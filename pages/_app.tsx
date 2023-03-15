import "#/styles/globals.css";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "#/components/Header";
import Footer from "#/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounter] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounter(true);
    }
  }, []);

  return mounted ? (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  ) : null;
}
