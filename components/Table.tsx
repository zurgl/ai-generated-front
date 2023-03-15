// TODO: You cannot abort a task if the status is done
// TODO: You should be able to delete a task (maybe not)

import { fetcher, Tag } from "#/lib/fetcher";
import { TasksMessage, Message, messageField } from "#/lib/types";
import { URL_KILL_TASK, URL_PAUSE_TASK, URL_RESUME_TASK } from "#/lib/url";

const TableRow = ({ taskInfo }: { taskInfo: Message }) => {
  const { status, value, user_id, result, task_id, priority, seed } = taskInfo;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">{user_id}</td>
      <td className="px-6 py-4">{task_id}</td>
      <td className="px-6 py-4">{value}</td>
      <td className="px-6 py-4">{result}</td>
      <td className="px-6 py-4">{seed}</td>
      <td className="px-6 py-4">{priority}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div
            className={`h-2.5 w-2.5 rounded-full mr-2 ${
              status === "active"
                ? "bg-blue-500"
                : status === "killed"
                ? "bg-red-500"
                : status === "paused"
                ? "bg-gray-500"
                : "bg-green-500"
            }`}
          ></div>
          {status}
        </div>
      </td>
      <td className="px-6 py-4">
        {status === "active" && (
          <>
            <a
              href="#"
              className="font-medium  text-red-600 dark:text-blue-500 hover:underline"
              onClick={() =>
                fetcher({ task_id, tag: Tag.AbortWorker }, URL_KILL_TASK)
              }
            >
              Abort{" "}
            </a>
            <a
              href="#"
              className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
              onClick={() =>
                fetcher({ task_id, tag: Tag.PauseWorker }, URL_PAUSE_TASK)
              }
            >
              Pause
            </a>
          </>
        )}

        {status === "paused" && (
          <>
            <a
              href="#"
              className="font-medium  text-red-600 dark:text-blue-500 hover:underline"
              onClick={() =>
                fetcher({ task_id, tag: Tag.AbortWorker }, URL_KILL_TASK)
              }
            >
              Abort{" "}
            </a>
            <a
              href="#"
              className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
              onClick={() =>
                fetcher({ task_id, tag: Tag.ResumeWorker }, URL_RESUME_TASK)
              }
            >
              Resume
            </a>
          </>
        )}
        {status === "done" && (
          <a
            href="#"
            className="font-medium  text-green-600 dark:text-blue-500 hover:underline"
            onClick={() => {}}
          >
            Done
          </a>
        )}
        {status === "killed" && (
          <a
            href="#"
            className="font-medium  text-red-600 dark:text-blue-500 hover:underline"
            onClick={() => {}}
          >
            Killed
          </a>
        )}
      </td>
    </tr>
  );
};

export default function Table({ tasks }: { tasks: TasksMessage }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-8/12 mx-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {messageField.map((field: String) => {
              return (
                <th key={`${field}`} scope="col" className="px-6 py-3">
                  {field}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from(tasks.entries()).map((entry: any) => {
            const [taskId, taskInfo]: [String, Message] = entry;
            return <TableRow key={`${taskId!}`} taskInfo={taskInfo} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
