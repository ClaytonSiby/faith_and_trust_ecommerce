/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from '../../redux/Products/products.actions';
import Modal from '../../components/Modal';
import FormInput from '../../components/Forms/FormInput';
import FormSelect from '../../components/Forms/FormSelect';
import Button from '../../components/Forms/Button';
import LoadMore from '../../components/LoadMore';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('mens');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
      }),
    );
    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      }),
    );
  };

  const configLoadMore = {
    onLoadMoreEvent: handleLoadMore,
  };

  return (
    <div className="admin">
      <Container fluid className="p-0">
        <Row>
          <Col xs={12}>
            <h1>Manage Products</h1>
          </Col>

          <Col xs={12} className="my-2 mb-3">
            <div className="callToActions">
              <ul>
                <li>
                  <Button onClick={() => toggleModal()}>Add new product</Button>
                </li>
              </ul>
            </div>

            <Modal {...configModal}>
              <div className="addNewProductForm">
                <form onSubmit={handleSubmit}>
                  <h2>Add new product</h2>

                  <FormSelect
                    label="Category"
                    options={[
                      {
                        value: 'mens',
                        name: 'Mens',
                      },
                      {
                        value: 'womens',
                        name: 'Womens',
                      },
                    ]}
                    handleChange={(e) => setProductCategory(e.target.value)}
                  />

                  <FormInput
                    label="Name"
                    type="text"
                    value={productName}
                    handleChange={(e) => setProductName(e.target.value)}
                  />

                  <FormInput
                    label="Main image URL"
                    type="url"
                    value={productThumbnail}
                    handleChange={(e) => setProductThumbnail(e.target.value)}
                  />

                  <FormInput
                    label="Price"
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    value={productPrice}
                    handleChange={(e) => setProductPrice(e.target.value)}
                  />

                  <Button type="submit">Add product</Button>
                </form>
              </div>
            </Modal>
          </Col>
        </Row>
        <Row>
          {(Array.isArray(data) && data.length > 0) && data.map((product) => {
            const {
              productName, productThumbnail, productPrice, documentID,
            } = product;
            return (
              <Col
                xs={12}
                sm={12}
                md={3}
                lg={4}
                key={productThumbnail}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={productThumbnail}
                    alt="product thumbnail"
                  />
                  <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                      $
                      {productPrice}
                    </Card.Text>
                    <Button
                      onClick={() => dispatch(deleteProductStart(documentID))}
                    >
                      Delete Product
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

          <Col sm={12} className="my-12">
            { !isLastPage && <LoadMore {...configLoadMore} /> }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
