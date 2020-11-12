import {createAsyncThunk, createAction} from '@reduxjs/toolkit';

import {
  LOGIN,
  LOGIN_WITH_CALLBACK,
  GET_RESPONSE_URI,
} from '../../constants/actions';
import {
  serviceLoginUser,
  serviceLoginUserWithCallback,
} from '../../services/user';
import {getCallBackCodeUtil} from '../../utils/uri';

export const actionGetResponseUri = createAction<string>(GET_RESPONSE_URI);

export const actionLoginUser = createAsyncThunk(LOGIN, async () => {
  const response = await serviceLoginUser();
  return response;
});

export const actionLoginUserWithCallback = createAsyncThunk<any, string>(
  LOGIN_WITH_CALLBACK,
  async (uri: string) => {
    const utilResult = await getCallBackCodeUtil(uri);
    console.log('ACTION -> login user with callback uri: ', utilResult);
    const serviceResult = await serviceLoginUserWithCallback(utilResult);
    console.log('ACTION -> login user with callback: ', serviceResult);
    return serviceResult;
  },
);
