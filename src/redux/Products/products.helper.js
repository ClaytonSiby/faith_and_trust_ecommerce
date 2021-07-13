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

export const handleFetchProducts = ({ filterType }) => new Promise((resolve, reject) => {
  let ref = firestore.collection('products').orderBy('createdDate');

  if (filterType) ref = ref.where('productCategory', '==', filterType);

  ref.get()
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
