import { CommandType, ModelType } from "./types";

export type ProcessModel = {
  command_type: CommandType;
  model_type: ModelType;
  json_input: String;
  task_id: String;
};

type PostData = ProcessModel;

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
