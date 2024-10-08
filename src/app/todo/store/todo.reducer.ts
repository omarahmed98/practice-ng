import { createReducer, on } from '@ngrx/store';

export const storeFeatureKey = 'store';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

