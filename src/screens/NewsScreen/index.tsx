import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
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
          <View style={styles.empty}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingTop: 65,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  empty: {
    height: 65,
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
