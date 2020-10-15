import {createReducer} from '@reduxjs/toolkit';

import {
  addFriendToQueueAction,
  removeFriendFromQueueAction,
  changeQueueStatusAction,
} from '../actions/queue';

type TId = {
  id: number;
};

const queueReducer = createReducer({} as Record<string, any>, (builder) => {
  builder
    .addCase(addFriendToQueueAction, (state, action) => {
      state.selectedFriends.push(
        state.friendList.find(({id}: TId) => id === action.payload),
      );
    })
    .addCase(removeFriendFromQueueAction, (state, action) => {
      state.selectedFriends = state.selectedFriends.filter(
        ({id}: TId) => id !== action.payload,
      );
    })
    .addCase(changeQueueStatusAction, (state, action) => {
      return [state.queueStatus, action.payload];
    });
});

export default queueReducer;
