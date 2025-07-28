export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export class TodoModel {
  static validate(todo: Partial<Todo>): string[] {
    const errors: string[] = [];

    if (!todo.title || todo.title.trim().length === 0) {
      errors.push("Title is required");
    }

    if (todo.title && todo.title.length > 100) {
      errors.push("Title must be less than 100 characters");
    }

    return errors;
  }

  static create(title: string): Todo {
    return {
      id: Math.random().toString(36).substr(2, 9),
      title: title.trim(),
      completed: false,
      createdAt: new Date(),
    };
  }
}
