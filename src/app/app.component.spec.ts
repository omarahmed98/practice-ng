import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = { todos: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent
      ],
      providers: [provideMockStore({ initialState })] // Provide mock store instead of the service
    }).compileComponents();

    store = TestBed.inject(MockStore); // Inject the mock store
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Todo App');
  });
});
