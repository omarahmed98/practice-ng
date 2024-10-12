import { BehaviorSubject, map } from 'rxjs';

export class MockStore<T> {
  private state: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state = new BehaviorSubject(initialState);
  }

  select(selector: (state: T) => any) {
    return this.state.asObservable().pipe(map(selector));
  }

  dispatch(action: any) {
  }
}