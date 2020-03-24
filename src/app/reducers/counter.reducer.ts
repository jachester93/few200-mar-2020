import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const intialState: CounterState = {
  current: 0
};

const reducerHelper = createReducer(
  intialState,
  on(actions.countIncremented, (s) => ({ current: s.current + 1 })),
  on(actions.countDecremented, (s) => ({ current: s.current + 1 })),
  on(actions.countReset, () => intialState)
);
export function reducer(state: CounterState = intialState, action: Action) {
  return reducerHelper(state, action);
}
