import * as React from "react"

import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full resize-none rounded-none border-none shadow-none outline-none ring-0 field-sizing-content bg-transparent h-14 max-[425px]:h-6 focus-visible:ring-0 placeholder:text-muted-foreground disabled:opacity-50 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
