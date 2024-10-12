import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  newTodoTitle: string = '';

  constructor(private store: Store) {}

  onSubmit(): void {
    if (this.newTodoTitle.trim()) {
      this.store.dispatch(TodoActions.addTodo({ title: this.newTodoTitle.trim() }));
      this.newTodoTitle = '';
    }
  }
}