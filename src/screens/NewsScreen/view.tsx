import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Loading from '../../components/ui/Loading';
import Card from '../../components/ui/Card';

import styles from './styles';
import {NewsScreenViewInterface} from './types';

export default ({loading, news, navigation}: NewsScreenViewInterface) => {
  console.log(news);
  return loading ? (
    <SafeAreaView style={styles.loading}>
      <Loading />
    </SafeAreaView>
  ) : (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {news.map(
            (item: any) =>
              item && (
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
              ),
          )}
          <View style={styles.empty}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
