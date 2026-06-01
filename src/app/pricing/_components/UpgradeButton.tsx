"use client";
import { Zap } from "lucide-react";

export default function UpgradeButton() {
  const handlePayment = async () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 49900,
      currency: "INR",
      name: "CodeCraft",
      description: "Lifetime Pro Access",
      handler: function (response: { razorpay_payment_id: string }) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
      },
      theme: {
        color: "#3B82F6",
      },
    };
    const razorpay = new (window as any).Razorpay(options);
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