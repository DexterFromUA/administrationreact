import {NewsInterface} from './News';

export interface UserHomeScreenInterface {
  navigation: {navigate: (name: string, options: any) => void};
  news: Array<NewsInterface>;
  loading: boolean;
  getNews: () => void;
}

export interface InformationScreenInterface {
  route: {
    params: {
      title: string;
      full: string;
    };
  };
  navigation: {
    setOptions: (options: Object) => void;
  };
}
