import clsx from "clsx";

import { CalendarIcon, PlusIcon } from "@/shared/icons";
import { UserIcon } from "@/shared/icons/UserIcon";

import type { TaskModel } from "../..";
import type { TaskActions } from "../../api/taskActions";
import { TaskCompletionButton } from "../TaskCompletionButton";

type TaskDetailsSubtasksProps = {
  task: TaskModel;
  columnId: number;
  onSubtaskComplete: TaskActions["toggleSubtaskCompletion"];
  onSubtaskAdd: TaskActions["addSubtask"];
  onSubtaskClick?: (subtaskId: number, columnId: number) => void;
};

export const TaskDetailsSubtasks = ({
  task,
  columnId,
  onSubtaskComplete,
  onSubtaskClick,
  onSubtaskAdd,
}: TaskDetailsSubtasksProps) => (
  <div className="flex flex-col gap-2 mt-3 flex-1 min-h-0">
    <div className="overflow-y-auto min-h-0">
      {task.subtasks.map((subtask) => (
        <TaskDetailSubtasksItem
          key={subtask.id}
          taskId={task.id}
          subtaskId={subtask.id}
          columnId={columnId}
          title={subtask.name}
          isDone={subtask.isDone}
          onComplete={onSubtaskComplete}
          onClick={() => onSubtaskClick?.(subtask.id, columnId)}
        />
      ))}
    </div>

    <button
      type="button"
      className="flex gap-4 items-center cursor-pointer text-gray text-sm"
      onClick={() => onSubtaskAdd?.(task.id, columnId, "Новая подзадача")}
    >
      <PlusIcon className="h-2.25" />
      Добавить подзадачу
    </button>
  </div>
);

const TaskDetailSubtasksItem = ({
  taskId,
  title,
  subtaskId,
  columnId,
  isDone,
  onComplete,
  onClick,
}: {
  taskId: number;
  title: string;
  isDone: boolean;
  subtaskId: number;
  columnId: number;
  onComplete: TaskActions["toggleSubtaskCompletion"];
  onClick?: () => void;
}) => (
  <div
    className={clsx(
      "flex justify-between items-center border-t border-t-bgPrimary py-1",
      isDone && "opacity-50",
    )}
  >
    <div className="flex gap-3 items-center">
      <TaskCompletionButton
        type="subtask"
        isDone={isDone}
        taskId={taskId}
        columnId={columnId}
        subtaskId={subtaskId}
        toggleSubtaskCompletion={onComplete}
      />

      <span className="text-sm text-textMain cursor-pointer" onClick={onClick}>
        {title}
      </span>
    </div>

    <div className="flex gap-2">
      <button
        type="button"
        className="border border-dashed border-metaGray w-fit rounded-full p-1.75 cursor-pointer"
      >
        <CalendarIcon className="h-3 text-metaGray" />
      </button>

      <button
        type="button"
        className="border border-dashed border-metaGray w-fit rounded-full p-1.75 cursor-pointer"
      >
        <UserIcon className="h-3.75 text-metaGray" />
      </button>
    </div>
  </div>
);
