/* eslint-disable @next/next/no-img-element */
import Header from "#/ui/Header";
import Footer from "#/ui/Footer";
import Banner from "#/ui/Banner";
import Image from "next/image";
import dialoguePic from "../public/image/dialogue-dark.png";
import resumePic from "../public/image/resume-light.png";
import sentimentPic from "../public/image/sentiment-light.png";

type ModelCardDataT = {
  title: String;
  content: String;
  imageSrc: any;
};

const modelCardData = [
  {
    title: "Summarization",
    content:
      "Don't have time to read this long and complex article. Just want a quick resume. Good new, I guess we have something for you. This model is your perfect match",
    imageSrc: resumePic,
  },
  {
    title: "Sentiment analysis",
    content:
      "Want to build a tools to scan the mood of a market, but don't have enough time. This AI Model has been design to fit your needs. Let's give it a try.",
    imageSrc: sentimentPic,
  },
  {
    title: "Dialogue Model",
    content:
      "Do you feel bored today don't know what to do? Let's speak with Our AI model, maybe he'll be able to find the word to warm your soul and give you more motivation",
    imageSrc: dialoguePic,
  },
];

const ModelCard = ({ data }: { data: ModelCardDataT }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg shadow-gray-900 dark:shadow-gray-50 mb-10 bg-black dark:bg-white mt-5">
      <Image
        src={data.imageSrc}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-2xl mb-2 text-gray-50 dark:text-black flex justify-center">
          {data.title}
        </h3>
        <article className="text-base text-gray-50 dark:text-black">
          {data.content}
        </article>
      </div>
    </div>
  );
};

export default function Card() {
  return (
    <div className="bg-white dark:bg-slate-800 h-screen">
      <Header />
      <Banner />
      <div className="bg-gradient-radial from-blue-900 to-black h-full pt-12">
        <div>
          <div className="container mx-auto flex flex-wrap justify-between py-24 w-5/6 items-center h-full">
            {modelCardData.map((data, index) => {
              return <ModelCard key={index} data={data} />;
            })}
          </div>
        </div>
        <div className="flex items-center justify-center pb-20 pt-16 h-32">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
            <button className="relative rounded-lg bg-black px-7 py-4 text-xl text-yellow-50">
              Follow me on Twitter
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
