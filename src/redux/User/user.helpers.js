import { auth } from '../../Firebase/utils';

const handleResetPasswordAPI = (email) => new Promise((resolve, reject) => {
  // url to send user when they have reset their passord
  const config = {
    url: 'http://localhost:3000/login',
  };

  auth.sendPasswordResetEmail(email, config)
    .then(() => {
      resolve();
    })
    .catch(() => {
      const err = ['email not found! Please try again.'];
      reject(err);
    });
});

export default handleResetPasswordAPI;
