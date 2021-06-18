import { Reducer, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { createStore } from 'redux';
import { counterReducer, CounterState } from 'src/services';

export interface IApplicationState {
  router: RouterState;
  counter: CounterState;
}

export const createRootReducer = (history: History): Reducer<IApplicationState> =>
  combineReducers<IApplicationState>({
    router: connectRouter(history),
    counter: counterReducer,
  });

export const history = createBrowserHistory();

export const store = createStore(createRootReducer(history));

export const selectCount = (state: IApplicationState): number => state.counter.count;
