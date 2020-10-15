import {createReducer, AnyAction, PayloadAction} from '@reduxjs/toolkit';

import {LOGIN, LOGIN_WITH_CALLBACK} from '../../constants/actions';

interface IUser {
  tempUri: string;
}

const userReducer = createReducer({} as IUser, (builder) => {
  builder
    .addMatcher(
      (action: AnyAction): action is PayloadAction<{tempUri: string}> =>
        action.type.endsWith(LOGIN + '/fulfilled'),
      (state, action) => {
        [...state.tempUri, action.payload];
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
