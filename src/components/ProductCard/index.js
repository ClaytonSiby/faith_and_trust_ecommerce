/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import {
  fetchProductStart,
  setProduct,
} from '../../redux/Products/products.actions';
import { addProduct } from '../../redux/Cart/cart.actions';
import Button from '../Forms/Button';
import './styles.scss';

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);
  const { productID } = useParams();

  const {
    productThumbnail, productName, productPrice, productDescription,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      setProduct({});
    };
  }, []);

  const configAddToCartBtn = {
    type: 'button',
  };

  const handleAddProductToCart = (product) => {
    if (!product) return;

    dispatch(addProduct(product));
  };

  return (
    <Card className="productDetails">
      <Card.Img className="theImage" variant="top" src={productThumbnail} />
      <Card.Body>
        <Card.Title>{ productName }</Card.Title>
        <p>
          $
          {productPrice}
        </p>
        <Button variant="primary" onClick={() => handleAddProductToCart(product)}>Add To Cart</Button>
        <Card.Text dangerouslySetInnerHTML={{ __html: productDescription }} />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
