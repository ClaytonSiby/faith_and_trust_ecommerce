/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from '../../Forms/Button';
import './styles.scss';

const Product = ({ productThumbnail, productName, productPrice }) => {
  if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;

  const configAddToCart = {
    type: 'button',
  };

  return (
    <Card>
      <Card.Img variant="top" src={productThumbnail} />
      <Card.Body>
        <Card.Title>{ productName }</Card.Title>
        <Card.Text>
          $
          {productPrice}
        </Card.Text>
        <Button {...configAddToCart}>Add To Cart</Button>
      </Card.Body>
    </Card>

  );
};

Product.propTypes = {
  productThumbnail: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default Product;
