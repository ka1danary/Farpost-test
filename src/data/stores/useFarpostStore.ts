import { create } from "zustand";
import { generateId } from "../helpers";

interface Task {
  id: string;
  name: string;
  createdAt: string;
  title: string;
  priority: string;
  mark: string;
}

interface TaskStore {
  tasks: Task[];
  //createTask: (title: string) => void;
  sortTaskByNewDate: () => void;
  sortTaskByOldDate: () => void;

  createTask: (
    name: string,
    createdAt: string,
    title: string,
    priority: string,
    mark: string
  ) => void;
  stopVisible: (vision: boolean) => boolean;
  // updateTask: (id: string, name: string, priorty: number, title: string) => void;
  removeTask: (id: string) => void;
}

const tasksGlobal: Task[] = [
  {
    id: "1",
    name: "Купить газпром",
    createdAt: "01-02-2024",
    title: "title",
    priority: "Low",
    mark: 'Designed',
  },
  {
    id: "2",
    name: "Помыть машину",
    createdAt: "10-04-2024",
    title: "title",
    priority: "Low",
    mark: 'Designed',
  },
  {
    id: "3",
    name: "Решить 10 диффуров",
    createdAt: "20-10-2024",
    title: "title",
    priority: "Low",
    mark: 'Designed',
  },
  {
    id: "4",
    name: "Сходить в боулинг",
    createdAt: "30-10-2024",
    title: "title",
    priority: "Low",
    mark: 'Designed',
  },
  {
    id: "5",
    name: "Поиграть в покер",
    createdAt: "30-10-2024",
    title: "title",
    priority: "Low",
    mark: 'Designed',
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

  createTask: (name, createdAt, title, priority, mark) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      name,
      createdAt,
      title,
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
  removeTask: (id: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id != id),
    });
  },
}));
