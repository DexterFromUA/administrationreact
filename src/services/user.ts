import {INSTAGRAM_AUTH, INSTAGRAM_API} from '../constants/uris';
// import axios from 'axios';

export const serviceLoginUser = async () => {
  const response = await fetch(INSTAGRAM_AUTH);
  return response.url;
};

export const serviceLoginUserWithCallback = (uri: string) => {
  fetch(INSTAGRAM_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      client_id: '2690149747939469',
      client_secret: '41cb929c262b7872f58f2b17368e84cd',
      grant_type: 'authorization_code',
      redirect_uri: 'https://about.instagram.com/',
      code: uri,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  // axios
  //   .post(
  //     INSTAGRAM_API,
  //     {
  //       client_id: '2690149747939469',
  //       client_secret: '41cb929c262b7872f58f2b17368e84cd',
  //       grant_type: 'authorization_code',
  //       redirect_uri: 'https://about.instagram.com/',
  //       code: uri,
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     },
  //   )
  //   .then((response) => console.log(response))
  //   .catch((e) => console.error(e));
};
