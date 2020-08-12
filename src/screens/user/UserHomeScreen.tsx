import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Loading from '../../components/Loading';
import Card from '../../components/Card';

const UserHomeScreen = (props: any) => {
  if (props.isLoading) {
    return (
      <SafeAreaView style={styles.loading}>
        <Loading />
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {props.news.map((item: any) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              onClick={() =>
                props.navigation.navigate('More', {
                  title: item.title,
                  full: item.full,
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

const mapStateToProps = (state: any) => {
  return {
    news: state.news.news,
    isLoading: state.news.loadingNews,
    isError: state.news.errorNews,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeScreen);
