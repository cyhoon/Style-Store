import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as modules from './modules';
import rootSaga from './sagas';

const reducers = combineReducers(modules);

const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && composeWithDevTools;
const composeEnhancers: any = devTools || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ];

// preloadedState는 추후 서버사이드 랜더링을 했을 때 전달받는 초기 상태입니다.
const configure = (preloadedState?: any) => {
  const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configure;
