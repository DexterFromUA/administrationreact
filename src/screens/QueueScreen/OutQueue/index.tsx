import React from 'react';
import {Dimensions} from 'react-native';

import {OutQueueInterface} from './types';
import ScreenView from './view';

export default ({
  friendList,
  selectedFriends,
  queueRemoveFriend,
  queueAddFriend,
}: OutQueueInterface) => {
  const fullWidth = Dimensions.get('window').width;
  const [modalVisible, setVisible] = React.useState(false);
  const [setting, setSetting] = React.useState(false);
  const leftFriends = friendList.filter(
    (item) => !selectedFriends.some((item2) => item.id === item2.id), //TODO Type check
  );

  return (
    <ScreenView
      setting={setting}
      setSetting={setSetting}
      fullWidth={fullWidth}
      selectedFriends={selectedFriends}
      queueRemoveFriend={queueRemoveFriend}
      setVisible={setVisible}
      modalVisible={modalVisible}
      leftFriends={leftFriends}
      queueAddFriend={queueAddFriend}
    />
  );
};
