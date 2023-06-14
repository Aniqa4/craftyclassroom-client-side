import React from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
function Payment() {
    return (
        <div className='container mx-auto my-24 '>
            <SectionTitle title={'payment'}></SectionTitle>
            <Elements stripe={stripePromise} >
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default Payment