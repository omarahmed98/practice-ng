import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false
    };
    this.todos.push(newTodo);
    this.todosSubject.next([...this.todos]);
  }

  toggleTodo(id: number): void {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
      this.todosSubject.next([...this.todos]); // Ensure a new reference to trigger subscribers
    }
  }
  
  

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next([...this.todos]);
  }
}