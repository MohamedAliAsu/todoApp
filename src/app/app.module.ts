import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule here

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Add FormsModule here in the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
