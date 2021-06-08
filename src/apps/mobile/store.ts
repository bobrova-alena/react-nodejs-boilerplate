import { Reducer, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { createStore } from 'redux';

export interface IApplicationState {
  router: RouterState;
}

export const createRootReducer = (history: History): Reducer<IApplicationState> =>
  combineReducers<IApplicationState>({
    router: connectRouter(history),
  });

export const history = createBrowserHistory();

export const store = createStore(createRootReducer(history));
