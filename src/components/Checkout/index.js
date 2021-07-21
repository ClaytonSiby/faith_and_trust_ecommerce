/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card, Container, Col, Row,
} from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import Button from '../Forms/Button';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import './styles.scss';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

const Checkout = () => {
  const { cartItems } = useSelector(mapState);

  return (
    <Container>
      <h2 className="p-0">Checkout</h2>

      <Row className="cart">
        {
          cartItems.length > 0 ? cartItems.map((product) => {
            const {
              documentID, productName, productThumbnail, productDescription, productPrice,
            } = product;

            return (
              <Col key={documentID} sm={12} className="my-2">
                <Card>
                  <Row>
                    <Col md={5}>
                      <Card.Img variant="top" src={productThumbnail} alt={productName} />
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>{ productName }</Card.Title>
                        <div>
                          <Card.Text>
                            <span>
                              $
                              { productPrice }
                            </span>
                          </Card.Text>
                          <p dangerouslySetInnerHTML={{ __html: productDescription }} />
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          }) : <p className="mx-3">You have no Items in your Cart.</p>
        }
        {
          cartItems.length > 0 && (
            <Col>
              <Row>
                <Col sm={12} md={6}>
                  <Button type="Button">Continue Shopping</Button>
                </Col>
                <Col sm={12} md={6}>
                  <Button type="Button">CheckOut</Button>
                </Col>
              </Row>
            </Col>
          )
        }
      </Row>
    </Container>
  );
};

export default Checkout;
