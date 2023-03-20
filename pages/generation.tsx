import useAuth from "#/hooks/useAuth";
import { useSse } from "#/hooks/useSse";
import { fetcher, Tag } from "#/lib/fetcher";
import { logger } from "#/lib/logger";
import { ModelParams } from "#/lib/types";
import { URL_RUN_MODEL } from "#/lib/url";
import { useEffect, useState } from "react";

const suggestedPrompt = "A strange dog is running after a cat";

const stringifiedParamFromPrompt = (prompt: String) => {
  let modelParams = {
    model_type: "",
    context_input: prompt,
    temperature: 1.0,
    max_length: 30,
  } as ModelParams;
  return JSON.stringify(modelParams, null, 2);
};

const DynamicText = ({ prediction }: { prediction: String }) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(prediction);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 65);
    }
  }, [index, prediction]);

  useEffect(() => {
    setText("");
    setIndex(0);
    setFullText(prediction);
  }, [prediction]);

  return (
    <article className="prose">
      <h3 className="textarea bg-white w-11/12 h-44">{text}</h3>
    </article>
  );
};

const Content = () => {
  const [prompt, setprompt] = useState<String>("");
  const [prediction, setPrediction] = useState<String | null>(null);
  const [message] = useSse();

  useEffect(() => {
    if (message.tag == "WorkerString") {
      logger("DEBUG", "message", message);
      setPrediction(() => {
        console.log("here");
        return message.value!;
      });
    }
  }, [message]);

  return (
    <>
      <div className="grid w-4/5 h-48 mx-auto place-content-center my-10 bg-white dark:bg-slate-800">
        <div className="container flex-auto mr-72 dark:bg-slate-800 bg-white">
          <input
            type="text"
            placeholder={suggestedPrompt}
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(event) => {
              event.preventDefault();
              setprompt(() => event.target.value);
            }}
          />
          <button
            className="btn my-5 mx-5 bg-emerald-700"
            onClick={() =>
              fetcher(
                {
                  tag: Tag.StartWorkerWithJsonStr,
                  json_str: stringifiedParamFromPrompt(prompt),
                },
                URL_RUN_MODEL,
              )
            }
          >
            Generate
          </button>
        </div>
      </div>
      <div className="grid w-11/12 h-48 my-10 mx-auto place-content-center bg-white">
        <div className="container flex w-full max-w-xs">
          {prediction && <DynamicText prediction={prediction} />}
        </div>
      </div>
    </>
  );
};

export default function Generation() {
  const [userId] = useAuth();

  return userId && <Content />;
}
