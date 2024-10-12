import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { Todo } from '../../models/todo.model';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    // Set up the input property `todo`
    component.todo = { id: 1, title: 'Test Todo', completed: false };

    // Trigger change detection after setting input
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleTodo event', () => {
    // Spy on the EventEmitter for toggleTodo
    jest.spyOn(component.toggleTodo, 'emit');

    // Trigger the toggle
    component.onToggle();

    // Check that the correct event has been emitted
    expect(component.toggleTodo.emit).toHaveBeenCalledWith(1);
  });

  it('should emit removeTodo event', () => {
    // Spy on the EventEmitter for removeTodo
    jest.spyOn(component.removeTodo, 'emit');

    // Trigger the remove
    component.onRemove();

    // Check that the correct event has been emitted
    expect(component.removeTodo.emit).toHaveBeenCalledWith(1);
  });
});
