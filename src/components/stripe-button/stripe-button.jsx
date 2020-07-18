import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51H6IHGAOq3N361ITkKnmqc3TqBYUg13bLtMjFtkYcdp7bq7zH1zLoOIaYD6IWf88aGp3gYQkt3VfTkdbnni007rC00RzrMxgcB';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Shoorano Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is £${ price }`}
            amount={ priceForStripe }
            panelLabel="Pay Now"
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
};

export default StripeCheckoutButton;