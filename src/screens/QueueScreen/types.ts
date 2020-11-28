export interface QueueScreenViewInterface {
  queueStatus: boolean;
  friendsInQueue: Record<string, any>[];
  friendList: Record<string, any>[];
  addFriend: (id: number) => void;
  removeFriend: (id: number) => void;
  selectedFriends: Record<string, any>[];
}
