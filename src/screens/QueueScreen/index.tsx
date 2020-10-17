import React from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import {IUserQueueScreen} from '../../constants/interfaces/QueueScreen';
import {
  addFriendToQueueAction,
  changeQueueStatusAction,
  removeFriendFromQueueAction,
} from '../../redux/actions/queue';
import InQueueScreen from './InQueueScreen';
import OutQueueScreen from './OutQueueScreen';

const QueueScreen = ({
  queueStatus,
  addFriend,
  friendList,
  removeFriend,
  selectedFriends,
  friendsInQueue,
}: IUserQueueScreen) => {
  return queueStatus ? (
    <InQueueScreen friendsInQueue={friendsInQueue} />
  ) : (
    <OutQueueScreen
      friendList={friendList}
      queueAddFriend={addFriend}
      queueRemoveFriend={removeFriend}
      selectedFriends={selectedFriends}
    />
  );
};

const mapStateToProps = (state: Record<string, any>) => {
  return {
    queueStatus: state.queue.queueStatus,
    friendList: state.queue.friendList,
    selectedFriends: state.queue.selectedFriends,
    friendsInQueue: state.queue.friendsInQueue,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      addFriend: addFriendToQueueAction,
      changeQueue: changeQueueStatusAction,
      removeFriend: removeFriendFromQueueAction,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QueueScreen);
