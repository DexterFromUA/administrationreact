import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import InQueueScreen from './interfaceScreens/InQueueScreen';
import OutQueueScreen from './interfaceScreens/OutQueueScreen';
import {addFriendToQueue, removeFriendFromQueue} from '../../actions/queue';

type IUserQueueScreen = {
  queueStatus: boolean;
  friendList: Object[];
  queueAddFriend: (id: number) => void;
  queueRemoveFriend: (id: number) => void;
  selectedFriends: Object[];
};

const UserQueueScreen = ({
  queueStatus,
  queueAddFriend,
  friendList,
  queueRemoveFriend,
  selectedFriends,
}: IUserQueueScreen) => {
  return queueStatus ? (
    <InQueueScreen />
  ) : (
    <OutQueueScreen
      friendList={friendList}
      queueAddFriend={queueAddFriend}
      queueRemoveFriend={queueRemoveFriend}
      selectedFriends={selectedFriends}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    queueStatus: state.queue.queueStatus,
    friendList: state.queue.friendList,
    selectedFriends: state.queue.selectedFriends,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      queueAddFriend: addFriendToQueue,
      queueRemoveFriend: removeFriendFromQueue,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserQueueScreen);
