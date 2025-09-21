import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from './conversation';
import {
  Message,
  MessageAvatar,
  MessageContent
} from './message';
// @ts-ignore
import userAvatar from '../../assets/icons/chat/user-avatar.svg';
// @ts-ignore
import aiAvatar from '../../assets/icons/chat/ai-avatar.svg';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from './prompt-input';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

const AiChat = () => {

  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-8 relative rounded-lg border bg-bg-chat
  border-border-ide">
      <Conversation>
      <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState
              icon={<MessageSquare className="size-12" />}
              title="Démarrer une conversation"
              description="Tapez votre message pour commencer à discuter"
            />
          ) : (
            messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageAvatar
                  src={message.role === 'user' ? userAvatar : aiAvatar}
                  name={message.role === 'user' ? 'You' : 'AI'}
                />
                <MessageContent>
                  {message.parts.map((part: any, i: number) => {
                    switch (part.type) {
                      case 'text': // we don't use any reasoning or tool calls in this example
                        return (
                          <div key={`${message.id}-${i}`}>
                            {part.text}
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
                </MessageContent>
              </Message>
            ))
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea value={input} onChange={(e) => setInput(e.currentTarget.value)} />
        <PromptInputSubmit
          status={status === 'streaming' ? 'streaming' : 'ready'}
          disabled={!input.trim()} />
      </PromptInput>
    </div>
  );
};

export default AiChat;