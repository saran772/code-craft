import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const order = await razorpay.orders.create({
      amount: 49900,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: "Error creating order" }, { status: 500 });
  }
}