import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../pages/CheckoutForm";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../features/user/userSlice";

const CheckoutPayment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const dispatch = useDispatch();
  const shippingInfo = useSelector((state) => state.auth.shippingInfo);
  const cartState = useSelector((state) => state.auth.cartProducts);
  const totalAmount = useSelector((state) => state.auth.totalAmount);

  useEffect(() => {
    fetch("http://localhost:3000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalAmount * 100 }),
    }).then(async (result) => {
      const { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [totalAmount]);

  const handleCheckout = (paymentInfo) => {
    const orderData = {
      shippingInfo,
      orderItems: cartState.map((item) => ({
        product: item.productId._id,
        color: item.color._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: totalAmount,
      totalPriceAfterDiscount: totalAmount, // Adjust if you have discounts
      paymentInfo,
    };

    console.log("Order Data to be dispatched:", orderData); // Log the order data

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
