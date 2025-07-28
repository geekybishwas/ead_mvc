// src/lib/data.ts
import { Todo } from "../app/models/Todo";

// In-memory storage for demo purposes
// In production, you'd use a database
let todos: Todo[] = [
  {
    id: "1",
    title: "Learn Next.js MVC pattern",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Deploy to Vercel",
    completed: false,
    createdAt: new Date(),
  },
];

export const TodoData = {
  getAll: (): Todo[] => {
    return [...todos];
  },

  getById: (id: string): Todo | undefined => {
    return todos.find((todo) => todo.id === id);
  },

  create: (todo: Todo): Todo => {
    todos.push(todo);
    return todo;
  },

  update: (id: string, updates: Partial<Todo>): Todo | null => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return null;

    todos[index] = { ...todos[index], ...updates };
    return todos[index];
  },

  delete: (id: string): boolean => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return false;

    todos.splice(index, 1);
    return true;
  },
};
