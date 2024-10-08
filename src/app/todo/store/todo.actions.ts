import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Todo Todos': emptyProps(),
    'Todo Todos Success': props<{ data: unknown }>(),
    'Todo Todos Failure': props<{ error: unknown }>(),
  }
});
