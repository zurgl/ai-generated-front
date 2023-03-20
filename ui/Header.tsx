import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "#/ui/icons";

type HeadersDataT = {
  brand: String;
  navLinks: {
    link: string;
    text: String;
  }[];
};

const headersData = {
  brand: "AI Generated",
  navLinks: [
    {
      link: "/doc",
      text: "Documentation",
    },
    {
      link: "/roadmap",
      text: "Roadmap",
    },
    {
      link: "/blog",
      text: "Blog",
    },
    {
      link: "/about",
      text: "About",
    },
  ],
} as HeadersDataT;

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="inset-x-0 top-0 z-50 px-4 bg-black">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 border-b-4 border-pink-900 dark:border-gray-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-4xl font-bold text-gray-50 dark:text-gray-900 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
          >
            {headersData.brand}
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 bg-slate-80">
          {headersData.navLinks.map((dt, index) => {
            return (
              <Link
                key={index}
                href={encodeURIComponent(dt.link)}
                className="text-2xl font-semibold leading-6 text-gray-50 dark:text-gray-900  hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                {dt.text}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 w-8 h-8"
          >
            <span aria-hidden="true">
              <div
                onClick={() => {
                  theme === "light" ? setTheme("dark") : setTheme("light");
                }}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </div>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
