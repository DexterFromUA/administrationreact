import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

import {app, news, queue} from './reducers';

const reducers = combineReducers({
  app,
  news,
  queue,
  // user,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
