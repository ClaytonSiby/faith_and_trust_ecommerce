/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import FormSelect from '../Forms/FormSelect';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import LoadMore from '../LoadMore';
import Product from './Product';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results found!</p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: 'Show All',
        value: '',
      },
      {
        name: 'Mens',
        value: 'mens',
      },
      {
        name: 'Womens',
        value: 'womens',
      },
    ],

    handleChange: handleFilter,
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      }),
    );
  };

  const configLoadMore = {
    onLoadMoreEvent: handleLoadMore,
  };

  return (
    <Container fluid className="my-3 w-100 mx-0 p-0">
      <h1>Browse Products</h1>
      <FormSelect {...configFilters} />
      <Row className="productResults my-2">
        {data.map((product) => {
          const { productThumbnail, productName, productPrice } = product;

          if (
            !productThumbnail
            || !productName
            || typeof productPrice === 'undefined'
          ) return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice,
          };

          return (
            <Col sm={6} md={4} lg={4} xlg={4}>
              <Product
                key={Math.floor(Math.random() * productPrice)}
                {...configProduct}
              />
            </Col>
          );
        })}
      </Row>
      {
        !isLastPage && <LoadMore {...configLoadMore} />
      }
    </Container>
  );
};

export default ProductResults;
