import { createStore, applyMiddleware, Store, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
// import { logger } from '../middleware';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import  { RootState } from '../reducers';
import createRootReducer from '../reducers';

// import { ConnectedRouter, routerReducer, routerMiddleware, push  } from 'react-router-redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';
const history = createBrowserHistory();


// export function configureStore(history,initialState?: RootState) {
  export function configureStore(initialState?: RootState) {
  let middleware = applyMiddleware(thunk,routerMiddleware(history));

//   console.log('process.env.NODE_ENV ' + process.env.NODE_ENV)
  

  // if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  // }

  const store = createStore(
    createRootReducer(history),
  initialState, middleware);

  if (module.hot) {
    // module.hot.accept('../reducers', () => {
    //   const nextReducer = require('../reducers');
    //   store.replaceReducer(nextReducer);
    // });
  }

  return store;
}
