import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as TodoActions from '../../store/actions/todo.actions';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoFormComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch addTodo action when form is submitted with a non-empty title', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.newTodoTitle = 'New Todo';
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(TodoActions.addTodo({ title: 'New Todo' }));
    expect(component.newTodoTitle).toBe('');
  });

  it('should not dispatch addTodo action when form is submitted with an empty or whitespace title', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.newTodoTitle = '   ';
    component.onSubmit();

    expect(spy).not.toHaveBeenCalled();
    expect(component.newTodoTitle).toBe('   ');
  });
});
