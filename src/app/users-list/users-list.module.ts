import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';
import { UsersComponent } from './users/users.component';
import { TodoService } from '../services/pract/todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersListRoutingModule,
  ],
  providers: [
    TodoService
  ]
})
export class UsersListModule {

}
