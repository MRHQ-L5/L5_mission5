import React, { useEffect } from "react";
import { withWebChat } from "@ibm-watson/assistant-web-chat-react";

const ChatBot = ({ createWebChatInstance }) => {
  useEffect(({ createWebChatInstance }) => {
    function onWebChatLoad(instance) {
      instance.render();
    }

    // A web chat configuration options object as documented at:
    // https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration#configurationobject
    const webChatOptions = {
      integrationID: "5c336753-733f-4d00-a8bd-465e909c6789", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "c6e3fb45-31de-49fe-a3f8-76877474f11a", // The ID of your service instance.
      onLoad: onWebChatLoad,
    };

    createWebChatInstance(webChatOptions);
    // eslint-disable-next-line
  }, []);

  return <></>;
};

// Wrap the component with the method returned by `withWebChat`.
export default withWebChat()(ChatBot);
