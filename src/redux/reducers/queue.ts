import {AnyAction, Dispatch} from 'redux';

const ADD_FRIEND_TO_QUEUE = 'QUEUE/ADD_FRIEND_TO_QUEUE';
const CHANGE_QUEUE_STATUS = 'QUEUE/CHANGE_QUEUE_STATUS';
const REMOVE_FRIEND_FROM_QUEUE = 'QUEUE/REMOVE_FRIEND_FROM_QUEUE';
const GET_FRIENDS = 'QUEUE/GET_FRIENDS';

const initialState = {
  queueStatus: false,
  friendList: [
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
    {
      id: 3,
      name: 'test3',
    },
    {
      id: 4,
      name: 'test4',
    },
    {
      id: 5,
      name: 'test5',
    },
    {
      id: 56,
      name: 'test6',
    },
    {
      id: 7,
      name: 'test7',
    },
  ],
  selectedFriends: [],
  friendsInQueue: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_FRIEND_TO_QUEUE: {
      return {
        ...state,
        selectedFriends: [
          ...state.selectedFriends,
          state.friendList.find(({id}) => id === action.payload),
        ],
      };
    }
    case CHANGE_QUEUE_STATUS: {
      return {
        ...state,
        queueStatus: !state.queueStatus,
      };
    }
    case REMOVE_FRIEND_FROM_QUEUE: {
      return {
        ...state,
        selectedFriends: state.selectedFriends.filter(
          ({id}) => id !== action.payload,
        ),
      };
    }
    case GET_FRIENDS: {
      return {
        ...state,
        friendList: action.payload,
      };
    }
    default:
      return state;
  }
};

export const addFriend = (id: number) => ({
  type: ADD_FRIEND_TO_QUEUE,
  payload: id,
});

export const removeFriend = (id: number) => ({
  type: REMOVE_FRIEND_FROM_QUEUE,
  payload: id,
});

export const changeStatus = () => ({
  type: CHANGE_QUEUE_STATUS,
});

export const getFriends = (friends: Record<string, any>[]) => ({
  type: GET_FRIENDS,
  payload: friends,
});

export const getFriendsTC = () => async (dispatch: Dispatch) => {
  console.log('GET FRIENDS TC');
};
