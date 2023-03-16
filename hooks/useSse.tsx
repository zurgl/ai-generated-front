import { logger } from "#/lib/logger";
import { URL_SSE } from "#/lib/url";
import { Message, MessageType } from "#/lib/types";
import { useCallback, useEffect, useState } from "react";

const defaultMessage = { timestamp: 0, tag: "Health" } as Message;

export function useSse(): [Message] {
  const [message, setMessage] = useState<Message>(defaultMessage);
  const [mounted, setMounted] = useState(false);
  const [sse, setSse] = useState<EventSource | null>(null);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      seeConnection();
    }

    return () => {
      if (mounted) {
        sse!.close();
        setSse(null);
        logger("DEBUG", "sseHooksCloseEvent", { event: "unMountHooksEvent" });
      }
    };
  }, [sse]);

  const seeConnection = useCallback(() => {
    if (!sse) {
      const sse = new EventSource(URL_SSE, { withCredentials: true });
      logger("DEBUG", "sseReadyStateOnNew", sse.readyState);

      sse.onopen = (openEvent) => {
        logger("DEBUG", "sseOpenEvent", openEvent);
      };

      sse.onmessage = (event) => {
        setMessage((_) => {
          const messageRaw = JSON.parse(event.data);
          const messageKey = Object.keys(messageRaw)[0] as MessageType;
          if (messageKey == "Health") {
            logger("DEBUG", "response", messageRaw[messageKey]);
          }
          return messageRaw[messageKey];
        });
      };

      sse.onerror = (eventError) => {
        logger("ERROR", "sseErrorEvent", eventError);
        sse.close();
      };

      setSse(sse);
    }
  }, [sse]);

  return [message];
}
