/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from '../../Forms/Button';
import { addProduct } from '../../../redux/Cart/cart.actions';
import './styles.scss';

const Product = (product) => {
  const {
    documentID,
    productThumbnail,
    productName,
    productPrice,
  } = product;
  const dispatch = useDispatch();

  if (
    !documentID
    || !productThumbnail
    || !productName
    || typeof productPrice === 'undefined'
  ) return null;

  const configAddToCart = {
    type: 'button',
  };

  const handleAddToCart = (product) => {
    if (!product) return;

    dispatch(addProduct(product));
  };

  return (
    <Card className="my-2 main">
      <Link to={`/product/${documentID}`}>
        <Card.Img variant="top" className="p-0" src={productThumbnail} />
      </Link>
      <Card.Body>
        <Link to={`/product/${documentID}`}><Card.Title>{productName}</Card.Title></Link>
        <Card.Text>
          $
          {productPrice}
        </Card.Text>
        <Button {...configAddToCart} onClick={() => handleAddToCart(product)}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  documentID: PropTypes.string.isRequired,
  productThumbnail: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default Product;
