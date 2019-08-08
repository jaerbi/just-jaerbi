import { Todo } from './todo.model';

export class TodoService {

  todos: Todo[] = [
    new Todo('One'),
    new Todo('Two'),
  ];

  addTodo(title: string) {
    this.todos.push(new Todo(title));
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }

  editTodo(id: number, title: string) {
    this.todos[id] = new Todo(title);
  }
}
