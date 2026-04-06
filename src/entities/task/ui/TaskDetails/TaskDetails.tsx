import type { SubtaskModel, TaskActions, TaskModel } from "../..";

import { TaskDetailsComments } from "./TaskDetailsComments";
import { TaskDetailsHeader } from "./TaskDetailsHeader";
import { TaskDetailsMeta } from "./TaskDetailsMeta";
import { TaskDetailsSubtasks } from "./TaskDetailsSubtasks";

type TaskDetailsProps = {
  item: TaskModel | SubtaskModel;
  /** Id корневой задачи в колонке */
  rootTaskId: number;
  /** Путь id до текущего узла; пустой — открыта корневая задача */
  subtaskPath: number[];
  columnId: number;
  taskActions: TaskActions;
  onClose: () => void;
  onSubtaskClick?: (subtaskId: number, columnId: number) => void;
  onBackToTask?: () => void;
  isRootTask: boolean;
};

export const TaskDetails = ({
  item,
  rootTaskId,
  subtaskPath,
  columnId,
  taskActions,
  onClose,
  onSubtaskClick,
  onBackToTask,
  isRootTask,
}: TaskDetailsProps) => {
  const normalizedItem = {
    ...item,
    timeSpent: item.timeSpent ?? 0,
    timePlanned: item.timePlanned ?? 0,
    dueDate: item.dueDate ?? new Date(),
    status: item.status ?? "toDo",
    timer: item.timer ?? { startedAt: null, isRunning: false },
    subtasks: item.subtasks ?? [],
  };

  const handleToggleTimer = () => {
    const timerPath = subtaskPath.length > 0 ? subtaskPath : undefined;

    if (normalizedItem.timer.isRunning) {
      taskActions.stopTaskTimer(rootTaskId, columnId, timerPath);
    } else {
      taskActions.startTaskTimer(rootTaskId, columnId, timerPath);
    }
  };

  const handleComplete = () => {
    if (isRootTask) {
      taskActions.toggleTaskCompletion(rootTaskId, columnId);
    } else if (subtaskPath.length > 0) {
      taskActions.toggleSubtaskCompletion(rootTaskId, columnId, subtaskPath);
    }
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      <TaskDetailsHeader
        task={normalizedItem}
        onComplete={handleComplete}
        onToggleTimer={handleToggleTimer}
        onClose={onClose}
        onBack={isRootTask ? undefined : onBackToTask}
      />

      <div className="flex flex-col px-6 flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <h4 className="text-2xl text-textMain font-semibold shrink-0">
            {item.name}
          </h4>

          <div className="shrink-0">
            <TaskDetailsMeta />
          </div>

          <h5 className="text-gray text-sm shrink-0 mt-1">Подзадачи</h5>

          <div className="mt-2 flex flex-1 flex-col min-h-0 overflow-hidden">
            <TaskDetailsSubtasks
              rootTaskId={rootTaskId}
              parentPath={subtaskPath}
              subtasks={normalizedItem.subtasks}
              columnId={columnId}
              onSubtaskComplete={taskActions.toggleSubtaskCompletion}
              onSubtaskClick={onSubtaskClick}
              onSubtaskAdd={taskActions.addSubtask}
            />
          </div>
        </div>

        <TaskDetailsComments comments={item.comments} />
      </div>
    </div>
  );
};
