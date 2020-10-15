import {combineReducers} from 'redux';

import userReducer from '../reducers/user';
import newsReducer from '../reducers/news';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});

export default rootReducer;
