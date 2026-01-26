import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function RadixAnimationDemo() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-8">
      {/* Dialog Animation */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Animated Dialog</Button>
        </DialogTrigger>
        <DialogContent className="animate-fade-in animate-duration-500 animate-ease-out">
          <DialogTitle>Animated Dialog</DialogTitle>
          <div className="mt-2">Dialog นี้มีการ fade-in transition</div>
          <DialogClose asChild>
            <Button variant="outline">ปิด</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Popover Animation */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Animated Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="animate-slide-in animate-duration-400 animate-ease-in-out w-64">
          <div className="font-medium mb-2">Animated Popover</div>
          <div>Popover นี้มีการ slide-in transition</div>
        </PopoverContent>
      </Popover>

      {/* Tooltip Animation */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for Animated Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent className="animate-zoom-in animate-duration-300 animate-ease-in">
          Tooltip นี้มีการ zoom-in transition
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
