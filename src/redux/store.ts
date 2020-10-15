import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {
  user: {
    tempUri: '',
    username: '',
    id: '',
    access_token: '',
  },
  news: {
    data: [],
    loading: true,
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
