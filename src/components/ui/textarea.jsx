import * as React from "react";

import { cn } from "@/lib/utils";
function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-input/20 px-2 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-xs/relaxed dark:bg-input/30",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
