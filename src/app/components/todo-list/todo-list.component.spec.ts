import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as TodoActions from '../../store/actions/todo.actions';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: MockStore;

  const initialState = { todos: [] };
  const mockTodos: Todo[] = [
    { id: 1, title: 'Test Todo 1', completed: false },
    { id: 2, title: 'Test Todo 2', completed: true },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    // Mock the store select method
    jest.spyOn(store, 'select').mockReturnValue(of(mockTodos));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadTodos action on component initialization', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(TodoActions.loadTodos());
  });

  it('should dispatch toggleTodo action when onToggleTodo is triggered', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.onToggleTodo(1);
    expect(spy).toHaveBeenCalledWith(TodoActions.toggleTodo({ id: 1 }));
  });

  it('should dispatch removeTodo action when onRemoveTodo is triggered', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.onRemoveTodo(1);
    expect(spy).toHaveBeenCalledWith(TodoActions.removeTodo({ id: 1 }));
  });
});