export const loadingNews = (loading: boolean) => {
  return {
    type: 'LOADING_NEWS',
    payload: loading,
  };
};

export const errorNews = (error: boolean) => {
  return {
    type: 'ERROR_NEWS',
    payload: error,
  };
};

export const getNews = (news: Array<Object>) => {
  return {
    type: 'GET_NEWS',
    payload: news,
  };
};
