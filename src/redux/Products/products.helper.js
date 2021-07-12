import { firestore } from '../../Firebase/utils';

// eslint-disable-next-line import/prefer-default-export
export const handleAddProduct = (product) => new Promise((resolve, reject) => {
  firestore
    .collection('products')
    .doc()
    .set(product)
    .then(() => {
      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
