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

export const handleFetchProducts = () => new Promise((resolve, reject) => {
  firestore
    .collection('products')
    .get()
    .then((snapshot) => {
      const productsArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        documentID: doc.id,
      }));

      resolve(productsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export const handleDeleteProduct = (documentID) => new Promise((resolve, reject) => {
  firestore
    .collection('products')
    .doc(documentID)
    .delete()
    .then(() => {
      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
