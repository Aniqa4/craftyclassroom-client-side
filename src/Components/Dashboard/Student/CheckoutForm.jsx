import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

     const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
}

console.log(elements);
return (
    <div>
        <form className='w-6/12 mx-auto' onSubmit={handleSubmit} >
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn bg-cyan-950 text-white' disabled={!stripe}>
                Pay
            </button>
        </form>
    </div>
)
}

export default CheckoutForm