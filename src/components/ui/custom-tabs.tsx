import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export function CustomTabs({
  tabs,
  defaultValue,
}: {
  tabs: { value: string; label: string; content: React.ReactNode }[];
  defaultValue?: string;
}) {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue || tabs[0].value} className="w-full">
      <TabsPrimitive.List className="flex gap-2 border-b mb-4">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "px-4 py-2 rounded-t-md text-sm font-medium cursor-pointer",
              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted text-muted-foreground"
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => (
        <TabsPrimitive.Content key={tab.value} value={tab.value} className="p-4 border rounded-b-md">
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
