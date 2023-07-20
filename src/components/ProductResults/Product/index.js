/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
  const history = useHistory();

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
    history.push('/cart');
  };

  return (
    <Card className="my-2">
      <Link to={`/product/${documentID}`}>
        <Card.Img variant="top" className="p-0" src={productThumbnail} />
      </Link>
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text className="d-flex justify-content-between">
          <span>
            $
            {productPrice}
          </span>
          <span>
            <Link className="text-danger" to={`/product/${documentID}`}>view item</Link>
          </span>
        </Card.Text>
        <Button className="btn btn-md btn-danger" {...configAddToCart} onClick={() => handleAddToCart(product)}>
          Add To Cart
        </Button>
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
