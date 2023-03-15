import {
  Message,
  MessageType,
  StatusTask,
  TasksMessage,
  ValidMessageType,
} from "#/lib/types";
import { useState } from "react";

export const isValidMessage = (key: MessageType): boolean => {
  return [
    "WorkerPaused",
    "WorkerResumed",
    "WorkerValue",
    "WorkerAborted",
    "WorkerResult",
  ].includes(key);
};

const getStatus = (eventTask: ValidMessageType): StatusTask => {
  switch (eventTask) {
    case "WorkerPaused":
      return "paused";
    case "WorkerResumed":
      return "active";
    case "WorkerValue":
      return "active";
    case "WorkerAborted":
      return "killed";
    case "WorkerResult":
      return "done";
  }
};

const updateTasks = (tasks: TasksMessage, message: Message): TasksMessage => {
  tasks.set(message.task_id, {
    ...tasks.get(message.task_id)!,
    ...message,
    status: getStatus(message.tag as ValidMessageType),
  });
  return tasks;
};

const defaultTasks = new Map();

export function useTasks(): [TasksMessage, (message: Message) => void] {
  const [tasks, setTasks0] = useState<TasksMessage>(defaultTasks);

  const setTasks: (_: Message) => void = (message) =>
    setTasks0((tasks) => updateTasks(tasks, message));

  return [tasks, setTasks];
}
