/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import Item from './Item';
import Button from '../Forms/Button';
import './styles.scss';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

const CheckOut = () => {
  const { cartItems } = useSelector(mapState);

  return (
    <div className="checkout">
      <h1>CheckOut</h1>

      <div className="cart">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
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
              </td>
            </tr>

            <tr>
              <td>
                <table border="0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    {
                    cartItems.map((item) => (
                      <tr key={item.documentID}>
                        <td>
                          <Item {...item} />
                        </td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <table algin="right" border="0" cellSpacing="0" cellPadding="10">
                  <tbody>
                    <tr algin="right">
                      <td>
                        <h3>Total: </h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table border="0" cellSpacing="0" cellPadding="10">
                          <tbody>
                            <tr>
                              <td>
                                <Button>Continue Shopping</Button>
                              </td>
                              <td>
                                <Button>Checkout</Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckOut;
