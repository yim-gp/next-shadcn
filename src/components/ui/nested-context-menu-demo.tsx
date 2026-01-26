import * as React from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuLabel,
  ContextMenuGroup,
} from "./context-menu";

export function NestedContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="inline-block p-4 border rounded cursor-pointer select-none bg-muted hover:bg-accent">
          คลิกขวาหรือกดค้างที่นี่ (Nested Context Menu)
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>เมนูหลัก</ContextMenuLabel>
        <ContextMenuItem>Action 1</ContextMenuItem>
        <ContextMenuItem>Action 2</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>เมนูย่อย 1</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Sub Action 1</ContextMenuItem>
            <ContextMenuItem>Sub Action 2</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>เมนูย่อยซ้อน</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Deep Action 1</ContextMenuItem>
                <ContextMenuItem>Deep Action 2</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>Group Action 1</ContextMenuItem>
          <ContextMenuItem>Group Action 2</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
