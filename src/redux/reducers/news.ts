import {AnyAction, Dispatch} from 'redux';

import {FBDatabaseFactory} from '../../services/firebase';

const LOADING = 'NEWS/LOADING';
const GET_NEWS = 'NEWS/GET_NEWS';

const initialState = {
  data: [],
  loading: true,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_NEWS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};

export const getNews = (news: Record<string, any>[]) => ({
  type: GET_NEWS,
  payload: news,
});

export const switchLoading = (loading: boolean) => ({
  type: LOADING,
  payload: loading,
});

export const getNewsTC = () => async (
  dispatch: Dispatch,
  getState: () => any,
) => {
  const news = await FBDatabaseFactory().readNews();

  dispatch(getNews(news));
  dispatch(switchLoading(!getState().news.loading));
};
