import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import loading from './loading';
import posts, { sampleSaga } from './sample';

const rootReducer = combineReducers({ counter, loading, posts });
export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;