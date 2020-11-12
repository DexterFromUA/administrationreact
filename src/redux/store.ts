import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {
  user: {
    loading: true,
    tempUri: '',
    codeUri: '',
    username: '',
    id: '',
    access_token: '',
  },
  news: {
    data: [],
    loading: true,
  },
  queue: {
    queueStatus: false,
    friendList: [
      {
        id: 1,
        name: 'test1',
      },
      {
        id: 2,
        name: 'test2',
      },
      {
        id: 3,
        name: 'test3',
      },
      {
        id: 4,
        name: 'test4',
      },
      {
        id: 5,
        name: 'test5',
      },
    ],
    selectedFriends: [],
    friendsInQueue: [],
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
