import { auth, handleUserProfile, GoogleProvider } from '../../Firebase/utils';
import userTypes from './user.types';

export const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});

// eslint-disable-next-line import/prefer-default-export
export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signUpUser = ({
  displayName, email, password, confirmPassword,
}) => async (dispatch) => {
  if (password !== confirmPassword) {
    const err = ['Passwords Don\'t match'];
    dispatch({
      type: userTypes.SIGN_UP_ERROR,
      payload: err,
    });
    return;
  }

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await handleUserProfile(user, { displayName });
    dispatch({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: true,
    });
  } catch (error) {
    // console.log(error);
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  // url to send user when they have reset their passord
  const config = {
    url: 'http://localhost:3000/login',
  };

  try {
    await auth.sendPasswordResetEmail(email, config)
      .then(() => {
        dispatch({
          type: userTypes.RESET_PASSWORD_SUCCESS,
          payload: true,
        });
      })
      .catch(() => {
        const err = ['email not found! Please try again.'];
        dispatch({
          type: userTypes.RESET_PASSWORD_ERROR,
          payload: err,
        });
      });
  } catch (error) {
    // console.log(error)
  }
};

export const signInWithGoogle = () => async (dispatch) => {
  try {
    await auth.signInWithPopup(GoogleProvider)
      .then(() => {
        dispatch({
          type: userTypes.SIGN_IN_SUCCESS,
          payload: true,
        });
      });
  } catch (error) {
    // console.log(error);
  }
};
