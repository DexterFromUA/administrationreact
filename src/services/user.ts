import {INSTAGRAM_AUTH, INSTAGRAM_AUTH_WITH_CALLBACK} from '../constants/uris';

export const serviceLoginUser = async () => {
  const response = await fetch(INSTAGRAM_AUTH);
  return response.url;
};

export const serviceLoginUserWithCallback = async (uri: string) => {
  const response = await fetch(INSTAGRAM_AUTH_WITH_CALLBACK + uri, {
    method: 'POST',
  });
  return response;
};
