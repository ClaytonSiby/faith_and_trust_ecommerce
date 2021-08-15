import React from 'react';
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
          
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
