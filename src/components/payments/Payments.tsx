import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "../../assets/css/Payments.css"
import CheckoutForm from "./CheckoutFrom";
import OutLayout from "../layouts/OutLayout";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const stripePromise = loadStripe("pk_test_51PcVTyRoCwoYSOYV1HBzmZ0F9Re1F0693yyox4kk5CmN6oaQJreTZHXjQoqOFl8RonKCqcDQQanM8t1I9IDtqaNA00R8CKCzR6");

export default function Payments() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const { cartItems } = useAppSelector((state) => state.cart);
  console.log('console form chekcout poage',cartItems)
  useEffect(() => {
    if (!cartItems.length) {
      navigate("/");
    }
  }, [])
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3000/api/products/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);


  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  return (
    <OutLayout>
      <div className="flex items-center justify-center h-screen">
        <div className="grid lg:grid-cols-3 grid-col-1">

          <div className="bg-white col-span-2 py-14 lg:px-10 px-8">
            <h2 className="text-xl font-medium pb-5">User Details</h2>
            {error && <h3 className="text-red-500 font-bold">All User Information fields are required!!!</h3>}
            <div className="grid md:grid-cols-2 grid-col-1 gap-4">
              <div className="flex flex-col py-4">
                <label htmlFor="First Name" className="text-base font-medium">Name</label>
                <input name="name" onChange={(e) => setName(e.target.value)} type="text" className="outline-none bg-white border-b-2 border-solid focus:border-red-400 transition-all" />
              </div>
              <div className="flex flex-col py-4">
                <label htmlFor="First Name" className="text-base font-medium">Phone Number</label>
                <input onChange={(e) => setContactNo(e.target.value)} type="text" className="outline-none bg-white border-b-2 border-solid focus:border-red-400 transition-all" />
              </div>
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="Email" className="text-base font-medium">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" className="outline-none bg-white border-b-2 border-solid focus:border-red-400 transition-all" />
            </div>

            <div className="flex flex-col py-4 mb-5">
              <label htmlFor="address" className="text-base font-medium">Address</label>
              <input onChange={(e) => setAddress(e.target.value)} type="text" className="outline-none bg-white border-b-2 border-solid focus:border-red-400 transition-all" />
            </div>
          </div>
        </div>

        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm name={name} address={address} contactNo={contactNo} email={email} clientSecret={clientSecret} setError={setError} />
          </Elements>
        )}
      </div>
      <Toaster />
    </OutLayout>
  );
}