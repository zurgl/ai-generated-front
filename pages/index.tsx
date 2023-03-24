import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-slate-200 dark:bg-slate-800 h-[calc(100vh_-_172px)] flex justify-center items-center overflow-hidden">
      <div className="relative isolate px-6">
        <div className="absolute -top-64 -z-10 transform-gpu blur-3xl opacity-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
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
        <div className="mx-auto max-w-2xl py-16">
          <div className="text-center">
            <h1 className="text-6xl bg-clip-text text-transparent font-bold tracking-tight text-gray-900 pb-8 bg-gradient-to-r from-black via-blue-700 to-lime-900 dark:bg-gradient-to-r dark:from-purple-600 dark:via-pink-600 dark:to-blue-600">
              Rust AI Platform
            </h1>
            <article className="mt-6 text-xl leading-8 text-black dark:text-white font-semibold">
              AI Generated is a project develop during the Grizzly Hackathon.
              The goal is to create the first Rust based AI framework running
              models on-demand. The rent of available GPU computation will be
              perform using the Solana crypto-ecosystem.
            </article>
            <Link
              href="/models"
              className="flex items-center justify-center pt-16 h-32"
            >
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-lg opacity-75 blur
                bg-gradient-to-r from-black via-blue-700 to-lime-900
                dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"
                ></div>
                <button className="relative rounded-lg bg-black px-7 py-4 text-xl text-yellow-50">
                  {/* <Link href="/models">Get Started</Link> */}
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
