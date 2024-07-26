import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import useGetOrderInfo from "../../hooks/useGetOrderInfo";

export default function CheckoutForm({clientSecret, email, address, contactNo, name, setError }) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const userInfo ={name, email, address, contactNo}
    const orderData= useGetOrderInfo(userInfo, clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(orderData)
        if (!email || !address || !contactNo || !name) {
            setError(true)
            toast.error("All fields are required!!!")
            return
        }
        setError(false)
        if (!stripe || !elements) {
            return;
        }
        
        setIsLoading(true);
        fetch('http://localhost:3000/api/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...orderData }),
        }).then((res) => res.json()).then(data => console.log('this is after order', data))

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:5173/products",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            toast.error(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }
     
        
        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}