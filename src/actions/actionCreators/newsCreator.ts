import {loadingNews, errorNews, getNews} from '../news';
import {getServerAddr} from '../../const';

export const getItems = () => {
  return (dispatch: any) => {
    dispatch(loadingNews(true));
    const url = getServerAddr();

    fetch(url + '/news')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getNews(res.rows));
      })
      .catch((e) => console.log('news action error: ', e))
      .finally(() => dispatch(loadingNews(false)));
  };
};
