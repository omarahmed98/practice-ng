import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';


describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of todos', (done) => {
    const expectedTodos = [
      { id: 1, title: 'Learn Angular' },
      { id: 2, title: 'Implement NgRx' }
    ];

    service.getTodos().subscribe((todos) => {
      expect(todos.length).toBe(2);
      expect(todos).toEqual(expectedTodos);
      done(); // Ensures async observable completes
    });
  });
});
