"use client";
import { Zap } from "lucide-react";
import { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function UpgradeButton() {
  const { user } = useUser();
  const upgradeToPro = useMutation(api.users.upgradeToPro);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/create-order", { method: "POST" });
      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "CodeCraft",
        description: "Lifetime Pro Access",
        order_id: order.id,
        handler: async function (response: any) {
          await upgradeToPro({
            email: user?.emailAddresses[0].emailAddress || "",
            razorpayCustomerId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            amount: 49900,
          });
          alert("🎉 Payment Successful! You are now a Pro member!");
          window.location.reload();
        },
        prefill: {
          name: user?.fullName || "",
          email: user?.emailAddresses[0].emailAddress || "",
        },
        theme: {
          color: "#3B82F6",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
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