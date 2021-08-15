/* eslint-disable no-unused-vars */
import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import './styles.scss';

const PaymentDetails = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="paymentDetails">
      <form onSubmit={() => handleSubmit()}>
        <div className="group">
          <h2>Shipping Address</h2>

          <FormInput
            placeholder="Recipient Address"
            type="text"
          />

          <FormInput
            placeholder="line 1"
            type="text"
          />

          <FormInput
            placeholder="line 2"
            type="text"
          />

          <FormInput
            placeholder="City"
            type="text"
          />
          <FormInput
            placeholder="State"
            type="text"
          />
          <FormInput
            placeholder="Postal Code"
            type="text"
          />

          <div className="formRow checkoutInput">
            <CountryDropdown
              valueType="short"
            />
          </div>
        </div>
        <div className="group">
          <h2>Billing Address</h2>
          <FormInput
            placeholder="Name on Card"
            type="text"
          />

          <FormInput
            placeholder="line 1"
            type="text"
          />

          <FormInput
            placeholder="line 2"
            type="text"
          />

          <FormInput
            placeholder="City"
            type="text"
          />
          <FormInput
            placeholder="State"
            type="text"
          />
          <FormInput
            placeholder="Postal Code"
            type="text"
          />

          <div className="formRow checkoutInput">
            <CountryDropdown
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
