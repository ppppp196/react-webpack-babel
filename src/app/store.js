//router
import { routerMiddleware } from 'react-router-redux';

//redux
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

//module
import rootReducer from './reducer'
import rootSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)))
);

// then run the saga
sagaMiddleware.run(rootSagas)
