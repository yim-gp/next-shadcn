import * as React from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";

const itemsInit = [
    { id: "1", label: "Item 1" },
    { id: "2", label: "Item 2" },
    { id: "3", label: "Item 3" },
    { id: "4", label: "Item 4" },
];

function SortableItem({ id, label }: { id: string; label: string }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
    };

    return (
        <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className="mb-2 p-4">
            {label}
        </Card>
    );
}

export function SortableListDemo() {
    const [items, setItems] = React.useState(itemsInit);
    const sensors = useSensors(useSensor(PointerSensor));

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={({ active, over }) => {
                if (over && active.id !== over.id) {
                    const oldIndex = items.findIndex((i) => i.id === active.id);
                    const newIndex = items.findIndex((i) => i.id === over.id);
                    setItems(arrayMove(items, oldIndex, newIndex));
                }
            }}
        >
            <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
                {items.map((item) => (
                    <SortableItem key={item.id} id={item.id} label={item.label} />
                ))}
            </SortableContext>
        </DndContext>
    );
}
