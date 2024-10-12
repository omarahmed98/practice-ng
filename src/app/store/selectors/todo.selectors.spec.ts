import { selectAllTodos } from './todo.selectors';
import { TodoState } from '../state/todo.state';

describe('Todo Selectors', () => {
  const initialState: TodoState = {
    todos: [{ id: 1, title: 'Test Todo', completed: false }]
  };

  it('should select all todos', () => {
    const result = selectAllTodos.projector(initialState);
    expect(result.length).toBe(1);
    expect(result[0].title).toBe('Test Todo');
  });
});
