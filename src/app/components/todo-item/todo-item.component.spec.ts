import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = { id: 1, title: 'Test Todo', completed: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleTodo event', () => {
    jest.spyOn(component.toggleTodo, 'emit');
    component.onToggle();
    expect(component.toggleTodo.emit).toHaveBeenCalledWith(1);
  });

  it('should emit removeTodo event', () => {
    jest.spyOn(component.removeTodo, 'emit');
    component.onRemove();
    expect(component.removeTodo.emit).toHaveBeenCalledWith(1);
  });
});