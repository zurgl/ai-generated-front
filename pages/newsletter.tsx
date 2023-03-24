import { useState } from "react";
import { ToastContainer, toast, Theme } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

export default function NewsLetter() {
  const [_userEmail, setUserEmail] = useState<String | null>(null);
  const { theme } = useTheme();

  // const callAPI = async () => {
  //   try {
  //     const res = await fetch(`/api/send-email`);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const notify = () =>
    toast.error("Subscription not open Yet!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme! as Theme,
    });

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
        <div className="mx-auto max-w-2xl py-2">
          <div className="text-center flex-col justify-center items-center">
            <h1 className="text-6xl bg-clip-text text-transparent font-bold tracking-tight text-gray-900 pb-8 bg-gradient-to-r from-black via-blue-700 to-lime-900 dark:bg-gradient-to-r dark:from-purple-600 dark:via-pink-600 dark:to-blue-600">
              Subscribe
            </h1>
            <article className="mt-6 text-2xl leading-8 text-gray-800 dark:text-white font-semibold">
              Don&apos;t miss the lastest news from{" "}
              <span className="text-cyan-800 dark:text-pink-400">
                AI Generated
              </span>{" "}
              and subscribe to the newsletter. Twice a week content will be send
              to your mailbox.
            </article>
            <div className="mt-10 flex max-w-md mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => {
                  e.preventDefault;
                  setUserEmail(e.target.value);
                }}
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-white font-extrabold shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6 bg-gray-800"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-cyan-800 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ml-2"
                onClick={notify}
              >
                Validate
              </button>
              <ToastContainer
                position="bottom-center"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
                className="mb-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
curl -s --user 'api:1d9ab571a789e1444920c0f647c63dfa-87c34c41-26c61e12' \
  https://api.mailgun.net/v3/mgx.dnb.lol/messages \
  -F from='AI Generated mailgun@ai-generated.dev' \
  -F to='elayar.yacine@gmail.com' \
  -F subject='Mailgun is working' \
  -F text='Testing some Mailgun awesomeness!'
*/
