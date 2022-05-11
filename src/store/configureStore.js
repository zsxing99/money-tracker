import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
// const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export default function configureStore(initialState = {}, trackingMiddleware) {
  // const store = createStore(rootReducer, initialState, applyMiddleware(trackingMiddleware));
  const store = createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(trackingMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
