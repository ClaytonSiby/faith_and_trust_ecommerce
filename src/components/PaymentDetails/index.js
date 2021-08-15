/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
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

const PaymentDetails = () => {
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleShipping = (event) => {
    const { name, value } = event.target;

    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
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
          />

          <FormInput
            placeholder="line 1"
            name="line1"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.line1}
            type="text"
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
          />
          <FormInput
            placeholder="State"
            name="state"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.state}
            type="text"
          />
          <FormInput
            placeholder="Postal Code"
            name="postal_code"
            handleChange={(event) => handleShipping(event)}
            value={shippingAddress.postal_code}
            type="text"
          />

          <div className="formRow checkoutInput">
            <CountryDropdown
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
          />

          <FormInput
            placeholder="line 1"
            name="line1"
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
          />
          <FormInput
            placeholder="State"
            name="state"
            handleChange={(event) => handleBilling(event)}
            value={billingAddress.state}
            type="text"
          />
          <FormInput
            placeholder="Postal Code"
            name="postal_code"
            handleChange={(event) => handleBilling(event)}
            value={billingAddress.postal_code}
            type="text"
          />

          <div className="formRow checkoutInput">
            <CountryDropdown
              name="country"
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
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
