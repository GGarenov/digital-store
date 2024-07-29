import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../pages/CheckoutForm";
import { useDispatch } from "react-redux";
import { createOrder } from "../features/user/userSlice";

const CheckoutPayment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      const { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  const handleCheckout = (paymentInfo) => {
    const orderData = {
      shippingInfo: {
        firstName: "John",
        lastName: "Doe",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        other: "Apt 4B",
        pincode: 10001,
      },
      orderItems: [
        {
          product: "60d21b967db78e1e48e23c6b", // Replace with actual product ID
          color: "60d21b967db78e1e48e23c6a", // Replace with actual color ID
          quantity: 1,
          price: 100,
        },
      ],
      totalPrice: "100",
      totalPriceAfterDiscount: "90",
      paymentInfo: paymentInfo,
    };

    dispatch(createOrder(orderData));
  };

  return (
    clientSecret &&
    stripePromise && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm handleCheckout={handleCheckout} />
      </Elements>
    )
  );
};

export default CheckoutPayment;
