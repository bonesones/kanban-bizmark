import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Subtask, Task } from "@/entities/task/model/task";

import type { KanbanBoardModel } from "..";

import {
  MOCK_COLUMNS,
  MOCK_COLUMNS_SECOND_BOARD,
  MOCK_COLUMNS_THIRD_BOARD,
} from "../api/mockData";
import {
  findActiveBoard,
  updateActiveBoard,
  updateTaskInColumn,
} from "../helpers/store.helpers";
import {
  addSubtaskUnderParentPath,
  mapSubtaskAtPath,
  maxIdInTree,
} from "../helpers/task-tree.helpers";

export type BoardState = {
  boards: KanbanBoardModel[];
  activeBoardId: number;
  board: KanbanBoardModel;

  setActiveBoard: (boardId: number) => void;

  addColumn: (title: string) => void;

  /** Добавить задачу в конец указанного столбца активной доски */
  addTask: (columnId: number, title: string) => void;

  moveTask: (taskId: number, toColumnId: number) => void;

  toggleTaskCompletion: (taskId: number, columnId: number) => void;
  /** path — цепочка id подзадач от корня задачи; длина >= 1 */
  toggleSubtaskCompletion: (
    rootTaskId: number,
    columnId: number,
    path: number[],
  ) => void;

  /** subtaskPath не передан или пустой — таймер у корневой задачи; иначе у подзадачи по пути */
  startTaskTimer: (
    taskId: number,
    columnId: number,
    subtaskPath?: number[],
  ) => void;
  stopTaskTimer: (
    taskId: number,
    columnId: number,
    subtaskPath?: number[],
  ) => void;

  /** parentPath пустой — добавить к корневой задаче, иначе к подзадаче по пути */
  addSubtask: (
    rootTaskId: number,
    columnId: number,
    parentPath: number[],
    title: string,
  ) => void;
};

const INITIAL_BOARD: KanbanBoardModel = {
  id: 1,
  name: "Проект Лиц",
  columns: MOCK_COLUMNS,
  status: "В работе",
};

const SECOND_BOARD: KanbanBoardModel = {
  id: 2,
  name: "Маркетинговая кампания",
  columns: MOCK_COLUMNS_SECOND_BOARD,
  status: "Планирование",
};

const THIRD_BOARD: KanbanBoardModel = {
  id: 3,
  name: "Доска разработки",
  columns: MOCK_COLUMNS_THIRD_BOARD,
  status: "Планирование",
};

