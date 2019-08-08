import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { UsersListModule } from './users-list/users-list.module';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
