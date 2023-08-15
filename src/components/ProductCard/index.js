/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
  fetchProductStart,
  setProduct,
} from '../../redux/Products/products.actions';
import { addProduct } from '../../redux/Cart/cart.actions';
import './styles.scss';

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push('/cart');
  };

  return (
    <div className="productDetails container my-3">
      <div className="row">
        <div className="col-5">
          <img src={productThumbnail} alt="thumbnail" className="h-100 w-100" />
        </div>
        <div className="col-7">
          <div>{productName}</div>
          <p>
            $
            {productPrice}
          </p>
          <Button
            variant="primary"
            onClick={() => handleAddProductToCart(product)}
            {...configAddToCartBtn}
          >
            Add To Cart
          </Button>
          <div dangerouslySetInnerHTML={{ __html: productDescription }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
