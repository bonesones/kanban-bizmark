import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { useRef, useState } from "react";

import { useBoardActions } from "@/features/board-actions";
import { useTaskActions } from "@/features/task-actions";

import { useBoardStore } from "@/entities/board";
import { Column } from "@/entities/column";
import { SubtaskDetails, TaskDetails } from "@/entities/task";

import { useClickOutside } from "@/shared/hooks";
import { PlusIcon } from "@/shared/icons";
import { Drawer } from "@/shared/ui";

import { KanbanBoardHeader } from "./KanbanHeader";

export const KanbanBoard = () => {
  const { addColumn } = useBoardActions();
  const taskActions = useTaskActions();

  const drawerRef = useRef<HTMLDivElement>(null);

  const [selectedDrawerItem, setSelectedDrawerItem] = useState<
    | {
        type: "task";
        taskId: number;
        columnId: number;
      }
    | {
        type: "subtask";
        taskId: number;
        subtaskId: number;
        columnId: number;
      }
    | null
  >(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
  );

  const columns = useBoardStore((state) => state.board.columns);

  const selectedTask =
    selectedDrawerItem?.type === "task" ||
    selectedDrawerItem?.type === "subtask"
      ? columns
          .find((col) => col.id === selectedDrawerItem.columnId)
          ?.tasks.find((task) => task.id === selectedDrawerItem.taskId)
      : null;

  const selectedSubtask =
    selectedDrawerItem?.type === "subtask" && selectedTask
      ? (selectedTask.subtasks.find(
          (s) => s.id === selectedDrawerItem.subtaskId,
        ) ?? null)
      : null;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      return;
    }

    const taskId: number | undefined = active.data.current?.taskId;
    const columnId: number | undefined = over.data.current?.columnId;

    if (!taskId || !columnId) {
      return;
    }

    taskActions.moveTask(taskId, columnId);
  };

  const handleTaskClick = (taskId: number, columnId: number) => {
    setSelectedDrawerItem({ type: "task", taskId, columnId });
  };

  const handleCloseTaskDetails = () => {
    setSelectedDrawerItem(null);
  };

  useClickOutside(drawerRef, handleCloseTaskDetails);

  const handleSubtaskClick = (subtaskId: number, columnId: number) => {
    if (!selectedTask) {
      return;
    }
    setSelectedDrawerItem({
      type: "subtask",
      taskId: selectedTask.id,
      subtaskId,
      columnId,
    });
  };

  const handleBackToTask = () => {
    if (!selectedTask || !selectedDrawerItem) {
      return;
    }
    setSelectedDrawerItem({
      type: "task",
      taskId: selectedTask.id,
      columnId: selectedDrawerItem.columnId,
    });
  };

  return (
    <div className="bg-white rounded-tl-[10px] pl-5 h-full">
      <KanbanBoardHeader />

      <div className="mt-4 flex items-start h-full">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <div className="overflow-x-auto flex h-full gap-5">
            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                taskActions={taskActions}
                onTaskClick={handleTaskClick}
              />
            ))}
          </div>
        </DndContext>

        <Drawer isOpen={!!selectedTask} drawerRef={drawerRef}>
          {selectedTask &&
            selectedDrawerItem?.type === "task" &&
            selectedDrawerItem && (
              <TaskDetails
                task={selectedTask}
                columnId={selectedDrawerItem.columnId}
                taskActions={taskActions}
                onClose={handleCloseTaskDetails}
                onSubtaskClick={handleSubtaskClick}
              />
            )}

          {selectedTask &&
            selectedSubtask &&
            selectedDrawerItem?.type === "subtask" && (
              <SubtaskDetails
                subtask={selectedSubtask}
                parentTask={{ id: selectedTask.id, name: selectedTask.name }}
                onBack={handleBackToTask}
                onClose={handleCloseTaskDetails}
              />
            )}
        </Drawer>

        <div className="flex-1 pl-5 min-w-96 shrink-0">
          <button
            type="button"
            onClick={() => addColumn("Новый столбец")}
            className="pt-3 text-base flex gap-3 items-center text-gray cursor-pointer "
          >
            <PlusIcon className="h-3" />
            Добавить столбец
          </button>
        </div>
      </div>
    </div>
  );
};
