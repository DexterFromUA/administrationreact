import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

const initialState = {
  // user: {
  //   name: 'test',
  //   role: 'user',
  //   token: '1232134233tgfg3452rfeqr23542',
  //   isAuth: false,
  // },
  news: {
    loadingNews: true,
    errorNews: false,
    news: [],
  },
  queue: {
    queueStatus: false,
    friendList: [
      {
        id: 1,
        name: 'Bagay',
      },
      {
        id: 2,
        name: 'Kostya',
      },
      {
        id: 3,
        name: 'Artem',
      },
      {
        id: 4,
        name: 'Safik',
      },
      {
        id: 1,
        name: 'Bagay',
      },
      {
        id: 2,
        name: 'Kostya',
      },
      {
        id: 3,
        name: 'Artem',
      },
      {
        id: 4,
        name: 'Safik',
      },
      {
        id: 1,
        name: 'Bagay',
      },
      {
        id: 2,
        name: 'Kostya',
      },
      {
        id: 3,
        name: 'Artem',
      },
      {
        id: 4,
        name: 'Safik',
      },
    ],
    selectedFriends: [],
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
