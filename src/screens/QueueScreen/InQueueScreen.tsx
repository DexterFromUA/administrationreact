import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {IInQueueScreen} from '../../constants/interfaces/QueueScreen';
import CardViewer from '../../components/ui/CardViewer';
import IconButton from '../../components/ui/IconButton';

const InQueueScreen = ({friendsInQueue}: IInQueueScreen) => {
  const fullWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.info}>You are in the line at the moment</Text>
        <Text style={styles.description}>Your line up:</Text>
        <CardViewer
          text="@you"
          style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
        />
        {friendsInQueue &&
          friendsInQueue.map((
            {name},
            idx, //TODO Type check
          ) => (
            <CardViewer
              key={idx}
              text={'@' + name}
              style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
            />
          ))}
      </View>
      <View style={styles.second}>
        <IconButton
          icon={<Ionicons name="skull-outline" size={20} />}
          style={{
            width: 150,
            height: 44,
            backgroundColor: 'red',
            borderWidth: 0,
          }} //TODO: add alert
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
