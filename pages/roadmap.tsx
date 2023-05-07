type Position = "left" | "right";

type ContentBox = {
  deadline: string;
  milestone: string;
  position: Position;
  step: string[];
  style: string;
};

const content = [
  {
    deadline: "First Quarter of 2023",
    milestone: "Rise of an Ambition",
    step: [
      "Release of the documentation",
      "Release of the first models",
      "Release of the website",
    ],
    position: "left" as Position,
    style: "absolute left-0 top-[0rem] h-40 w-1/3 rounded-2xl",
  },
  {
    deadline: "Second Quarter of 2023",
    milestone: "Web 3 Integration Layer",
    step: [
      "Solana integration on devnet",
      "Release of Stable diffusion",
      "Setup Authentification",
    ],
    position: "right" as Position,
    style: "absolute right-0 top-[11rem] h-40 w-1/3 rounded-2xl",
  },
  {
    deadline: "Third Quarter of 2023",
    milestone: "Support to multiple target",
    step: [
      "Aptos and Sui Integration on devnet",
      "Stable version of Stable diffusion",
      "Support mobile device",
    ],
    position: "left" as Position,
    style: "absolute left-0 top-[33rem] h-40 w-1/3 rounded-2xl",
  },
  {
    deadline: "Last Quarter of 2023",
    milestone: "Release in production",
    step: [
      "Setup Continous Integration pipeline",
      "Audit of Smart Contract",
      "Going open source",
    ],
    position: "right" as Position,
    style: "absolute right-0 top-[44rem] h-40 w-1/3 rounded-2xl",
  },
];

const Card = ({ contentBox }: { contentBox: ContentBox }) => {
  const {
    position,
    style: containerStyle,
    deadline,
    milestone,
    step,
  } = contentBox;
  return (
    <div className={containerStyle}>
      <div
        className="bg-gradient-to-r from-black via-blue-700 to-lime-900 p-1 rounded-md
    dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"
      >
        <div className="flex flex-col justify-center items-center bg-slate-300 dark:bg-gray-900 p-2 rounded-md">
          <h2
            className={`${
              position === "left"
                ? "w-full text-left font-bold"
                : "w-full text-right font-bold"
            }`}
          >
            {deadline}
          </h2>
          <h3
            className={`${
              position === "left"
                ? "w-full font-semibold text-right pb-1 underline underline-offset-1"
                : "w-full font-semibold text-left pb-1 underline underline-offset-1"
            }`}
          >
            {milestone}
          </h3>
          <div className="py-1">
            <ul className="w-full font-normal list-disc">
              {step.map((data: String, index: number) => {
                return (
                  <li key={index} className="list-inside">
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Roadmap() {
  return (
    <div className="dark:bg-plant-dark bg-plant h-[calc(100vh_-_172px)] flex justify-center items-center overflow-hidden w-screen, bg-center bg-no-repeat bg-contain bg-slate-200 dark:bg-black">
      <div className="relative w-9/12 h-5/6">
        {content.map((contentBox: ContentBox, index: number) => {
          return <Card contentBox={contentBox} key={index} />;
        })}
      </div>
    </div>
  );
}
