import userTypes from './user.types';

// eslint-disable-next-line import/prefer-default-export
export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});
