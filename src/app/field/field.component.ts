import { Component, OnInit } from '@angular/core';
import { Cell } from './cell/cell.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  fields: Cell[] = [];

  ngOnInit(): void {

    for (let i = 0; i < 10000; i++) {
      this.fields.push(new Cell(i, i));
    }
    console.log(this.fields);
  }


}
