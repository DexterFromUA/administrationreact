export interface OutQueueViewInterface {
  setting: boolean;
  setSetting: (flag: boolean) => void;
  fullWidth: number;
  selectedFriends: Record<string, any>[];
  queueRemoveFriend: (id: number) => void;
  setVisible: (flag: boolean) => void;
  modalVisible: boolean;
  leftFriends: Record<string, any>[];
  queueAddFriend: (id: number) => void;
}

export interface OutQueueInterface {
  friendList: Record<string, any>[];
  selectedFriends: Record<string, any>[];
  queueRemoveFriend: (id: number) => void;
  queueAddFriend: (id: number) => void;
}
