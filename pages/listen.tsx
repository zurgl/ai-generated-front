import useAuth from "#/hooks/use-auth";
import { useSse } from "#/hooks/use-sse";
import { logger } from "#/lib/logger";
import { useEffect, useState } from "react";
import { fetcher, Tag } from "#/lib/fetcher";
import { URL_RUN_MODEL } from "#/lib/url";

// header 92px
// Footer 80px
// =========
// 172px

type SummarizeParams = {
  min_length: Number;
  input: String;
};

const stringifiedParamFromPrompt = (input: String) => {
  let modelParams = {
    min_length: 56,
    input: input,
  } as SummarizeParams;
  return JSON.stringify(modelParams, null, 2);
};

function Content() {
  const [_, setMessage] = useState<any>("No Message");
  const [input, setInput] = useState<String | null>(null);
  const [stream] = useSse();

  useEffect(() => {
    if (stream.tag !== "Health") {
      logger("DEBUG", "message", stream);
      setMessage(stream);
    }
  }, [stream]);

  return (
    <div className="dark:bg-slate-800 h-[calc(100vh_-_172px)] flex justify-around items-center bg-pink-700">
      <div className="flex flex-col justify-evenly items-center bg-lime-200 h-4/6 w-5/12">
        <textarea
          className="m-2 h-4/6 w-2/3 bg-gray-800 text-gray-300 font-medium placeholder:italic placeholder:text-zinc-400"
          placeholder="Enter the text you want to resume ..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="
          font-bold
        bg-cyan-700
        text-white
        rounded-xl h-12 w-36"
          onClick={() =>
            fetcher(
              {
                tag: Tag.StartWorkerWithJsonStr,
                json_str: stringifiedParamFromPrompt(input!),
              },
              URL_RUN_MODEL,
            )
          }
        >
          Resume
        </button>
      </div>
      <div className="flex flex-col justify-evenly items-center bg-lime-200 h-4/6 w-5/12">
        <pre className="bg-gray-800 text-white font-medium">
          {JSON.stringify(stream, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default function Listen() {
  const [userId] = useAuth();
  return userId ? <Content /> : null;
}

/*
6.88G
Commissioned officers in the Union Army could be divided in several categories: general officers including Lieutenant General (added on March 2, 1864), Major Generals and Brigadier Generals; field officers including Colonels, Lieutenant Colonels and Majors; and company officers including Captains, First Lieutenants and Second Lieutenants. There was a further distinction between "line" officers – members of the artillery, cavalry or infantry branches – and staff officers, which were part of the various departments and bureaus of the War Department. All line officers outranked staff officers except in cases pertaining to their staff assignment, in which they received their orders from their respective department chiefs. Additionally, Regular general officers outranked Volunteer general officers of the same grade regardless of their date of commission, a feature which could become a subject of contention. The use of brevet ranks was also a common feature of the Union Army.
*/
