import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getItems} from '../../actions/actionCreators/newsCreator';

const UserHomeScreen = (props: any) => {
  React.useEffect(() => {
    props.getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>USER NEWS SCREEN</Text>
      {props.news.map((item: any) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  return bindActionCreators(
    {
      getItems,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeScreen);
