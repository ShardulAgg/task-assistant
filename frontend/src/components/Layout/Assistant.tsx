import React, { FC } from "react";
import {
    Thread,
    ThreadWelcome,
    Composer,
    type ThreadConfig,
    AssistantRuntimeProvider,
    useEdgeRuntime
} from "@assistant-ui/react";
import "@assistant-ui/react/styles/index.css";
// import { makeMarkdownText } from "@assistant-ui/react-markdown";

// export const MarkdownText = makeMarkdownText();

const Assistant: FC<ThreadConfig> = (config) => {
    const runtime = useEdgeRuntime({
        api: "http://localhost/chat/",
    });

    return (
        <div style={{width:600}}>
<AssistantRuntimeProvider runtime={runtime}>
    <Thread.Root config={config}>
        <Thread.Viewport style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 0px)', marginTop: '0px' }}>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <ThreadWelcome />
                <Thread.Messages />
            </div>
            <Thread.ViewportFooter style={{ position: 'sticky', bottom: 0, backgroundColor: 'white' }}>
                <Thread.ScrollToBottom />
                <Composer />
            </Thread.ViewportFooter>
        </Thread.Viewport>
    </Thread.Root>
</AssistantRuntimeProvider>
        </div>
    );
};


export default Assistant;