import { ICountResponse } from '../models';

import { all, takeEvery, put } from '@redux-saga/core/effects';
import * as api from './api';
import { getCount, setCount } from './slice';

function* GetDataCount() {
  try {
    const response = (yield api.fetchCount()) as ICountResponse;
    yield put(setCount(response));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootCounterSaga(): unknown {
  yield all([takeEvery(getCount.toString(), GetDataCount)]);
}
