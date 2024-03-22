import { create } from "zustand";
import { generateId } from "../helpers";

interface Task {
  id: string;
  name: string;
  createdAt: string;
  priority: number;
  mark: string[];
}

interface TaskStore {
  tasks: Task[];
  //createTask: (title: string) => void;
  sortTaskByNewDate: () => void;
  sortTaskByOldDate: () => void;
  filterByPriority: (priority: number) => void;
  createTask: (
    name: string,
    createdAt: string,
    priority: number,
    mark: string[]
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
    priority: 1,
    mark: ["1", "2"],
  },
  {
    id: "2",
    name: "Помыть машину",
    createdAt: "10-04-2024",
    priority: 2,
    mark: ["1", "2"],
  },
  {
    id: "3",
    name: "Решить 10 диффуров",
    createdAt: "20-10-2024",
    priority: 1,
    mark: ["1", "2"],
  },
  {
    id: "4",
    name: "Сходить в боулинг",
    createdAt: "30-10-2024",
    priority: 3,
    mark: ["1", "2"],
  },
  {
    id: "5",
    name: "Поиграть в покер",
    createdAt: "30-10-2024",
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

  createTask: (name, createdAt, priority, mark) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      name,
      createdAt,
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
  removeTask: (id : string) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id != id),
    });
  },
}));
