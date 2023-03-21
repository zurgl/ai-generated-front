/* eslint-disable @next/next/no-img-element */
import { Banner } from "#/ui/index";
import Image from "next/image";
import { useTheme } from "next-themes";

import dialoguePicDark from "../public/image/dialogue-light.png";
import resumePicDark from "../public/image/resume-dark.png";
import sentimentPicDark from "../public/image/sentiment-light.png";

import dialoguePicLight from "../public/image/dialogue-dark.png";
import resumePicLight from "../public/image/resume-light.png";
import sentimentPicLight from "../public/image/sentiment-dark.png";

type ModelCardDataT = {
  title: String;
  alt: string;
  content: String;
  imageSrc: any;
};

const modelCardData = (theme: String) => [
  {
    title: "Summarization",
    alt: "Summarization AI Model",
    content:
      "Don't have time to read this long and complex article. Just want a quick resume. Good new, I guess we have something for you. This model is your perfect match",
    imageSrc: theme === "light" ? resumePicLight : resumePicDark,
  },
  {
    title: "Sentiment analysis",
    alt: "Sentiment analysis AI Model",
    content:
      "Want to build a tools to scan the mood of a market, but don't have enough time. This AI Model has been design to fit your needs. Let's give it a try.",
    imageSrc: theme === "light" ? sentimentPicLight : sentimentPicDark,
  },
  {
    title: "Dialogue Model",
    alt: "Dialogue AI Model",
    content:
      "Do you feel bored today don't know what to do? Let's speak with Our AI model, maybe he'll be able to find the word to warm your soul and give you more motivation",
    imageSrc: theme === "light" ? dialoguePicLight : dialoguePicDark,
  },
];

const ModelCard = ({ data }: { data: ModelCardDataT }) => {
  return (
    <div className="max-w-sm max-h-fit rounded-xl overflow-hidden shadow-lg shadow-gray-900 dark:shadow-gray-50  bg-cyan-900 dark:bg-yellow-100">
      <Image src={data.imageSrc} alt={data.alt} width={500} height={500} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-2xl mb-2 text-gray-50 dark:text-black flex justify-center">
          {data.title}
        </h3>
        <article className="text-base text-gray-50 dark:text-black font-medium">
          {data.content}
        </article>
      </div>
    </div>
  );
};

export default function Card() {
  const { theme } = useTheme();

  return (
    <div
      className="h-screen pt-2 bg-gradient-radial from-gray-400 to-white
    dark:bg-gradient-radial dark:from-blue-900 dark:to-black overflow-auto"
    >
      <div className="pt-20">
        <Banner />
      </div>
      <div className="w-screen flex justify-end items-center py-28">
        <div className="container mx-auto flex justify-evenly items-center">
          {modelCardData(theme!).map((data, index) => {
            return <ModelCard key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
