/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '../Forms/Button';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import Item from './Item';
import './styles.scss';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

const Checkout = () => {
  const { cartItems } = useSelector(mapState);

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="cart">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <table className="checkoutHeader" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </tbody>
              </table>
            </tr>
            <tr>
              <table border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                  {
                    cartItems.map((item) => (
                      <tr key={item.documentID}>
                        <Item {...item} />
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </tr>
            <tr>
              <table algin="right" border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                  <tr algin="right">
                    <td>
                      <h3>Total: </h3>
                    </td>
                  </tr>
                  <tr>
                    <table border="0" cellPadding="10" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td>
                            <Button>Continue Shopping</Button>
                          </td>
                          <td>
                            <Button>CheckOut</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </tr>
                </tbody>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checkout;
