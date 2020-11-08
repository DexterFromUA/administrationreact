import {INSTAGRAM_AUTH, INSTAGRAM_AUTH_WITH_CALLBACK} from '../constants/uris';

export const serviceLoginUser = async () => {
  const response = await fetch(INSTAGRAM_AUTH);
  return response.url;
};

export const serviceLoginUserWithCallback = (uri: string) => {
  // const response = await fetch(INSTAGRAM_AUTH_WITH_CALLBACK + uri, {
  //   method: 'POST',
  // });
  // console.log('SERVICE -> login with callback: ', response);
  // return response;
  fetch(INSTAGRAM_AUTH_WITH_CALLBACK + uri, {
    method: 'POST',
  })
    // .then((res) => res.json)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};
