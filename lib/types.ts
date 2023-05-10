export type Message = {
  owner: String;
  task_id: String;
  message_type: MessageType;
  timestamp?: number;
  command_type?: CommandType;
  error?: String;
  value?: String;
};

export const enum ModelType {
  Sentiment = "Sentiment",
  Summarize = "Summarize",
}

export const enum CommandType {
  Process = "Process",
}

export const enum MessageType {
  Health = "Health",
  CommandSucess = "CommandSucess",
  CommandFailed = "CommandFailed",
  ModelKilled = "ModelKilled",
  ModelStarted = "ModelStarted",
  ModelLoaded = "ModelLoaded",
  ModelPrediction = "ModelPrediction",
  ModelError = "ModelError",
}
