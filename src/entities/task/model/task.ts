export type Task = {
  id: number;
  name: string;
  timePlanned: number;
  timeSpent: number;
  dueDate: Date;
  status: TaskStatus;
  isDone: boolean;
  completedAt?: Date;
  timer: TaskTimer;
  subtasks: Subtask[];
  comments: Comment[];
};

export type Subtask = Task;

export type TaskTimer = {
  startedAt: number | null;
  isRunning: boolean;
};

export type Comment = {
  id: number;
  text: string;
  publishedAt: Date;
};

export const TASK_STATUSES = ["toDo", "inProgress", "done"] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number];
