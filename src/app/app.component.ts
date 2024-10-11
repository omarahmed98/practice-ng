import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Todo App</h1>
    <app-todo-form></app-todo-form>
    <app-todo-list></app-todo-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}