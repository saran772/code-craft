"use client";
import { Zap } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function UpgradeButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 49900,
      currency: "INR",
      name: "CodeCraft",
      description: "Lifetime Pro Access",
      image: "/favicon.ico",
      handler: function (response: any) {
        alert("🎉 Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
      },
      theme: {
        color: "#3B82F6",
      },
      modal: {
        ondismiss: function () {
          console.log("Payment dismissed");
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro — ₹499
    </button>
  );
}