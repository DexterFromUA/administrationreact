const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'GET_INVITE_STATUS':
      return action.payload;

    default:
      return state;
  }
};
