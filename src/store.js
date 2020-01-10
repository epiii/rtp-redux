import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './reducers/indexReducer'
import promiseMiddleware from 'redux-promise'

const initialState = {}
const middleware = [thunk]
// const middleware = [promiseMiddleware, thunk]

const store = createStore(
    indexReducer, // reducer
    initialState, // init state
    compose( // redux's third party 
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;