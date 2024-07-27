import React, { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import useGetOrderInfo from "../../hooks/useGetOrderInfo";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm({ clientSecret, email, address, contactNo, name, setError }) {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const cartItems = useAppSelector(state => state.cart.cartItems);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const userInfo = { name, email, address, contactNo };
    const orderData = useGetOrderInfo(userInfo, clientSecret, cartItems);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        if (!email || !address || !contactNo || !name) {
            setError(true);
            toast.error("All fields are required!!!");
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                payment_method_data: {
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
            redirect: "if_required",
        });

        if (error) {
            setMessage(error.message);
            setError(true);
            toast.error(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            console.log(paymentIntent)
            fetch('http://localhost:3000/api/orders', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...orderData, paymentIntent:paymentIntent.id, paymentMethod: paymentIntent.payment_method  }),
            }).then((res) => res.json()).then(data => {
                console.log(data)
                toast.success(data?.message)
                toast.success("Payment succeeded!");
                navigate(`/checkout/success?transaction_id=${paymentIntent.id}`)
            })
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Place Order"}
                </span>
            </button>
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}
