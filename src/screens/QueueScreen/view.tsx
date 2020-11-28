import React from 'react';

import InQueue from './InQueue';
import OutQueue from './OutQueue';

import {QueueScreenViewInterface} from './types';

export default ({
  queueStatus,
  friendsInQueue,
  friendList,
  addFriend,
  removeFriend,
  selectedFriends,
}: QueueScreenViewInterface) => {
  return queueStatus ? (
    <InQueue friendsInQueue={friendsInQueue} />
  ) : (
    <OutQueue
      friendList={friendList}
      queueAddFriend={addFriend}
      queueRemoveFriend={removeFriend}
      selectedFriends={selectedFriends}
    />
  );
};
