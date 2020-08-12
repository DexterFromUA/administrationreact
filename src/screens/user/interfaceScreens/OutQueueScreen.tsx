import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardViewer from '../../../components/CardViewer';
import IconButton from '../../../components/IconButton';
import ModalComponent from '../../../components/Modal';

type IOutQueueScreen = {
  queueAddFriend: (id: number) => void;
  friendList: Object[];
  queueRemoveFriend: (id: number) => void;
  selectedFriends: Object[];
};

const OutQueueScreen = ({
  queueAddFriend,
  friendList,
  queueRemoveFriend,
  selectedFriends,
}: IOutQueueScreen) => {
  const fullWidth = Dimensions.get('window').width;
  const [modalVisible, setVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.info}>Here you can take a queue for a table</Text>
        <CardViewer
          text="@username"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
        />
        {selectedFriends &&
          selectedFriends.map((friend, idx) => (
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
                onClick={() => queueRemoveFriend(friend.id)}
              />
            </View>
          ))}
        {selectedFriends.length < 5 && (
          <View style={{width: fullWidth - 40}}>
            <IconButton
              icon={<Ionicons name="person-add-outline" size={20} />}
              onClick={() => setVisible(true)}
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
      <ModalComponent
        visible={modalVisible}
        setVisible={() => setVisible(!modalVisible)}
        list={friendList}
        selectFromList={queueAddFriend}
        listWithButton
        icon={<Ionicons name="person-add-outline" size={20} />}
      />
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
