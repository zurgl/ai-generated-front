type Position = "left" | "right";

type ContentBox = {
  deadline: String;
  milestone: String;
  position: Position;
  step: String[];
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
  },
];

const Card = ({ contentBox }: { contentBox: ContentBox }) => {
  return (
    <div
      className="bg-gradient-to-r from-black via-blue-700 to-lime-900 p-1 rounded-md
    dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500
    "
    >
      <div className="flex flex-col justify-center items-center bg-white dark:bg-black p-2 rounded-md">
        <h2
          className={`${
            contentBox.position === "left"
              ? "w-full text-left font-bold"
              : "w-full text-right font-bold"
          }`}
        >
          {contentBox.deadline}
        </h2>
        <h3
          className={`${
            contentBox.position === "left"
              ? "w-full font-semibold text-right pb-1 underline underline-offset-1"
              : "w-full font-semibold text-left pb-1 underline underline-offset-1"
          }`}
        >
          {contentBox.milestone}
        </h3>
        <div className="py-1">
          <ul className="w-full font-normal list-disc">
            {contentBox.step.map((data: String, index: number) => {
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
  );
};

export default function Roadmap() {
  return (
    <div className="dark:bg-plant-dark bg-plant h-[calc(100vh_-_172px)] flex justify-center items-center overflow-hidden w-screen, bg-center bg-no-repeat bg-contain">
      <div className="relative w-9/12 h-5/6">
        <div className="absolute left-0 top-0 h-40 w-1/3 rounded-2xl">
          <Card contentBox={content[0]} />
        </div>
        <div className="absolute right-0 top-44 h-40 w-1/3 rounded-2xl">
          <Card contentBox={content[1]} />
        </div>
        <div className="absolute left-0 top-[22rem] h-40 w-1/3 rounded-2xl">
          <Card contentBox={content[2]} />
        </div>
        <div className="absolute right-0 top-[33rem] h-40 w-1/3 rounded-2xl">
          <Card contentBox={content[3]} />
        </div>
      </div>
    </div>
  );
}
