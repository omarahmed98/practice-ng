// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { TodoListComponent } from './todo-list.component';
// import { TodoService } from '../../core/services/todo.service';
// import { of } from 'rxjs';

// describe('TodoListComponent', () => {
//   let component: TodoListComponent;
//   let fixture: ComponentFixture<TodoListComponent>;
//   let todoServiceMock: jest.Mocked<TodoService>;

//   beforeEach(async () => {
//     todoServiceMock = {
//       getTodos: jest.fn(),
//       toggleTodo: jest.fn(),
//       removeTodo: jest.fn(),
//     } as any;

//     await TestBed.configureTestingModule({
//       declarations: [ TodoListComponent ],
//       providers: [{ provide: TodoService, useValue: todoServiceMock }]
//     }).compileComponents();

//     fixture = TestBed.createComponent(TodoListComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should get todos from the service', () => {
//     const mockTodos = [{ id: 1, title: 'Test Todo', completed: false }];
//     todoServiceMock.getTodos.mockReturnValue(of(mockTodos));

//     fixture.detectChanges();

//     expect(todoServiceMock.getTodos).toHaveBeenCalled();
//     component.todos$.subscribe(todos => {
//       expect(todos).toEqual(mockTodos);
//     });
//   });

//   it('should call toggleTodo on the service', () => {
//     component.onToggleTodo(1);
//     expect(todoServiceMock.toggleTodo).toHaveBeenCalledWith(1);
//   });

//   it('should call removeTodo on the service', () => {
//     component.onRemoveTodo(1);
//     expect(todoServiceMock.removeTodo).toHaveBeenCalledWith(1);
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../../core/services/todo.service';
import { of } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  const mockTodos: Todo[] = [
    { id: 1, title: 'Test Todo 1', completed: false },
    { id: 2, title: 'Test Todo 2', completed: true },
  ];

  beforeEach(() => {
    const todoServiceMock = {
      getTodos: jest.fn().mockReturnValue(of(mockTodos)),
      toggleTodo: jest.fn(),
      removeTodo: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: TodoService, useValue: todoServiceMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],  // To avoid issues with child components
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);

    fixture.detectChanges(); // Trigger ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display todos on initialization', () => {
    component.todos$.subscribe((todos) => {
      expect(todos.length).toBe(2);
      expect(todos).toEqual(mockTodos);
    });
  });

  it('should call toggleTodo when onToggleTodo is triggered', () => {
    component.onToggleTodo(1);
    expect(todoService.toggleTodo).toHaveBeenCalledWith(1);
  });

  it('should call removeTodo when onRemoveTodo is triggered', () => {
    component.onRemoveTodo(1);
    expect(todoService.removeTodo).toHaveBeenCalledWith(1);
  });
});
