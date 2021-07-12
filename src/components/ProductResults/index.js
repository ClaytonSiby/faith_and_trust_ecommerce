import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="products">
        <p>No search results found!</p>
      </div>
    );
  }
  return (
    <div className="products my-3 w-100">
      <h1>Browse Products</h1>
      {
        products.map((product) => {
          const { productThumbnail, productName, productPrice } = product;

          if (!productThumbnail || !productName || typeof (productPrice) === 'undefined') return null;

          return (
            <div key={Math.floor(Math.random() * productPrice)}>
              { productName }
            </div>
          );
        })
    }
    </div>
  );
};

export default ProductResults;
