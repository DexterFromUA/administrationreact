import {createAsyncThunk} from '@reduxjs/toolkit';

import {GET_NEWS} from '../../constants/actions';
import {getNewsService} from '../../services/news';

export const getNewsAction = createAsyncThunk(GET_NEWS, async () => {
  return await getNewsService();
});
