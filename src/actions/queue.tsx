export const addFriendToQueue = (id: number) => {
  return {
    type: 'ADD_FRIEND_TO_QUEUE',
    payload: id,
  };
};
