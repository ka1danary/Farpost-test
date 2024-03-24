import { create } from "zustand";
import { generateId } from "../helpers";
import data from "../MOCK_DATA.json";

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
  task: Task;
  id : string,
  sortTaskByNewDate: () => void;
  sortTaskByOldDate: () => void;
  setId: (id : string) => void

  setTaskInfoString: (
    id: string,
    name: string,
    createdAt: string,
    title: string,
    priorty: string,
    mark: string
  ) => void;
  createTask: (
    name: string,
    createdAt: string,
    title: string,
    priority: string,
    mark: string
  ) => void;
  stopVisible: (vision: boolean) => boolean;
  updateTask: (
    id: string,
    newName: string,
    newTitle: string,
    newPriority: string,
    newMark: string
  ) => void;
  removeTask: (id: string) => void;
  findTask: (id: string) => Task;
}
// const tasksGlobal: Task[] = [

// ];
const globalTask: Task = {
  id: "",
  name: "Name",
  createdAt: "00/00/0000",
  title: "Title",
  priority: "Low",
  mark: "Designed",
};

export const useFarpostStore = create<TaskStore>((set, get) => ({
  tasks: data,
  task: globalTask,
  id: '',
  sortTaskByNewDate: () => {
    const { tasks } = get();
    set({
      tasks: tasks.slice().sort((a: Task, b: Task) => (a.createdAt < b.createdAt ? 1 : -1)),
    });
  },
  sortTaskByOldDate: () => {
    const { tasks } = get();
    set({
      tasks: tasks.slice().sort((a: Task, b: Task) => (a.createdAt > b.createdAt ? 1 : -1)),
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
    data.push(newTask);
    set({
      tasks: [newTask].concat(tasks),
    });
  },
  stopVisible: (vision) => !vision,

  setTaskInfoString: (id, name, createdAt, title, priority, mark) => {
    const setTask = {
      id,
      name,
      createdAt,
      title,
      priority,
      mark,
    };
    set({
      task: setTask,
    });
  },

  removeTask: (id: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id != id),
    });
  },
  updateTask: (id, newName, newTitle, newPriority, newMark) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        name: task.id === id ? newName : task.name,
        title: task.id === id ? newTitle : task.title,
        priority: task.id === id ? newPriority : task.priority,
        mark: task.id === id ? newMark : task.mark,
      })),
    });
  },
  findTask: (id) => {
    const { tasks } = get();
    return tasks.find((task) => task.id === id);
  },
  setId: (newId) => {
    console.log(newId);
    set({
      id: newId
    });
  }
}));
