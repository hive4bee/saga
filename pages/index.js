import createSagaMiddleware from '@redux-saga/core';
import styles from '../styles/Home.module.css'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from '../modules';

import CounterContainer from '../containers/CounterContainer';
// import PostList from '../components/PostList';
// import Categories from '../components/Categories'
import { useCallback, useState } from 'react';
import PageContainer from '../containers/PageContainer';

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware, // 사가 미들웨어를 적용하고
    )
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

sagaMiddleware.run(rootSaga)

export default function Home() {
    return (
        <Provider store={store}>
            <PageContainer></PageContainer>
        </Provider>
    )
}