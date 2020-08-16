const INITIAL_STATE = {
  queueStatus: false,
  friendList: [],
  selectedFriends: [],
};

type IAction = {
  type: string;
  payload: any;
};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_QUEUE_STATUS':
      return Object.assign({}, state, {
        queueStatus: action.payload,
      });

    case 'ADD_FRIEND_TO_QUEUE':
      return Object.assign({}, state, {
        selectedFriends: [
          ...state.selectedFriends,
          state.friendList.find(({id}) => id === action.payload),
        ],
      });

    case 'REMOVE_FRIEND_FROM_QUEUE':
      return Object.assign({}, state, {
        selectedFriends: state.selectedFriends.filter(
          ({id}) => id !== action.payload,
        ),
      });

    default:
      return state;
  }
};
