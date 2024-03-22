import { create } from "zustand";
import { generateId } from "../helpers";
//import { generateId } from "../helpers";

interface Task {
  id: string;
  name: string;
  createdAt: number;
  priority: number;
  mark: string[];
}

interface TaskStore {
  tasks: Task[];
  //createTask: (title: string) => void;
  sortTaskByNewDate: () => void;
  sortTaskByOldDate: () => void;
  filterByPriority: (priority: number) => void;
  createTask: (name: string, priority: number, mark: string[]) => void;
  stopVisible: (vision: boolean) => boolean;
  // updateTask: (id: string, name: string, priorty: number, title: string) => void;
  // removeTask: (id: string) => void;
}

const tasksGlobal: Task[] = [
  {
    id: "1",
    name: "Новая тестовая запись 1",
    createdAt: 15,
    priority: 1,
    mark: ["1", "2"],
  },
  {
    id: "2",
    name: "Новая тестовая запись 2",
    createdAt: 10,
    priority: 2,
    mark: ["1", "2"],
  },
  {
    id: "3",
    name: "Новая тестовая запись 3",
    createdAt: 1,
    priority: 1,
    mark: ["1", "2"],
  },
  {
    id: "4",
    name: "Новая тестовая запись 4",
    createdAt: 9,
    priority: 3,
    mark: ["1", "2"],
  },
];

export const useFarpostStore = create<TaskStore>((set, get) => ({
  tasks: tasksGlobal,

  sortTaskByNewDate: () => {
    const { tasks } = get();
    set({
      tasks: tasks
        .slice()
        .sort((a: Task, b: Task) => (a.createdAt < b.createdAt ? 1 : -1)),
    });
  },
  sortTaskByOldDate: () => {
    const { tasks } = get();
    set({
      tasks: tasks
        .slice()
        .sort((a: Task, b: Task) => (a.createdAt > b.createdAt ? 1 : -1)),
    });
  },
  filterByPriority: (priority) => {
    const tasks = tasksGlobal;
    const filteredTasks = [...tasks];
    if (priority === 0) {
      set({
        tasks: tasksGlobal,
      });
    } else {
      set({
        tasks: filteredTasks.filter((task) => task.priority === priority),
      });
    }
  },

  createTask: (name, priority, mark) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      name,
      createdAt: Date.now(),
      priority,
      mark,
    };
    tasksGlobal.concat(newTask);
    set({
      tasks: [newTask].concat(tasks),
    });
  },
  stopVisible: (vision) => {
    const temp = !vision;
    return temp;
  },
}));
