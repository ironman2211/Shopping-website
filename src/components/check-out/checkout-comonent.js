import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ amount }) => {
  const publishableKey =
    'pk_test_51KFzknSJ74jQLJ2iacDeA6dv9zt0AiPwFl4Gyla8H7CAc514CbB1xWJnpQYMr9Hz7qO2w8dHJe3S978nUZ81QDNK006RPHWBSy';
  const PriceForStripe = amount * 100;
  const onToken = token => {
    console.log(token);
    alert('payment sucesfull');
  };
  return (
    <StripeCheckout
      label="pay now"
      name="My Shopping.co"
      billingAddress
      shippingAddress
      bitcoin
      image="https://svgshare.com/i/CUz.svg"
      description={`your total amout is $${amount}`}
      amount={PriceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
