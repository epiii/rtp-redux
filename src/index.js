import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// v1
// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import store from './store'
// import store from './store/index'
// import ReduxThunk from 'redux-thunk'
// import promiseMiddleware from 'redux-promise'

// v2 
// import rootReducer from './reducers/rootReducer'

// import * as serviceWorker from './serviceWorker';
// v1
// const createStorePlain = createStore(rootReducer)

// v2
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
// v1
    // <Provider
    //     store={createStoreWithMiddleware(
    //         store,
    //         window._REDUX_DEVTOOLS_EXTENSION__ &&
    //         window._REDUX_DEVTOOLS_EXTENSION__()
    //     )}
    // >
// v2
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
