import { NextResponse } from "next/server";

export async function POST() {
  try {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!;
    const keySecret = process.env.RAZORPAY_SECRET_KEY!;

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(keyId + ":" + keySecret).toString("base64"),
      },
      body: JSON.stringify({
        amount: 49900,
        currency: "INR",
        receipt: "receipt_" + Date.now(),
      }),
    });

    const order = await response.json();
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: "Error creating order" }, { status: 500 });
  }
}