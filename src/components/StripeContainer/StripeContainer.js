import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from '../PaymentForm/PaymentForm';

const PUBLIC_KEY = "pk_test_51JDv5mCkPtIBxhd4ZvINiDx3VlkG0WVNTSODO8Oc7Wz0l1ewfuqcfiYRzavw9LOTM04WB2grYc7HBFzYP9hJr1e100fqFOLZJ8";
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}
