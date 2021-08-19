/* eslint-disable import/prefer-default-export */
import { firestore } from '../../firebase/utils';

export const handleSaveOrder = (order) => new Promise((resolve, reject) => {
  firestore
    .collection('orders')
    .doc()
    .set(order)
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});
