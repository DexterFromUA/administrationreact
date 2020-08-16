import {loadingNews, errorNews, getNews} from '../news';

export const getItems = () => {
  return (dispatch: any) => {
    dispatch(loadingNews(true));

    fetch('https://5f2f427b6b05e900163bca23.mockapi.io/News', {
      method: 'get',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(getNews(res));
        dispatch(loadingNews(false));
      })
      .catch((e) => console.log(e));
  };
};
