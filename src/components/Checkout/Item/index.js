/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from '../../../redux/Cart/cart.actions';

const Item = (product) => {
  const dispatch = useDispatch();

  const {
    productName, productThumbnail, productPrice, quantity, documentID,
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({ documentID }),
    );
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product),
    );
  };

  return (

    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>{productName}</td>
          <td>
            <button type="button" onClick={() => handleReduceItem(product)} className="cartBtn font-weight-bold btn addRemove">
              {' '}
              { '<' }
              {' '}
            </button>
            <span>
              &nbsp;
              {quantity}
              &nbsp;
            </span>
            <button type="button" onClick={() => handleAddProduct(product)} className="cartBtn font-weight-bold btn addRemove">
              {' '}
              {'>' }
              {' '}
            </button>
          </td>
          <td>
            $
            {' '}
            {productPrice}
          </td>
          <td align="center">
            <button type="button" className="cartButton btn font-weight-bold" onClick={() => handleRemoveCartItem(documentID)}>X</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
