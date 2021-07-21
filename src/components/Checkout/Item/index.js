import React from 'react';

const Item = (product) => {
  const {
    productName, productThumbnail, productPrice, quantity,
  } = product;

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="0">
      <tbody>
        <tr>
          <td>
            <img scr={productThumbnail} alt={productName} />
          </td>
          <td>
            { productName }
          </td>
          <td>
            <span>
              {quantity}
            </span>
          </td>
          <td>
            $
            {productPrice}
          </td>
          <td align="center">
            <span>X</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
