import {NEWS_URI} from '../constants/uris';

export const getNewsService = async (): Promise<Array<Object>> => {
  // переписать object
  const response = await fetch(NEWS_URI);
  const result = await response.json();
  return result.rows;
};
