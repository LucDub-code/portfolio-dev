import * as React from "react"

import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full resize-none rounded-none border-none mt-3 pl-3 shadow-none outline-none ring-0 field-sizing-content bg-transparent max-h-16 min-h-16 max-[425px]:min-h-8 max-[425px]:max-h-8 focus-visible:ring-0 placeholder:text-muted-foreground disabled:opacity-50 text-sm max-[425px]:text-[0.7rem] max-[320px]:text-[0.5rem]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
