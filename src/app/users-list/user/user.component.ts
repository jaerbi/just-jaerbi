import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoService } from '../../services/pract/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  @Input() todo;
  @Input() number: number;

  get runChangeDetection() {
    console.log('Todo Component - Checking the view');
    return true;
  }

  constructor(private todoService: TodoService) {

  }

  onDelete() {
    this.todoService.deleteTodo(this.number);
  }

  onEdit() {
    const title = Math.floor(Math.random() * 10000) + '';
    this.todoService.editTodo(this.number, title);
  }

}
