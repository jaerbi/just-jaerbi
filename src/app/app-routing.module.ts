import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PractComponent } from './pract/pract.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/field', pathMatch: 'full' },
  { path: 'field', loadChildren: './field/field.module#FieldModule' },
  { path: 'pract', component: PractComponent },
  { path: 'users-list', loadChildren: './users-list/users-list.module#UsersListModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
