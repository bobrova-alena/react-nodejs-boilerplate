import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountResponse } from '../models';

export type CounterState = {
  count: number;
};

const counterAdapter = createEntityAdapter<CounterState>();

const initialState = counterAdapter.getInitialState({
  count: 0,
});

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCount(state: CounterState, action: PayloadAction<ICountResponse>) {
      state.count = action.payload.count;
    },

    //sagas
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getCount() {},
  },
});

export const { getCount, setCount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
