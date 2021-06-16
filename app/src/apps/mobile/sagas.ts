import { all } from '@redux-saga/core/effects';
import { counterSagas } from 'src/services';

function SETUP() {
  //FOR INITIAL LOADING
  console.log('App started');
}

export default function* rootSaga(): Generator {
  yield all([counterSagas.default(), SETUP()]);
}
