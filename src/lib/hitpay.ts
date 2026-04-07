import crypto from "crypto";
import axios from "axios";

const HITPAY_API_URL =
  process.env.HITPAY_ENV === "production"
    ? "https://api.hit-pay.com/v1"
    : "https://api.sandbox.hit-pay.com/v1";

export async function createPaymentRequest(
  amount: number,
  currency: string,
  email: string,
  referenceId: string,
  name: string
) {
  const res = await axios.post(
    `${HITPAY_API_URL}/payment-requests`,
    {
      amount: amount.toFixed(2),
      currency,
      email,
      name,
      reference_number: referenceId,
      redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?ref=${referenceId}`,
      webhook: `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhooks/hitpay`,
    },
    {
      headers: {
        "X-BUSINESS-API-KEY": process.env.HITPAY_API_KEY!,
        "Content-Type": "application/json",
      },
    }
  );

  return {
    paymentUrl: res.data.url,
    paymentId: res.data.id,
  };
}

export function verifyWebhookSignature(
  payload: Record<string, string>,
  signature: string
): boolean {
  const salt = process.env.HITPAY_SALT!;
  const keys = Object.keys(payload).sort();
  const message = keys
    .filter((k) => k !== "hmac")
    .map((k) => `${k}${payload[k]}`)
    .join("");
  const hmac = crypto
    .createHmac("sha256", salt)
    .update(message)
    .digest("hex");
  return hmac === signature;
}
