import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(1000); // Example amount in cents
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        // Fetch the client secret from the backend
        const response = await fetch('http://localhost:4003/api/payments/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount }),
        });

        const { clientSecret } = await response.json();

        // Confirm the payment with Stripe
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            console.error(error.message);
        } else {
            console.log('Payment successful:', paymentIntent);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                Pay ${amount / 100}
            </button>
        </form>
    );
};

export default CheckoutForm;
