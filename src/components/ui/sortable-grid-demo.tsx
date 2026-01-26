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
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";

const gridInit = [
    { id: "1", label: "A" },
    { id: "2", label: "B" },
    { id: "3", label: "C" },
    { id: "4", label: "D" },
    { id: "5", label: "E" },
    { id: "6", label: "F" },
    { id: "7", label: "G" },
    { id: "8", label: "H" },
];

function SortableGridItem({ id, label }: { id: string; label: string }) {
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
        minWidth: 80,
        minHeight: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 24,
    };

    return (
        <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-2 text-center">
            {label}
        </Card>
    );
}

export function SortableGridDemo() {
    const [items, setItems] = React.useState(gridInit);
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
            <SortableContext items={items.map((i) => i.id)} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-4 gap-4">
                    {items.map((item) => (
                        <SortableGridItem key={item.id} id={item.id} label={item.label} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}