export const useBoardStore = create<BoardState>()(
  persist(
    (set) => ({
      boards: [INITIAL_BOARD, SECOND_BOARD, THIRD_BOARD],
      activeBoardId: INITIAL_BOARD.id,
      board: INITIAL_BOARD,

      setActiveBoard: (boardId) =>
        set((state) => {
          const activeBoard = findActiveBoard(state.boards, boardId);

          if (!activeBoard) {
            return state;
          }

          return {
            activeBoardId: boardId,
            board: activeBoard,
          };
        }),

      addColumn: (title) =>
        set((state) => {
          const { boards, board } = updateActiveBoard(
            state,
            (currentBoard) => ({
              ...currentBoard,
              columns: [
                ...currentBoard.columns,
                {
                  id: currentBoard.columns.length + 1,
                  name: title,
                  tasks: [],
                },
              ],
            }),
          );

          return {
            boards,
            board,
          };
        }),

      addTask: (columnId, title) =>
        set((state) => {
          const { boards, board } = updateActiveBoard(state, (currentBoard) => {
            const maxId = currentBoard.columns.reduce(
              (boardMax, col) =>
                Math.max(
                  boardMax,
                  col.tasks.reduce(
                    (m, task) => Math.max(m, maxIdInTree(task)),
                    0,
                  ),
                ),
              0,
            );

            const newTask: Task = {
              id: maxId + 1,
              name: title,
              timePlanned: 3600,
              timeSpent: 0,
              dueDate: new Date(),
              status: "toDo",
              isDone: false,
              timer: { startedAt: null, isRunning: false },
              subtasks: [],
              comments: [],
            };

            return {
              ...currentBoard,
              columns: currentBoard.columns.map((col) =>
                col.id !== columnId
                  ? col
                  : { ...col, tasks: [...col.tasks, newTask] },
              ),
            };
          });

          return {
            boards,
            board,
          };
        }),

      moveTask: (taskId, toColumnId) =>
        set((state) => {
          const { boards, board } = updateActiveBoard(state, (currentBoard) => {
            const columns = currentBoard.columns;

            const fromColumnIndex = columns.findIndex((column) =>
              column.tasks.some((task) => task.id === taskId),
            );

            const toColumnIndex = columns.findIndex(
              (column) => column.id === toColumnId,
            );

            if (fromColumnIndex === -1 || toColumnIndex === -1) {
              return currentBoard;
            }

            if (fromColumnIndex === toColumnIndex) {
              return currentBoard;
            }

            const task = columns[fromColumnIndex].tasks.find(
              (t) => t.id === taskId,
            );

            const newColumns = columns.map((col, index) => {
              if (index === fromColumnIndex) {
                return {
                  ...col,
                  tasks: col.tasks.filter((t) => t.id !== taskId),
                };
              }
              if (index === toColumnIndex && task) {
                return { ...col, tasks: [...col.tasks, task] };
              }
              return col;
            });

            return {
              ...currentBoard,
              columns: newColumns,
            };
          });

          return {
            boards,
            board,
          };
        }),

      toggleTaskCompletion: (taskId, columnId) =>
        set((state) => {
          const { boards, board } = updateActiveBoard(
            state,
            (currentBoard) => ({
              ...currentBoard,
              columns: updateTaskInColumn(
                currentBoard.columns,
                columnId,
                taskId,
                (task) => ({ ...task, isDone: !task.isDone }),
              ),
            }),
          );

          return {
            boards,
            board,
          };
        }),

      toggleSubtaskCompletion: (rootTaskId, columnId, path) =>
        set((state) => {
          if (path.length === 0) {
            return state;
          }

          const { boards, board } = updateActiveBoard(
            state,
            (currentBoard) => ({
              ...currentBoard,
              columns: updateTaskInColumn(
                currentBoard.columns,
                columnId,
                rootTaskId,
                (task) =>
                  mapSubtaskAtPath(task, path, (node) => ({
                    ...node,
                    isDone: !node.isDone,
                  })),
              ),
            }),
          );

          return {
            boards,
            board,
          };
        }),

      startTaskTimer: (taskId, columnId, subtaskPath) =>
        set((state) => {
          const now = Date.now();

          if (subtaskPath?.length) {
            const { boards, board } = updateActiveBoard(
              state,
              (currentBoard) => ({
                ...currentBoard,
                columns: updateTaskInColumn(
                  currentBoard.columns,
                  columnId,
                  taskId,
                  (task) =>
                    mapSubtaskAtPath(task, subtaskPath, (node) => ({
                      ...node,
                      timer: {
                        startedAt: now,
                        isRunning: true,
                      },
                    })),
                ),
              }),
            );
            return { boards, board };
          }

          const { boards, board } = updateActiveBoard(
            state,
            (currentBoard) => ({
              ...currentBoard,
              columns: currentBoard.columns.map((column) => {
                if (column.id !== columnId) {
                  return column;
                }

                return {
                  ...column,
                  tasks: column.tasks.map((task) => {
                    if (task.id === taskId) {
                      return {
                        ...task,
                        timer: {
                          startedAt: now,
                          isRunning: true,
                        },
                      };
                    }
                    return task;
                  }),
                };
              }),
            }),
          );

          return {
            boards,
            board,
          };
        }),

      stopTaskTimer: (taskId, columnId, subtaskPath) =>
        set((state) => {
          const now = Date.now();

          if (subtaskPath?.length) {
            const { boards, board } = updateActiveBoard(
              state,
              (currentBoard) => ({
                ...currentBoard,
                columns: updateTaskInColumn(
                  currentBoard.columns,
                  columnId,
                  taskId,
                  (task) =>
                    mapSubtaskAtPath(task, subtaskPath, (node) => {
                      if (!node.timer.isRunning) {
                        return node;
                      }
                      const diff = now - (node.timer.startedAt ?? now);
                      return {
                        ...node,
                        timeSpent: node.timeSpent + Math.floor(diff / 1000),
                        timer: { startedAt: null, isRunning: false },
                      };
                    }),
                ),
              }),
            );
            return { boards, board };
          }

          const { boards, board } = updateActiveBoard(
            state,
            (currentBoard) => ({
              ...currentBoard,
              columns: currentBoard.columns.map((column) => {
                if (column.id !== columnId) {
                  return column;
                }

                return {
                  ...column,
                  tasks: column.tasks.map((task) => {
                    if (task.id !== taskId || !task.timer.isRunning) {
                      return task;
                    }

                    const diff = now - (task.timer.startedAt ?? now);

                    return {
                      ...task,
                      timeSpent: task.timeSpent + Math.floor(diff / 1000),
                      timer: { startedAt: null, isRunning: false },
                    };
                  }),
                };
              }),
            }),
          );

          return {
            boards,
            board,
          };
        }),

      addSubtask: (rootTaskId, columnId, parentPath, title) =>
        set((state) => {
          const { boards, board } = updateActiveBoard(
            state,
            (currentBoard) => ({
              ...currentBoard,
              columns: updateTaskInColumn(
                currentBoard.columns,
                columnId,
                rootTaskId,
                (task) => {
                  const nextId = maxIdInTree(task) + 1;
                  const newSubtask: Subtask = {
                    id: nextId,
                    name: title,
                    timePlanned: 0,
                    timeSpent: 0,
                    dueDate: new Date(),
                    status: "toDo",
                    isDone: false,
                    timer: { startedAt: null, isRunning: false },
                    subtasks: [],
                    comments: [],
                  };
                  return addSubtaskUnderParentPath(
                    task,
                    parentPath,
                    newSubtask,
                  );
                },
              ),
            }),
          );

          return {
            boards,
            board,
          };
        }),
    }),
    {
      name: "kanban-board-storage",
      partialize: (state) => ({
        boards: state.boards,
        activeBoardId: state.activeBoardId,
        board: state.board,
      }),
    },
  ),
);
