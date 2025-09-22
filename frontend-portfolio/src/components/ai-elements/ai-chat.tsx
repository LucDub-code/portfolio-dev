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
  PromptInputMessage,
} from './prompt-input';
import { MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

const AiChat = () => {

  const [inputValue, setInputValue] = useState('');

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: 'http://localhost:3000/api/ai/chat',
    }),
  });

  const handleSubmit = (message: PromptInputMessage, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.text?.trim()) {
      sendMessage({ text: message.text });
      setInputValue('');
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
              title="Démarrez une conversation"
              description="Tapez votre message dans le champ ci-dessous"
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
                      case 'text':
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
        <PromptInputTextarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <PromptInputSubmit
          status={status === 'streaming' ? 'streaming' : 'ready'}
          disabled={!inputValue.trim()}
        />
      </PromptInput>
    </div>
  );
};

export default AiChat;