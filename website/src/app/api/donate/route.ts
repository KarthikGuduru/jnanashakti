import { NextResponse } from "next/server";

const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

// Donations at or above this amount trigger a verification email to the donor.
const HIGH_VALUE_THRESHOLD = 10_000;

function barePhone(v: string) {
  return v.replace(/\D/g, "").replace(/^91/, "");
}

function err(msg: string, status = 400) {
  return NextResponse.json({ error: msg }, { status });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return err("Invalid request body.");

  const { name, email, phone, pan, amount, isRecurring, citizenDeclared } = body;

  // ── Compliance checks ─────────────────────────────────────────────────────
  if (!citizenDeclared)
    return err("Citizenship declaration is required (FCRA compliance).", 403);

  if (!PAN_REGEX.test(pan))
    return err("Invalid PAN format. Must be 10 characters, e.g. ABCDE1234F.");

  if (!PHONE_REGEX.test(barePhone(phone)))
    return err("Invalid Indian mobile number.");

  if (!name?.trim() || !email?.includes("@"))
    return err("Name and email are required.");

  const amountPaise = Math.round(Number(amount) * 100);
  if (!amountPaise || amountPaise < 100)
    return err("Minimum donation is Rs 1.");

  // ── Create Razorpay order ─────────────────────────────────────────────────
  // TODO (Razorpay): uncomment once RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET
  //   are set in .env.local and razorpay npm package is installed.
  //
  // import Razorpay from "razorpay";
  // const razorpay = new Razorpay({
  //   key_id: process.env.RAZORPAY_KEY_ID!,
  //   key_secret: process.env.RAZORPAY_KEY_SECRET!,
  // });
  // const order = await razorpay.orders.create({
  //   amount: amountPaise,
  //   currency: "INR",
  //   receipt: `rcpt_${Date.now()}`,
  //   notes: { name, email, pan, isRecurring: String(isRecurring) },
  // });
  // const orderId = order.id;

  const orderId = `order_stub_${Date.now()}`; // remove once Razorpay is live

  // ── High-value verification email ────────────────────────────────────────
  if (Number(amount) >= HIGH_VALUE_THRESHOLD) {
    // TODO (email): send verification email to donor.
    // Use Resend / Nodemailer / your preferred email service.
    // Template is in /docs/email-templates/high-value-donor.md (Annexure A).
    //
    // await sendVerificationEmail({ name, email, pan, amount });
    console.log(
      `[donate] High-value donation of Rs ${amount} from ${email} — verification email queued.`
    );
  }

  return NextResponse.json({ orderId, currency: "INR", amount: amountPaise });
}
