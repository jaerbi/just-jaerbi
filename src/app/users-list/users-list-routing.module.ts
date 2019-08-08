import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './users-list.component';
import { UserComponent } from './user/user.component';

const usersRoute: Routes = [
  { path: '', component: UsersListComponent, children: [
      { path: 'user', component: UserComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(usersRoute)],
  exports: [RouterModule]
})
export class UsersListRoutingModule {

}
