import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import dayjs from "dayjs";
import { useRef, useState } from "react";

import { useBoardActions } from "@/features/board-actions";
import { useTaskActions } from "@/features/task-actions";

import { useBoardStore } from "@/entities/board";
import { Column } from "@/entities/column";
import { TaskDetails } from "@/entities/task";
import type { Task as TaskModel } from "@/entities/task/model/task";

import { useClickOutside } from "@/shared/hooks";
import { PlusIcon } from "@/shared/icons";
import { Drawer } from "@/shared/ui";

import { KanbanBoardHeader } from "./KanbanHeader";

const formatDateRu = (value: Date) => dayjs(value).format("D MMMM");

const getLatestCompletedDate = (tasks: TaskModel[]): Date | null => {
  let latestTimestamp = -1;

  for (const task of tasks) {
    if (!task.isDone || !task.completedAt) {
      continue;
    }

    const completedAt = new Date(task.completedAt);
    const timestamp = completedAt.getTime();
    if (!Number.isNaN(timestamp) && timestamp > latestTimestamp) {
      latestTimestamp = timestamp;
    }
  }

  return latestTimestamp >= 0 ? new Date(latestTimestamp) : null;
};

export const KanbanBoard = () => {
  const { addColumn, addTask } = useBoardActions();
  const taskActions = useTaskActions();

  const drawerRef = useRef<HTMLDivElement>(null);

  const [selectedDrawerItem, setSelectedDrawerItem] = useState<{
    taskId: number;
    columnId: number;
    subtaskPath?: number[];
  } | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
  );

  const columns = useBoardStore((state) => state.board.columns);

  const latestCompletedDate = getLatestCompletedDate(
    columns.flatMap((column) => column.tasks),
  );
  const latestCompletedDateLabel = latestCompletedDate
    ? formatDateRu(latestCompletedDate)
    : "нет выполненных задач";

  const selectedTask = selectedDrawerItem
    ? columns
        .find((col) => col.id === selectedDrawerItem.columnId)
        ?.tasks.find((task) => task.id === selectedDrawerItem.taskId)
    : null;

  const selectedItem = (() => {
    if (!selectedTask || !selectedDrawerItem?.subtaskPath?.length) {
      return selectedTask ?? null;
    }
    let node: TaskModel = selectedTask;
    for (const id of selectedDrawerItem.subtaskPath) {
      const next = node.subtasks.find((s) => s.id === id);
      if (!next) {
        return null;
      }
      node = next as TaskModel;
    }
    return node;
  })();

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
    setSelectedDrawerItem({ taskId, columnId });
  };

  const handleCloseTaskDetails = () => {
    setSelectedDrawerItem(null);
  };

  useClickOutside(drawerRef, handleCloseTaskDetails);

  const handleSubtaskClick = (subtaskId: number, columnId: number) => {
    setSelectedDrawerItem((prev) => {
      if (!prev) {
        return null;
      }
      return {
        taskId: prev.taskId,
        columnId,
        subtaskPath: [...(prev.subtaskPath ?? []), subtaskId],
      };
    });
  };

  const handleBackToTask = () => {
    setSelectedDrawerItem((prev) => {
      if (!prev) {
        return null;
      }
      const path = prev.subtaskPath ?? [];
      if (path.length <= 1) {
        return { taskId: prev.taskId, columnId: prev.columnId };
      }
      return {
        ...prev,
        subtaskPath: path.slice(0, -1),
      };
    });
  };

  const subtaskPath = selectedDrawerItem?.subtaskPath ?? [];
  const isRootView = subtaskPath.length === 0;

  return (
    <div className="bg-white rounded-tl-[10px] pl-5 h-full">
      <KanbanBoardHeader lastCompletedTaskDate={latestCompletedDateLabel} />

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
                addTask={addTask}
              />
            ))}
          </div>
        </DndContext>

        <Drawer isOpen={!!selectedItem} drawerRef={drawerRef}>
          {selectedDrawerItem && selectedItem && selectedTask && (
            <TaskDetails
              item={selectedItem}
              rootTaskId={selectedDrawerItem.taskId}
              subtaskPath={subtaskPath}
              columnId={selectedDrawerItem.columnId}
              taskActions={taskActions}
              onClose={handleCloseTaskDetails}
              onSubtaskClick={handleSubtaskClick}
              onBackToTask={handleBackToTask}
              isRootTask={isRootView}
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
