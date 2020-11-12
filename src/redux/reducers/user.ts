import {createReducer, AnyAction, PayloadAction} from '@reduxjs/toolkit';

import {actionGetResponseUri} from '../actions/user';
import {LOGIN, LOGIN_WITH_CALLBACK} from '../../constants/actions';

const userReducer = createReducer({} as Record<string, any>, (builder) => {
  builder
    .addCase(actionGetResponseUri, (state, action) => {
      state.codeUri = action.payload;
    })
    .addMatcher(
      (action: AnyAction): action is PayloadAction<{tempUri: string}> =>
        action.type.endsWith(LOGIN + '/fulfilled'),
      (state, action) => {
        state.tempUri = action.payload;
        state.loading = false;
      },
    )
    .addMatcher(
      (
        action: AnyAction,
      ): action is PayloadAction<{
        access_token: string;
        id: string;
        username: string;
      }> => action.type.endsWith(LOGIN_WITH_CALLBACK),
      (state, action) => {
        [state, action.payload];
      },
    );
});

export default userReducer;
