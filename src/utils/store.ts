import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

const initialState = {
  invited: false,
  user: {
    username: '@username',
    token: 'access token',
  },
  news: {
    loadingNews: true,
    errorNews: false,
    news: [],
  },
  queue: {
    queueStatus: false,
    friendList: [],
    selectedFriends: [],
    friendsInQueue: [],
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
