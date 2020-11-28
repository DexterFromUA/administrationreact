import React from 'react';
import {connect} from 'react-redux';

import {
  addFriend,
  getFriendsTC,
  removeFriend,
  changeStatus,
} from '../../redux/reducers/queue';

import ScreenView from './view';

const mapStateToProps = (state: Record<string, any>) => {
  return {
    queueStatus: state.queue.queueStatus,
    friendList: state.queue.friendList,
    selectedFriends: state.queue.selectedFriends,
    friendsInQueue: state.queue.friendsInQueue,
  };
};

export default connect(mapStateToProps, {
  addFriend,
  removeFriend,
  changeStatus,
  getFriendsTC,
})(
  ({
    queueStatus,
    friendList,
    selectedFriends,
    friendsInQueue,
    addFriend,
    removeFriend,
    changeStatus,
  }) => {
    React.useEffect(() => {
      console.log('Queue mounted');
      // getFriendsTC();
    }, []);

    return (
      <ScreenView
        queueStatus={queueStatus}
        friendList={friendList}
        selectedFriends={selectedFriends}
        friendsInQueue={friendsInQueue}
        addFriend={addFriend}
        removeFriend={removeFriend}
      />
    );
  },
);
