import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutForm from "./pages/CheckoutForm";
import Completion from "./pages/Completion";
import CheckoutPayment from "./components/CheckoutPayment";
import PrivateRoutes from "./routing/PrivateRoutes";
import OpenRoutes from "./routing/OpenRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Store />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route
              path="cart"
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route path="checkout" element={<Checkout />} />
            <Route path="Compare-product" element={<CompareProduct />} />
            <Route
              path="wishlist"
              element={
                <PrivateRoutes>
                  <Wishlist />
                </PrivateRoutes>
              }
            />
            <Route
              path="login"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="signup"
              element={
                <OpenRoutes>
                  <SignUp />
                </OpenRoutes>
              }
            />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="refund" element={<RefundPolicy />} />
            <Route path="shipping" element={<ShippingPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="checkoutform" element={<CheckoutForm />} />
            <Route path="completion" element={<Completion />} />
          </Route>
          <Route
            path="checkout/payment"
            element={
              <PrivateRoutes>
                <CheckoutPayment />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
