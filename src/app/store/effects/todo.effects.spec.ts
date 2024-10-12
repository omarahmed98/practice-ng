import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { TodoEffects } from './todo.effects';
import * as TodoActions from '../actions/todo.actions';
import { TodoService } from '../../core/services/todo.service';
import { cold, hot } from 'jest-marbles'; // If you're using jest-marbles for marble testing

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;
  let todoService: jest.Mocked<TodoService>;

  beforeEach(() => {
    const todoServiceMock = {
      getTodos: jest.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        { provide: TodoService, useValue: todoServiceMock }
      ]
    });

    effects = TestBed.inject(TodoEffects);
    todoService = TestBed.inject(TodoService) as jest.Mocked<TodoService>;
  });

  it('should load todos successfully', () => {
    const todos = [{ id: 1, title: 'Test Todo', completed: false }];
    const action = TodoActions.loadTodos();
    const outcome = TodoActions.loadTodosSuccess({ todos });

    actions$ = hot('-a-', { a: action });
    const response = cold('-b|', { b: todos });
    todoService.getTodos.mockReturnValue(response);

    const expected = cold('--c', { c: outcome });
    expect(effects.loadTodos$).toBeObservable(expected);
  });
});
