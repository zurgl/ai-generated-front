import { useEffect, useState } from "react";

import { fetcher, logger } from "#/lib";
import { useSse, useAuth } from "#/hooks";
import { URL_PROCESS_TASK } from "#/lib/url";
import { CommandType, ModelType, MessageType } from "#/lib/types";

const stringifiedPrompt = (prompt: String) => {
  return JSON.stringify(
    {
      input: prompt,
    },
    null,
    2,
  );
};

const MessageBox = ({ prediction }: { prediction: string }) => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-lime-200 h-4/6 w-5/12">
      <textarea
        className="m-2 h-4/6 w-2/3 bg-gray-800 text-gray-300 font-medium placeholder:italic placeholder:text-zinc-400"
        placeholder="Enter the text you want to resume ..."
        value={JSON.parse(prediction!)}
      />
    </div>
  );
};

const ErrorBox = () => {
  return <div>Error Box</div>;
};

const WaitingBox = () => {
  return <div>Waiting Box</div>;
};

function Content() {
  const [message, setMessage] = useState<any | null>(null);
  const [error, setError] = useState<String | null>(null);
  const [waiting, setWaiting] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<String | null>(null);
  const [stream] = useSse();

  useEffect(() => {
    if (stream.message_type === MessageType.CommandFailed) {
      logger("DEBUG", "CommandFailed", stream);
      setError("CommandFailed");
    }
    if (stream.message_type === MessageType.CommandSucess) {
      logger("DEBUG", "CommandSucess", stream);
      setWaiting(true);
    }
    if (stream.message_type === MessageType.ModelPrediction) {
      logger("DEBUG", "ModelPrediction", stream);
      setMessage(stream.value);
      setWaiting(false);
    }
  }, [stream]);

  return (
    <div className="dark:bg-slate-800 h-[calc(100vh_-_172px)] flex justify-around items-center bg-pink-700">
      <div className="flex flex-col justify-evenly items-center bg-lime-200 h-4/6 w-5/12">
        <textarea
          className="m-2 h-4/6 w-2/3 bg-gray-800 text-gray-300 font-medium placeholder:italic placeholder:text-zinc-400"
          placeholder="Enter the text you want to resume ..."
          onChange={(e) => setPrompt(e.target.value)}
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
                task_id: "26",
                json_input: stringifiedPrompt(prompt!),
                command_type: CommandType.Process,
                model_type: ModelType.Summarize,
              },
              URL_PROCESS_TASK,
            )
          }
        >
          Resume
        </button>
      </div>
      {/* <div className="flex flex-col justify-evenly items-center bg-lime-200 h-4/6 w-5/12">
        <pre className="bg-gray-800 text-white font-medium">
          {JSON.stringify(stream, null, 2)}
        </pre>
      </div> */}
      {waiting ? <WaitingBox /> : null}
      {message ? (
        <MessageBox prediction={JSON.stringify(message, null, 2)} />
      ) : null}
      {error ? <ErrorBox /> : null}
    </div>
  );
}

export default function Listen() {
  const [userId] = useAuth();
  return userId ? <Content /> : null;
}
