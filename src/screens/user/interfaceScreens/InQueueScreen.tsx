import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardViewer from '../../../components/CardViewer';
import IconButton from '../../../components/IconButton';

type IInQueueScreen = {
  friendsInQueue: Object[];
};

const InQueueScreen = ({friendsInQueue}: IInQueueScreen) => {
  const fullWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.info}>You are in the line at the moment</Text>
        <Text style={styles.description}>Your line up:</Text>
        <CardViewer
          text="@you"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
        />
        {friendsInQueue &&
          friendsInQueue.map((item, idx) => (
            <CardViewer
              key={idx}
              text={'@' + item.name}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
            />
          ))}
      </View>
      <View style={styles.second}>
        <IconButton
          icon={<Ionicons name="arrow-back-circle-outline" size={20} />}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 100,
            height: 44,
            backgroundColor: 'red',
            borderWidth: 0,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    paddingVertical: 40,
    fontSize: 18,
  },
  element: {
    flexDirection: 'row',
  },
  first: {
    flex: 9,
    alignItems: 'center',
  },
  second: {
    flex: 1,
  },
  description: {
    alignSelf: 'flex-start',
    fontSize: 16,
    paddingBottom: 10,
    paddingLeft: 15,
  },
});

export default InQueueScreen;
