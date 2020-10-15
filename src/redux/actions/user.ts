import {createAsyncThunk} from '@reduxjs/toolkit';

import {LOGIN, LOGIN_WITH_CALLBACK} from '../../constants/actions';
import {
  serviceLoginUser,
  serviceLoginUserWithCallback,
} from '../../services/user';
import {getCallBackCodeUtil} from '../../utils/uri';

export const actionLoginUser = createAsyncThunk(LOGIN, async () => {
  const response = await serviceLoginUser();
  return response;
});

export const actionLoginUserWithCallback = createAsyncThunk<any, string>(
  LOGIN_WITH_CALLBACK,
  async (uri: string) => {
    const utilResult = await getCallBackCodeUtil(uri);
    const serviceResult = await serviceLoginUserWithCallback(utilResult);
    console.log('ACTION -> login user with callback: ', serviceResult);
    return serviceResult;
  },
);
