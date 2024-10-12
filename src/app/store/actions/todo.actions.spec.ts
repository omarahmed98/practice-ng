import * as TodoActions from './todo.actions';

describe('Todo Actions', () => {
  it('should create an addTodo action', () => {
    const title = 'New Todo';
    const action = TodoActions.addTodo({ title });
    expect(action.type).toBe('[Todo] Add Todo');
    expect(action.title).toBe(title);
  });

  it('should create a removeTodo action', () => {
    const id = 1;
    const action = TodoActions.removeTodo({ id });
    expect(action.type).toBe('[Todo] Remove Todo');
    expect(action.id).toBe(id);
  });

  it('should create a toggleTodo action', () => {
    const id = 1;
    const action = TodoActions.toggleTodo({ id });
    expect(action.type).toBe('[Todo] Toggle Todo');
    expect(action.id).toBe(id);
  });

  it('should create a loadTodosSuccess action', () => {
    const todos = [{ id: 1, title: 'Test Todo', completed: false }];
    const action = TodoActions.loadTodosSuccess({ todos });
    expect(action.type).toBe('[Todo] Load Todos Success');
    expect(action.todos).toEqual(todos);
  });
});
