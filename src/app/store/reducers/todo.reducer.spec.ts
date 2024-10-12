import { todoReducer } from './todo.reducer';
import { initialTodoState } from '../state/todo.state';
import * as TodoActions from '../actions/todo.actions';

describe('Todo Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'Unknown' } as any;
    const state = todoReducer(initialTodoState, action);
    expect(state).toBe(initialTodoState);
  });

  it('should add a todo on addTodo', () => {
    const title = 'New Todo';
    const action = TodoActions.addTodo({ title });
    const state = todoReducer(initialTodoState, action);
    expect(state.todos.length).toBe(1);
    expect(state.todos[0].title).toBe(title);
  });

  it('should remove a todo on removeTodo', () => {
    const initialState = {
      ...initialTodoState,
      todos: [{ id: 1, title: 'Test Todo', completed: false }]
    };
    const action = TodoActions.removeTodo({ id: 1 });
    const state = todoReducer(initialState, action);
    expect(state.todos.length).toBe(0);
  });

  it('should toggle the completed status of a todo on toggleTodo', () => {
    const initialState = {
      ...initialTodoState,
      todos: [{ id: 1, title: 'Test Todo', completed: false }]
    };
    const action = TodoActions.toggleTodo({ id: 1 });
    const state = todoReducer(initialState, action);
    expect(state.todos[0].completed).toBe(true);
  });

  it('should load todos on loadTodosSuccess', () => {
    const todos = [{ id: 1, title: 'Loaded Todo', completed: false }];
    const action = TodoActions.loadTodosSuccess({ todos });
    const state = todoReducer(initialTodoState, action);
    expect(state.todos).toEqual(todos);
  });
});
