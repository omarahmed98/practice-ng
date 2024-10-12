import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { selectAllTodos } from '../../store/selectors/todo.selectors';
import * as TodoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  onToggleTodo(id: number): void {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }

  onRemoveTodo(id: number): void {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
}