import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentDetails from '../../components/PaymentDetails';
import { publishableKey } from '../../stripe/config';

const stripePromise = loadStripe(publishableKey);

const Payment = () => (
  <Elements stripe={stripePromise}>
    <PaymentDetails />
  </Elements>
);

export default Payment;
