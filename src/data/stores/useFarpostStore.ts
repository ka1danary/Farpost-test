import { create } from "zustand";
import { generateId } from "../helpers";
import data from "../MOCK_DATA.json";

interface Task {
  id: string;
  name: string;
  createdAt: Date; 
  title: string;
  priority: string[];
  mark: string[];
}

interface TaskStore {
  tasks: Task[];
  task: Task;
  id: string;
  sortTaskByNewDate: () => void;
  sortTaskByOldDate: () => void;
  filterCards : (values : string[]) => Task[];
  
  setId: (id: string) => void;

  setTaskInfoString: (
    id: string,
    name: string,
    createdAt: Date,
    title: string,
    priorty: string[],
    mark: string[]
  ) => void;
  createTask: (
    name: string,
    title: string,
    priority: string[],
    mark: string[]
  ) => void;
  stopVisible: (vision: boolean) => boolean;
  updateTask: (
    id: string,
    newName: string,
    newTitle: string,
    newPriority: string[],
    newMark: string[]
  ) => void;
  removeTask: (id: string) => void;
  findTask: (id: string) => Task;
}
// const tasksGlobal: Task[] = [

// ];
const globalTask: Task = {
  id: "",
  name: "Name",
  createdAt: new Date,
  title: "Title",
  priority: ["Low"],
  mark: ["Designed"],
};

export const useFarpostStore = create<TaskStore>((set, get) => ({
  tasks: data,
  task: globalTask,
  id: "",
  sortTaskByNewDate: () => {
    const { tasks } = get();
    const sortedTasks = [...tasks].sort((a: Task, b: Task) => (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? 1 : -1));
    set({ tasks: sortedTasks });
  },
  sortTaskByOldDate: () => {
    const { tasks } = get();
    const sortedTasks = [...tasks].sort((a: Task, b: Task) => (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? 1 : -1));
    set({ tasks: sortedTasks });
  },
  

  createTask: (name, title, priority, mark) => {
  const { tasks } = get();
  const newTask = {
    id: generateId(),
    name,
    createdAt: new Date(),
    title,
    priority,
    mark,
  };
  set({
    tasks: [newTask, ...tasks], 
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
    console.log("Удалена" + id);
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
    console.log("Новый Id" + newId);
    set({
      id: newId,
    });
  },
  filterCards : (values) => {
    const {tasks} = get()
    const copeTasks = tasks.filter((val) => (val.priority || val.mark) === values)
    return copeTasks
  }
}));
