import React from 'react';
import {connect} from 'react-redux';

import {getNewsTC} from '../../redux/reducers/news';

import ScreenView from './view';
import {NewsScreenInterface} from './types';

const mapStateToProps = (state: Record<string, any>) => {
  return {
    news: state.news.data,
    loading: state.news.loading,
  };
};

export default connect(mapStateToProps, {
  getNewsTC,
})(({navigation, news, loading, getNewsTC}: NewsScreenInterface) => {
  React.useEffect(() => {
    getNewsTC();
  }, []);

  return <ScreenView loading={loading} news={news} navigation={navigation} />;
});
