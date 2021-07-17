/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
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

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} alt="hero thumbnail" />
      </div>
      <div className="productDetails">
        <ul>
          <li><h1>{ productName }</h1></li>
          <li>
            <span>
              $
              {productPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn}>Add To Cart</Button>
            </div>
          </li>
          <li>
            <span dangerouslySetInnerHTML={{ __html: productDescription }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
