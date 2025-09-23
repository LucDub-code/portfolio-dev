import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { cn } from "../../lib/utils";
import type { ChatStatus } from "ai";
import {
  Loader2Icon,
  SendIcon,
  SquareIcon,
  XIcon,
} from "lucide-react";
import {
  type ComponentProps,
  type FormEvent,
  type FormEventHandler,
  type HTMLAttributes,
  type KeyboardEventHandler,
} from "react";

export type PromptInputMessage = {
  text?: string;
};

export type PromptInputProps = Omit<
  HTMLAttributes<HTMLFormElement>,
  "onSubmit"
> & {
  onSubmit: (
    message: PromptInputMessage,
    event: FormEvent<HTMLFormElement>
  ) => void;
};

export const PromptInput = ({
  className="mt-4 max-[425px]:mt-2 w-full max-w-2xl mx-auto relative min-h-18 max-[425px]:min-h-auto",
  onSubmit,
  ...props
}: PromptInputProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit({ text: event.currentTarget.message.value }, event);
  };

  return (
    <form
      className={cn(
        "w-full divide-y overflow-hidden rounded-xl border border-border-ide focus-within:border-blue-accent bg-bg-ui shadow-sm pr-12 pt-3 pb-1 max-[425px]:pb-0 pl-3",
        className
      )}
      onSubmit={handleSubmit}
      {...props}
    />
  );
};

export type PromptInputTextareaProps = ComponentProps<typeof Textarea>;

export const PromptInputTextarea = ({
  onChange,
  className,
  placeholder = "Parle moi de Lucas...",
  ...props
}: PromptInputTextareaProps) => {
  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing) {
        return;
      }

      if (e.shiftKey) {
        return;
      }

      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <Textarea
      name="message"
      onChange={(e) => {onChange?.(e);}}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      {...props}
    />
  );
};

export type PromptInputSubmitProps = ComponentProps<typeof Button> & {
  status?: ChatStatus;
};

export const PromptInputSubmit = ({
  className="absolute bottom-1 max-[425px]:bottom-0 max-[425px]:top-1/2 max-[425px]:-translate-y-1/2 right-1",
  status,
  children,
  ...props
}: PromptInputSubmitProps) => {
  let Icon = <SendIcon className="size-4" />;

  if (status === "submitted") {
    Icon = <Loader2Icon className="size-4 animate-spin" />;
  } else if (status === "streaming") {
    Icon = <SquareIcon className="size-4" />;
  } else if (status === "error") {
    Icon = <XIcon className="size-4" />;
  }

  return (
    <Button
      className={cn("gap-1.5 rounded-lg", className)}
      type="submit"
      {...props}
    >
      {children ?? Icon}
    </Button>
  );
};