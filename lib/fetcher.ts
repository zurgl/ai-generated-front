type AbortJob = {
  task_id: String;
  tag: String;
};

type CreateJob = {
  seed: number;
  tag: String;
};

type PauseJob = {
  task_id: String;
  tag: String;
};

type ResumeJob = {
  task_id: String;
  tag: String;
};

type StartModel = {
  json_str: String;
  tag: String;
};

export const enum Tag {
  StartWorker = "StartWorker",
  AbortWorker = "AbortWorker",
  PauseWorker = "PauseWorker",
  ResumeWorker = "ResumeWorker",
  StartWorkerWithJsonStr = "StartWorkerWithJsonStr",
  IsDone = "IsDone",
}

export type CommandType =
  | "StartWorker"
  | "AbortWorker"
  | "PauseWorker"
  | "ResumeWorker";

type PostData = ResumeJob | PauseJob | CreateJob | AbortJob | StartModel;

const options = (data: PostData): RequestInit => {
  return {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

export const fetcher = async (data: PostData, url: string) => {
  try {
    const response = await fetch(url, options(data));

    if (!response.ok) {
      throw new Error(
        `An error has occured: ${response.status} - ${response.statusText}`,
      );
    }
  } catch (error) {
    throw new Error(
      `An error has occured: Fetcher failed, for path: ${url}, with: ${error}`,
    );
  }
};
