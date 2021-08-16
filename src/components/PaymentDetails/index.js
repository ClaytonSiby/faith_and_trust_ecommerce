/* eslint-disable no-useless-return */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CountryDropdown } from 'react-country-region-selector';
import { createStructuredSelector } from 'reselect';
import { apiInstance } from '../../Utils';
import { selectCartTotal } from '../../redux/Cart/cart.selectors';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import './styles.scss';

const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
});

const PaymentDetails = () => {
  const elements = useElements();
  const stripe = useStripe();
  const { total } = useSelector(mapState);
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement('card');

    if (
      !shippingAddress.line1 || !shippingAddress.city
      || !shippingAddress.state || !shippingAddress.postal_code
      || !shippingAddress.country || !billingAddress.line1
      || !billingAddress.line2 || !billingAddress.state
      || !billingAddress.postal_code || !billingAddress.country
      || !recipientName || !nameOnCard
    ) { return; }

    // send client data to the firebase functions ( /payment/create ) route.
    apiInstance.post('/payments/create', {
      amount: total * 100,
      shipping: {
        name: recipientName,
        address: {
          ...shippingAddress,
        },
      },
    }).then(({ data: clientSecret }) => {
      stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: nameOnCard,
          address: {
            ...billingAddress,
          },
        },
      }).then(({ paymentMethod }) => {
        stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        })
          .then(({ paymentIntent }) => {
            console.log(paymentIntent);
          });
      });
    });
  };

  const handleShipping = (event) => {
    const { name, value } = event.target;

    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '16px',
      },
    },
    hidePostalCode: true,
  };

  const handleBilling = (event) => {
    const { name, value } = event.target;

    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  return (
    <div className="paymentDetails">
      <form onSubmit={() => handleSubmit()}>
        <div className="group">
          <h2>Shipping Address</h2>

          <FormInput
            placeholder="Recipient Name"
            name={recipientName}
            handleChange={(e) => setRecipientName(e.target.value)}
            value={recipientName}
            type="text"
            required
          />

          <FormInput
            placeholder="line 1"
            name="line1"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.line1}
            type="text"
            required
          />

          <FormInput
            placeholder="line 2"
            name="line2"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.line2}
            type="text"
          />

          <FormInput
            placeholder="City"
            name="city"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.city}
            type="text"
            required
          />
          <FormInput
            placeholder="State"
            name="state"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.state}
            type="text"
            required
          />
          <FormInput
            placeholder="Postal Code"
            name="postal_code"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.postal_code}
            type="text"
            required
          />

          <div className="formRow checkoutInput">
            <CountryDropdown
              required
              name="country"
              onChange={(val) => handleShipping({
                target: {
                  name: 'country',
                  value: val,
                },
              })}
              value={shippingAddress.country}
              valueType="short"
            />
          </div>
        </div>
        <div className="group">
          <h2>Billing Address</h2>
          <FormInput
            name="nameOnCard"
            placeholder="Name on Card"
            handleChange={(e) => setNameOnCard(e.target.value)}
            value={nameOnCard}
            type="text"
            required
          />

          <FormInput
            placeholder="line 1"
            name="line1"
            required
            handleChange={(event) => handleBilling(event)}
            value={billingAddress.line1}
            type="text"
          />

          <FormInput
            placeholder="line 2"
            name="line2"
            handleChange={(event) => handleBilling(event)}
            value={billingAddress.line2}
            type="text"
          />

          <FormInput
            placeholder="City"
            name="city"
            handleChange={(event) => handleBilling(event)}
            value={billingAddress.city}
            type="text"
            required
          />
          <FormInput
            placeholder="State"
            name="state"
            handleChange={(event) => handleBilling(event)}
            value={billingAddress.state}
            type="text"
            required
          />
          <FormInput
            placeholder="Postal Code"
            name="postal_code"
            handleChange={(event) => handleBilling(event)}
            value={billingAddress.postal_code}
            type="text"
            required
          />

          <div className="formRow checkoutInput">
            <CountryDropdown
              name="country"
              required
              onChange={(val) => handleBilling({
                target: {
                  name: 'country',
                  value: val,
                },
              })}
              value={billingAddress.country}
              valueType="short"
            />
          </div>
        </div>
        <div className="group">
          <h2>Card Details</h2>

          <CardElement options={configCardElement} />
        </div>

        <Button type="submit">Pay Now</Button>
      </form>
    </div>
  );
};

export default PaymentDetails;
