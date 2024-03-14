import { create } from "zustand";
//import { generateId } from "../helpers";

interface Task {
    id: string,
    name: string,
    createdAt: number,
    priority: number,
    mark: string []
}

interface TaskStore {
    tasks: Task[];
    //createTask: (title: string) => void;
    sortTaskByNewDate: () => void;
    sortTaskByOldDate: () => void;
    // updateTask: (id: string, name: string, priorty: number, title: string) => void;
    // removeTask: (id: string) => void;
}

export const useFarpostStore = create<TaskStore>((set, get) => ({
    tasks: [
        {
            id: '1',
            name: 'Новая тестовая запись',
            createdAt: 15,
            priority: 1,
            mark: ['1', '2']
        },
        {
            id: '2',
            name: 'Новая тестовая запись 2',
            createdAt: 10,
            priority: 2,
            mark: ['1', '2']
        },
        {
            id: '3',
            name: 'Новая тестовая запись 2',
            createdAt: 1,
            priority: 1,
            mark: ['1', '2']
        },
        {
            id: '4',
            name: 'Новая тестовая запись 2',
            createdAt: 9,
            priority: 1,
            mark: ['1', '2']
        }
    ],

    sortTaskByNewDate: () => {
        const {tasks} = get()
        set({
            tasks: tasks.slice().sort((a: Task, b: Task) => a.createdAt > b.createdAt ? 1 : -1)
        })
    },
    sortTaskByOldDate: () => {
        const {tasks} = get()
        set({
            tasks: tasks.slice().sort((a: Task, b: Task) => a.createdAt < b.createdAt ? 1 : -1)
        })
    }
}))
