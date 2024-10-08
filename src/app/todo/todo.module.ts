import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store/todo.reducer';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromStore.storeFeatureKey, fromStore.reducer)
  ]
})
export class TodoModule { }
