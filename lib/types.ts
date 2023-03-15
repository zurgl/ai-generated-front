export type Message = {
  user_id: String;
  task_id: String;
  seed: number;
  tag: MessageType;
  priority: number;
  status: StatusTask;
  value?: String;
  result?: String;
  timestamp?: number;
};

export const messageField = [
  "User Id",
  "Task ID",
  "Value",
  "Result",
  "Seed",
  "Priority",
  "Status",
  "Action",
];

export type MessageType =
  | "CommandSucess"
  | "CommandFailed"
  | "WorkerPaused"
  | "WorkerResumed"
  | "WorkerValue"
  | "WorkerResult"
  | "WorkerAborted"
  | "WorkerString"
  | "Health";

export type ValidMessageType =
  | "WorkerPaused"
  | "WorkerResumed"
  | "WorkerValue"
  | "WorkerAborted"
  | "WorkerResult";

export type TaskID = String;

export type TasksMessage = Map<TaskID, Message>;

export type StatusTask = "active" | "killed" | "done" | "paused";

export type ModelParams = {
  model_type: String;
  context_input: String;
  temperature: number;
  max_length: number;
};
