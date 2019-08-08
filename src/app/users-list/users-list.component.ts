import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TodoService } from '../services/pract/todo.service';
import { Todo } from '../services/pract/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  constructor(private todoService: TodoService) {}

  todos: Todo[] = this.todoService.todos;

  onAddClick(form: NgForm) {
    this.todoService.addTodo(form.value.title);
    form.reset();
  }

}
