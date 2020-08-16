export const getInviteStatus = (id: number) => {
  return {
    type: 'GET_INVITE_STATUS',
    payload: id,
  };
};
