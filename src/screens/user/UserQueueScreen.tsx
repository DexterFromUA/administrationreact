import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import InQueueScreen from './interfaceScreens/InQueueScreen';
import OutQueueScreen from './interfaceScreens/OutQueueScreen';
import {addFriendToQueue} from '../../actions/queue';

type IUserQueueScreen = {
  queueStatus: boolean;
  friendList: Object[];
  queueAddFriend: (id: number) => Object;
};

const UserQueueScreen = ({
  queueStatus,
  queueAddFriend,
  friendList,
}: IUserQueueScreen) => {
  return queueStatus ? (
    <InQueueScreen />
  ) : (
    <OutQueueScreen friendList={friendList} queueAddFriend={queueAddFriend} />
  );
};

const mapStateToProps = (state: any) => {
  return {
    queueStatus: state.queue.queueStatus,
    friendList: state.queue.friendList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      queueAddFriend: addFriendToQueue,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserQueueScreen);
