import type { Subtask, Task } from "@/entities/task/model/task";

export const maxIdInTree = (node: Task): number => {
  let max = node.id;
  for (const sub of node.subtasks) {
    max = Math.max(max, maxIdInTree(sub as Task));
  }
  return max;
};

export const mapSubtaskAtPath = (
  task: Task,
  path: number[],
  updater: (node: Subtask) => Subtask,
): Task => {
  if (path.length === 0) {
    return task;
  }
  const [head, ...rest] = path;
  return {
    ...task,
    subtasks: task.subtasks.map((sub) =>
      sub.id !== head
        ? sub
        : rest.length === 0
          ? updater(sub)
          : mapSubtaskAtPath(sub as Task, rest, updater),
    ),
  };
};

export const addSubtaskUnderParentPath = (
  task: Task,
  parentPath: number[],
  newSubtask: Subtask,
): Task => {
  if (parentPath.length === 0) {
    return { ...task, subtasks: [...task.subtasks, newSubtask] };
  }
  const [head, ...rest] = parentPath;
  return {
    ...task,
    subtasks: task.subtasks.map((sub) =>
      sub.id !== head
        ? sub
        : addSubtaskUnderParentPath(sub as Task, rest, newSubtask),
    ),
  };
};
