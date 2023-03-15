import Table from "#/components/Table";
import useAuth from "#/hooks/useAuth";
import { useEffect, useState } from "react";
import { useSse } from "#/hooks/useSse";
import { isValidMessage, useTasks } from "#/hooks/useTasks";
import { URL_RUN_TASK } from "#/lib/url";
import { fetcher, Tag } from "#/lib/fetcher";
import { logger } from "#/lib/logger";

const defaultSeed = 15;

const Content = () => {
  const [seed, setSeed] = useState(defaultSeed);
  const [tasks, setTasks] = useTasks();
  const [message] = useSse();

  useEffect(() => {
    if (isValidMessage(message.tag)) {
      if (message.tag != "WorkerString") {
        setTasks(message);
        logger("DEBUG", "message", message);
      }
    }
  }, [message]);

  return (
    <>
      <br />
      <div className="container flex">
        <button
          type="button"
          className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => fetcher({ seed, tag: Tag.StartWorker }, URL_RUN_TASK)}
        >
          Start
        </button>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-5 h-10 w-16 text-center"
          placeholder="100"
          defaultValue={defaultSeed}
          onKeyDown={(event) => {
            if (event.code == "Enter" || event.code === "NumpadEnter") {
              event.preventDefault();
              event.stopPropagation();
              fetcher({ seed, tag: Tag.StartWorker }, URL_RUN_TASK);
            }
          }}
          required
          onChange={(event) => {
            event.preventDefault();
            setSeed(() => parseInt(event.target.value));
          }}
        />
      </div>
      <div className="container mx-auto my-12">
        <Table tasks={tasks} />
      </div>
    </>
  );
};

export default function Lambda() {
  const [userId] = useAuth();

  return (
    <div className="container mx-auto py-10">{userId ? <Content /> : null}</div>
  );
}
