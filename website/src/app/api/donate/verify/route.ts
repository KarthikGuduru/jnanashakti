import { NextResponse } from "next/server";
import crypto from "crypto";

function err(msg: string, status = 400) {
  return NextResponse.json({ error: msg }, { status });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return err("Invalid request body.");

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donor } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature)
    return err("Missing Razorpay payment fields.");

  // ── Verify Razorpay signature ─────────────────────────────────────────────
  // TODO (Razorpay): set RAZORPAY_KEY_SECRET in .env.local
  //
  const keySecret = process.env.RAZORPAY_KEY_SECRET ?? "stub_secret";
  const expected = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expected !== razorpay_signature && process.env.NODE_ENV === "production")
    return err("Payment signature verification failed.", 403);

  // ── Send 80G tax receipt ──────────────────────────────────────────────────
  // TODO (email): generate and email the 80G receipt PDF to donor.email.
  // The receipt must include: donor name, PAN, amount, date, org details.
  //
  // await send80GReceipt({ ...donor, paymentId: razorpay_payment_id });

  // ── Persist donation record ───────────────────────────────────────────────
  // TODO (DB): save donation to your database (Supabase / PlanetScale / etc.)
  //
  // await db.donations.create({ data: { ...donor, paymentId: razorpay_payment_id, orderId: razorpay_order_id } });

  const receiptId = `RCP_${Date.now()}`;
  console.log(`[verify] Payment verified — receipt ${receiptId} for order ${razorpay_order_id}`);

  return NextResponse.json({ success: true, receiptId });
}
