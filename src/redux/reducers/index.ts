import {combineReducers} from 'redux';

import userReducer from '../reducers/user';
import newsReducer from '../reducers/news';
import queueReducer from '../reducers/queue';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  queue: queueReducer,
});

export default rootReducer;
