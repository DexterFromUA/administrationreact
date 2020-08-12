import {combineReducers} from 'redux';

import news from './news';
import queue from './queue';
import invited from './invited';

const rootReducer = combineReducers({
  invited,
  //   userState,
  news,
  queue,
});

export default rootReducer;
