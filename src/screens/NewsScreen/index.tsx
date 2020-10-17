import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import {UserHomeScreenInterface} from '../../constants/interfaces/UserHomeScreen';
import {getNewsAction} from '../../redux/actions/news';
import Loading from '../../components/ui/Loading';
import Card from '../../components/ui/Card';

const NewsScreen = ({
  navigation,
  news,
  loading,
  getNews,
}: UserHomeScreenInterface) => {
  React.useEffect(() => {
    getNews();
  }, [getNews]);

  return loading ? (
    <SafeAreaView style={styles.loading}>
      <Loading />
    </SafeAreaView>
  ) : (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {news.map((item: any) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              onClick={() =>
                navigation.navigate('More', {
                  title: item.title,
                  full: item.text,
                })
              }
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = (state: Record<string, any>) => {
  return {
    news: state.news.data,
    loading: state.news.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getNews: getNewsAction,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
