import clsx from "clsx";

import { CalendarIcon, PlusIcon } from "@/shared/icons";
import { UserIcon } from "@/shared/icons/UserIcon";

import type { TaskActions } from "../../api/taskActions";
import type { Subtask as SubtaskModel } from "../../model/task";
import { TaskCompletionButton } from "../TaskCompletionButton";

type TaskDetailsSubtasksProps = {
  rootTaskId: number;
  parentPath: number[];
  subtasks: SubtaskModel[];
  columnId: number;
  onSubtaskComplete: TaskActions["toggleSubtaskCompletion"];
  onSubtaskAdd: TaskActions["addSubtask"];
  onSubtaskClick?: (subtaskId: number, columnId: number) => void;
};

export const TaskDetailsSubtasks = ({
  rootTaskId,
  parentPath,
  subtasks,
  columnId,
  onSubtaskComplete,
  onSubtaskClick,
  onSubtaskAdd,
}: TaskDetailsSubtasksProps) => (
  <div className="flex min-h-0 flex-1 flex-col gap-2">
    <div className="min-h-0 overflow-y-auto">
      {subtasks.map((subtask) => (
        <TaskDetailSubtasksItem
          key={subtask.id}
          rootTaskId={rootTaskId}
          subtaskPath={[...parentPath, subtask.id]}
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
      className="flex shrink-0 gap-4 items-center cursor-pointer text-gray text-sm"
      onClick={() =>
        onSubtaskAdd?.(rootTaskId, columnId, parentPath, "Новая подзадача")
      }
    >
      <PlusIcon className="h-2.25" />
      Добавить подзадачу
    </button>
  </div>
);

const TaskDetailSubtasksItem = ({
  rootTaskId,
  title,
  subtaskPath,
  columnId,
  isDone,
  onComplete,
  onClick,
}: {
  rootTaskId: number;
  title: string;
  isDone: boolean;
  subtaskPath: number[];
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
        taskId={rootTaskId}
        columnId={columnId}
        subtaskPath={subtaskPath}
        isDone={isDone}
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
