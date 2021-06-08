import { all } from '@redux-saga/core/effects';

function SETUP() {
  //FOR INITIAL LOADING
  console.log('App started');
}

export default function* rootSaga(): Generator {
  yield all([SETUP()]);
}
