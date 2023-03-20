import { useTheme } from "next-themes";
import { useState } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

function Toggle() {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div onClick={() => themeHandler()}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white dark:bg-slate-800">
      <header className="absolute inset-x-0 top-0 z-50 px-4 ">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 border-b-2 border-gray-500 dark:border-gray-50"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ">
            <a
              href="#"
              className="-m-1.5 p-1.5 dark:text-gray-50 text-2xl text-bold"
            >
              AI Generated
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 bg-slate-80">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
            >
              Product
            </a>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
            >
              Features
            </a>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
            >
              Marketplace
            </a>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
            >
              Company
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 w-8 h-8"
            >
              <span aria-hidden="true">
                <Toggle />
              </span>
            </a>
          </div>
        </nav>
      </header>
      <main className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 translate-y-10 rotate-[25deg] sm:left-[calc(50%-10rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".7"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="5.49"
                x2="-5.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset="1" stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-yellow-300">
              AI Generated
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-white font-semibold">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-800 dark:bg-gray-50 px-3.5 py-2.5 text-xl font-semibold text-white dark:text-gray-900 text-bold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-slate-900/5 py-10 border-gray-700 dark:border-white">
          <p className="text-center text-xl leading-6 text-slate-800 dark:text-gray-50 text-bold">
            © 2023 AI Generated Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
