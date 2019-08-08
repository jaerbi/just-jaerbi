import { Component, OnInit } from '@angular/core';

import { Todo } from '../services/pract/todo.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {

  items = [
    new Todo('AAAA'),
    new Todo('BBBB'),
    new Todo('CCCC'),
  ];

  onChange() {
    this.items = [
      new Todo('AAAA'),
      new Todo('BBBB'),
      new Todo('CCCC'),
      new Todo('FFFF'),
    ];
  }

  trackHero(item) {
    return item.title;
  }

}
