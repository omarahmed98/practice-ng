import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos();
  }

  ngOnInit(): void {}

  onToggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
  }

  onRemoveTodo(id: number): void {
    this.todoService.removeTodo(id);
  }
}