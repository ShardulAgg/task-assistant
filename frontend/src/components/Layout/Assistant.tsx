import React, { FC } from "react";
import {
    Thread,
    ThreadWelcome,
    Composer,
    type ThreadConfig,
  } from "@assistant-ui/react";
import "@assistant-ui/react/styles/index.css";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
 
export const MarkdownText = makeMarkdownText();

const Assistant : FC<ThreadConfig> = (config) => {
  return (
    <Thread.Root config={config}>
      <Thread.Viewport>
        <ThreadWelcome />
        <Thread.Messages />
        <Thread.ViewportFooter>
          <Thread.ScrollToBottom />
          <Composer />
        </Thread.ViewportFooter>
      </Thread.Viewport>
    </Thread.Root>
  );
};

export default Assistant;