const INITIAL_STATE = {
  loadingNews: true,
  errorNews: false,
  news: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'LOADING_NEWS':
      return Object.assign({}, state, {
        loadingNews: action.payload,
      });

    case 'ERROR_NEWS':
      return Object.assign({}, state, {
        errorNews: action.payload,
      });

    case 'GET_NEWS':
      return Object.assign({}, state, {
        news: action.payload,
      });
    default:
      return state;
  }
};
