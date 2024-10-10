import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos() {
    const todos = [
      { id: 1, title: 'Learn Angular' },
      { id: 2, title: 'Implement NgRx' }
    ];

    // the operator [of] is Rxjs' operator which emits this sequence in object returning observable
    return of(todos);  
  }
}