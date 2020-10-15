import {createAction} from '@reduxjs/toolkit';

import {
  ADD_FRIEND_TO_QUEUE,
  CHANGE_QUEUE_STATUS,
  REMOVE_FRIEND_FROM_QUEUE,
} from '../../constants/actions';

export const addFriendToQueueAction = createAction<number>(ADD_FRIEND_TO_QUEUE);
export const removeFriendFromQueueAction = createAction<number>(
  REMOVE_FRIEND_FROM_QUEUE,
);
export const changeQueueStatusAction = createAction<boolean>(
  CHANGE_QUEUE_STATUS,
);
