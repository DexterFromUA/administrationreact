import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {getNewsTC} from '../../redux/reducers/news';
import {setSetting} from '../../redux/reducers/app';

import ScreenView from './view';
import {NewsScreenInterface} from './types';

const mapStateToProps = ({news}: Record<string, any>) => {
  return {
    news: news.data,
    loading: news.loading,
  };
};

export default connect(mapStateToProps, {
  getNewsTC,
  setSetting,
})(
  ({navigation, news, loading, getNewsTC, setSetting}: NewsScreenInterface) => {
    const {setOptions} = useNavigation();

    React.useEffect(() => {
      getNewsTC();
      setOptions({
        headerRight: () => {
          return <Button title="Settings" onPress={() => setSetting()} />;
        },
      });
    }, []);

    return <ScreenView loading={loading} news={news} navigation={navigation} />;
  },
);
