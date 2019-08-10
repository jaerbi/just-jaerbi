import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListModule } from './users-list/users-list.module';
import { PractComponent } from './pract/pract.component';
import { FieldModule } from './field/field.module';

@NgModule({
  declarations: [
    AppComponent,
    PractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersListModule,
    FieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
