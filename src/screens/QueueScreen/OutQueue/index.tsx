import React from 'react';
import {Button} from 'react-native';
import {Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {setSetting} from '../../../redux/reducers/app';

import {OutQueueInterface} from './types';
import ScreenView from './view';

export default connect(null, {setSetting})(
  ({
    friendList,
    selectedFriends,
    queueRemoveFriend,
    queueAddFriend,
    setSetting,
  }: OutQueueInterface) => {
    const {setOptions} = useNavigation();
    const fullWidth = Dimensions.get('window').width;
    const [modalVisible, setVisible] = React.useState(false);
    const leftFriends = friendList.filter(
      (item) => !selectedFriends.some((item2) => item.id === item2.id), //TODO Type check
    );

    React.useEffect(() => {
      setOptions({
        headerRight: () => {
          return <Button title="Settings" onPress={() => setSetting()} />;
        },
      });
    }, []);

    return (
      <ScreenView
        fullWidth={fullWidth}
        selectedFriends={selectedFriends}
        queueRemoveFriend={queueRemoveFriend}
        setVisible={setVisible}
        modalVisible={modalVisible}
        leftFriends={leftFriends}
        queueAddFriend={queueAddFriend}
      />
    );
  },
);
