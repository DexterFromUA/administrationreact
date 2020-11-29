export interface NewsScreenViewInterface {
  loading: boolean;
  news: Record<string, any>[];
  navigation: any;
}

export interface NewsScreenInterface {
  loading: boolean;
  news: Record<string, any>[];
  navigation: any;
  getNewsTC: () => void;
  setSetting: () => void;
}
