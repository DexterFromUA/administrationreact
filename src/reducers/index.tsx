import {combineReducers} from 'redux';

import news from './news';
import queue from './queue';

const rootReducer = combineReducers({
  //   userState,
  news,
  queue,
});

export default rootReducer;
