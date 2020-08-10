const INITIAL_STATE = {
  queueStatus: false,
  friendList: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'CHANGE_QUEUE_STATUS':
      return Object.assign({}, state, {
        queueStatus: action.payload,
      });

    case 'ADD_FRIEND_TO_QUEUE':
      return Object.assign({}, state, {
        friendList: [...state.friendList, action.payload],
      });

    default:
      return state;
  }
};
