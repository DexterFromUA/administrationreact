export const addFriendToQueue = (id: number) => {
  return {
    type: 'ADD_FRIEND_TO_QUEUE',
    payload: id,
  };
};

export const removeFriendFromQueue = (id: number) => {
  return {
    type: 'REMOVE_FRIEND_FROM_QUEUE',
    payload: id,
  };
};
