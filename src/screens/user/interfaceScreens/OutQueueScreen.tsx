import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardViewer from '../../../components/CardViewer';
import IconButton from '../../../components/IconButton';

type IOutQueueScreen = {
  queueAddFriend: (id: number) => Object;
  friendList: Object[];
};

const OutQueueScreen = ({queueAddFriend, friendList}: IOutQueueScreen) => {
  const fullWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.info}>Here you can take a queue for a table</Text>
        <CardViewer
          text="@username"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
        />
        {friendList &&
          friendList.map((friend, idx) => (
            <View style={styles.element} key={idx}>
              <CardViewer
                text={friend.name}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: fullWidth - 145,
                  alignItems: 'center',
                  height: 44,
                }}
              />
              <IconButton
                icon={<Ionicons name="person-remove-outline" size={20} />}
              />
            </View>
          ))}
        {friendList.length < 5 && (
          <View style={{width: fullWidth - 40}}>
            <IconButton
              icon={<Ionicons name="person-add-outline" size={20} />}
              onClick={() => queueAddFriend(1)}
            />
          </View>
        )}
      </View>
      <View style={styles.second}>
        <IconButton
          icon={<Ionicons name="arrow-forward-circle-outline" size={20} />}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 100,
            height: 44,
            backgroundColor: 'green',
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
    paddingVertical: 50,
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
});

export default OutQueueScreen;
