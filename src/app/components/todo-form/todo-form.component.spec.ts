import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';
import { TodoService } from '../../core/services/todo.service';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todoServiceMock: jest.Mocked<TodoService>;

  beforeEach(async () => {
    todoServiceMock = {
      addTodo: jest.fn(),
    } as any;

    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TodoFormComponent ],
      providers: [{ provide: TodoService, useValue: todoServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo when form is submitted with a non-empty title', () => {
    component.newTodoTitle = 'New Todo';
    component.onSubmit();
    expect(todoServiceMock.addTodo).toHaveBeenCalledWith('New Todo');
    expect(component.newTodoTitle).toBe('');
  });

  it('should not add a todo when form is submitted with an empty title', () => {
    component.newTodoTitle = '   ';
    component.onSubmit();
    expect(todoServiceMock.addTodo).not.toHaveBeenCalled();
    expect(component.newTodoTitle).toBe('   ');
  });
});