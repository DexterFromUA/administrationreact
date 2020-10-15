import {createReducer, AnyAction, PayloadAction} from '@reduxjs/toolkit';

import {GET_NEWS} from '../../constants/actions';

interface INews {
  data: Array<{
    id: number;
    title: string;
    description: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  loading: boolean;
}

const newsReducer = createReducer({} as INews, (builder) => {
  builder.addMatcher(
    (action: AnyAction): action is PayloadAction<{data: any}> =>
      action.type.endsWith(GET_NEWS + '/fulfilled'),
    (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  );
});

export default newsReducer;
