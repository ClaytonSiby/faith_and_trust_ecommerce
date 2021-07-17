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

export const handleFetchProducts = ({
  filterType, startAfterDoc, persistProducts = [],
}) => new Promise((resolve, reject) => {
  // const pageSize = 8;

  let ref = firestore.collection('products').orderBy('createdDate');

  if (filterType) ref = ref.where('productCategory', '==', filterType);

  // make the last element from the last limit be the first for the next size elements
  if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

  ref
    .get()
    .then((snapshot) => {
      const totalCount = snapshot.size;
      const data = [
        ...persistProducts,
        ...snapshot.docs.map((doc) => ({
          ...doc.data(),
          documentID: doc.id,
        }))];

      resolve({ data, queryDoc: snapshot.docs[totalCount - 1], isLastPage: totalCount < 1 });
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
