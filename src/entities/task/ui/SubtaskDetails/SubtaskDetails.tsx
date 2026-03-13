import { ArrowRightIcon } from "@/shared/icons";

import type { Comment, Subtask, Task } from "../../model/task";

import { TaskDetailsComments } from "../TaskDetails/TaskDetailsComments";

type SubtaskDetailsProps = {
  subtask: Subtask;
  parentTask: Pick<Task, "id" | "name">;
  onBack: () => void;
  onClose: () => void;
};

export const SubtaskDetails = ({
  subtask,
  parentTask,
  onBack,
  onClose,
}: SubtaskDetailsProps) => {
  const comments: Comment[] = subtask.comments ?? [];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between py-3.5 px-6 border-b border-bgPrimary">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-textMain cursor-pointer"
        >
          <ArrowRightIcon className="h-2.5 rotate-180" />
          <span className="text-sm">Назад к задаче</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-bgPrimary rounded-full w-7.5 flex items-center justify-center cursor-pointer text-textMain py-3"
          aria-label="Закрыть"
        >
          <ArrowRightIcon className="h-2.5" />
        </button>
      </div>

      <div className="flex flex-col justify-between px-6 h-full overflow-y-auto">
        <div className="flex flex-col">
          <div className="text-xs text-lightGray mt-4">{parentTask.name}</div>
          <h4 className="text-2xl text-textMain font-semibold mt-2">
            {subtask.name}
          </h4>
        </div>

        <TaskDetailsComments comments={comments} />
      </div>
    </div>
  );
};
