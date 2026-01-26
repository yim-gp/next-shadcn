import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export function CustomAccordion({
  items,
  type = "single",
  defaultValue,
}: {
  items: { value: string; label: string; content: React.ReactNode }[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}) {
  const rootProps = type === "single" 
    ? { type: "single" as const, defaultValue: (defaultValue as string) || items[0].value }
    : { type: "multiple" as const, defaultValue: defaultValue as string[] | undefined };

  return (
    <AccordionPrimitive.Root {...rootProps} className="w-full">
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.value} value={item.value} className="border-b">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className={cn(
              "w-full text-left px-4 py-3 font-medium cursor-pointer bg-muted hover:bg-accent",
              "data-[state=open]:bg-primary data-[state=open]:text-primary-foreground"
            )}>
              {item.label}
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="px-4 py-3 bg-background">
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
