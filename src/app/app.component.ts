import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="todo-app">
      <h1>Todo App</h1>
      <app-todo-form></app-todo-form>
      <app-todo-list></app-todo-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}