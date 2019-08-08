import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { FieldComponent } from './field/field.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'field', component: FieldComponent },
  { path: 'users-list', loadChildren: './users-list/users-list.module#UsersListModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
