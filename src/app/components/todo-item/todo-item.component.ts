import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleTodo = new EventEmitter<number>();
  @Output() removeTodo = new EventEmitter<number>();

  onToggle(): void {
    this.toggleTodo.emit(this.todo.id);
  }

  onRemove(): void {
    this.removeTodo.emit(this.todo.id);
  }
}