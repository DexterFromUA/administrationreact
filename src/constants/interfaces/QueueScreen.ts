export interface IUserQueueScreen {
  queueStatus: boolean;
  friendList: Object[];
  addFriend: (id: number) => void;
  removeFriend: (id: number) => void;
  selectedFriends: Object[];
  friendsInQueue: Object[];
}

export interface IOutQueueScreen {
  queueAddFriend: (id: number) => void;
  friendList: Object[];
  queueRemoveFriend: (id: number) => void;
  selectedFriends: Object[];
}

export interface IInQueueScreen {
  friendsInQueue: Object[];
}
