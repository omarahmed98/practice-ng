import { createReducer, on } from '@ngrx/store';
import { TodoState, initialTodoState } from '../state/todo.state';
import * as TodoActions from '../actions/todo.actions';

export const todoReducer = createReducer(
  initialTodoState,
  on(TodoActions.addTodo, (state, { title }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now(), title, completed: false }]
  })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(TodoActions.toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos
  }))
);