import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Todo } from '../../models/todo.model';
import { switchMap, take } from 'rxjs';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', (done) => {
    service.addTodo('Test Todo');
    service.getTodos().subscribe((todos) => {
      expect(todos.length).toBe(1);
      expect(todos[0].title).toBe('Test Todo');
      done();
    });
  });

  it('should toggle a todo', (done) => {
    service.addTodo('Test Todo');
    service.getTodos().pipe(
      take(1),  // Ensure only one emission is captured
      switchMap(todos => {
        const todoId = todos[0].id;
        expect(todos[0].completed).toBe(false); // Initially not completed
        service.toggleTodo(todoId); // Toggle the todo
        return service.getTodos();  // Return the updated todos
      }),
      take(1) // Ensure we are getting the updated todos
    ).subscribe(updatedTodos => {
      expect(updatedTodos[0].completed).toBe(true); // Toggled to true
      done(); // Call done to finish the test
    });
  });

  it('should not toggle any todo when an invalid ID is provided', (done) => {
    service.addTodo('Test Todo');
    service.getTodos().pipe(
      take(1),
      switchMap(todos => {
        expect(todos[0].completed).toBe(false); // Initially not completed
        service.toggleTodo(999); // Attempt to toggle with an invalid ID
        return service.getTodos();
      }),
      take(1)
    ).subscribe(updatedTodos => {
      expect(updatedTodos[0].completed).toBe(false); // Should remain unchanged
      done();
    });
  });
  
  it('should correctly toggle a todo when multiple todos are present', (done) => {
    service.addTodo('First Todo');
    service.addTodo('Second Todo');
    service.getTodos().pipe(
      take(1),
      switchMap(todos => {
        const firstTodoId = todos[0].id;
        const secondTodoId = todos[1].id;
        expect(todos[0].completed).toBe(false);
        expect(todos[1].completed).toBe(false);
        service.toggleTodo(secondTodoId); // Toggle the second todo
        return service.getTodos();
      }),
      take(1)
    ).subscribe(updatedTodos => {
      expect(updatedTodos[0].completed).toBe(false); // First todo remains unchanged
      expect(updatedTodos[1].completed).toBe(true);  // Second todo is toggled
      done();
    });
  });

  it('should correctly toggle a todo when multiple todos are present', (done) => {
    service.addTodo('First Todo');
    service.addTodo('Second Todo');
    service.getTodos().pipe(
      take(1),
      switchMap(todos => {
        const firstTodoId = todos[0].id;
        const secondTodoId = todos[1].id;
        expect(todos[0].completed).toBe(false);
        expect(todos[1].completed).toBe(false);
        service.toggleTodo(secondTodoId); // Toggle the second todo
        return service.getTodos();
      }),
      take(1)
    ).subscribe(updatedTodos => {
      expect(updatedTodos[0].completed).toBe(false); // First todo remains unchanged
      expect(updatedTodos[1].completed).toBe(true);  // Second todo is toggled
      done();
    });
  });
  

  it('should remove a todo', (done) => {
    service.addTodo('Test Todo');
    service.getTodos().subscribe((todos) => {
      const todoId = todos[0].id;
      service.removeTodo(todoId);
      service.getTodos().subscribe((updatedTodos) => {
        expect(updatedTodos.length).toBe(0);
        done();
      });
    });
  });
});