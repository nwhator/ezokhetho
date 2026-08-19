import { formatZARCents } from './currency'
import type { Transaction } from './transactions'

/**
 * Ezokhetho — Order Acknowledgement Email
 * Sent to the customer after a successful (COMPLETE) payment.
 * Uses Resend (https://resend.com) when RESEND_API_KEY is configured;
 * otherwise logs the email to the server console so it can be reviewed.
 */

const FROM_EMAIL = process.env.EMAIL_FROM || 'Ezokhetho <orders@ezokhetho.com>'

export function buildAcknowledgementEmail(tx: Transaction): { subject: string; html: string } {
  const itemsHtml = tx.items
    .map(
      (item) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;">
            <div style="font-family:Georgia,serif;font-size:15px;color:#1a1a1a;font-weight:600;">${item.title}</div>
            <div style="font-family:Arial,sans-serif;font-size:12px;color:#8a8580;margin-top:3px;">
              ${[item.color, item.size].filter(Boolean).join(' · ')}
            </div>
          </td>
          <td align="center" style="padding:12px 16px;border-bottom:1px solid #eee;font-family:Arial,sans-serif;font-size:13px;color:#555;">${item.quantity}</td>
          <td align="right" style="padding:12px 16px;border-bottom:1px solid #eee;font-family:Arial,sans-serif;font-size:13px;color:#1a1a1a;">${formatZARCents(item.price)}</td>
        </tr>`
    )
    .join('')

  const orderedOn = new Date(tx.createdAt).toLocaleString('en-ZA', {
    dateStyle: 'long',
    timeStyle: 'short',
  })

  const subject = `Your Ezokhetho order ${tx.id} has been confirmed`

  const html = `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background-color:#f4f2ef;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f2ef;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0033A0;padding:28px 32px;text-align:center;">
              <div style="font-family:Georgia,serif;font-size:26px;color:#ffffff;letter-spacing:0.1em;">E Z O K H E T H O</div>
              <div style="font-family:Arial,sans-serif;font-size:10px;color:rgba(255,255,255,0.7);letter-spacing:0.35em;margin-top:6px;">CONTEMPORARY AFRICAN LUXURY</div>
            </td>
          </tr>
          <!-- Greeting -->
          <tr>
            <td style="padding:36px 32px 8px;">
              <div style="font-family:Georgia,serif;font-size:22px;color:#1a1a1a;">Thank you for your order, ${tx.name}</div>
              <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;line-height:1.7;margin:12px 0 0;">
                We've received your order and it is now being prepared with care. Every Ezokhetho piece is crafted with intention — thank you for being part of our story.
              </p>
            </td>
          </tr>
          <!-- Order summary box -->
          <tr>
            <td style="padding:16px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf9f7;border:1px solid #eee;">
                <tr>
                  <td style="padding:14px 16px;font-family:Arial,sans-serif;font-size:12px;color:#888;">
                    ORDER NUMBER<br/>
                    <span style="font-size:15px;color:#1a1a1a;font-weight:600;">${tx.id}</span>
                  </td>
                  <td style="padding:14px 16px;font-family:Arial,sans-serif;font-size:12px;color:#888;">
                    ORDERED ON<br/>
                    <span style="font-size:15px;color:#1a1a1a;font-weight:600;">${orderedOn}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Items table -->
          <tr>
            <td style="padding:16px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <th align="left" style="padding:10px 16px;background-color:#0033A0;color:#ffffff;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.15em;">ITEM</th>
                  <th style="padding:10px 16px;background-color:#0033A0;color:#ffffff;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.15em;">QTY</th>
                  <th align="right" style="padding:10px 16px;background-color:#0033A0;color:#ffffff;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.15em;">PRICE</th>
                </tr>
                ${itemsHtml}
              </table>
            </td>
          </tr>
          <!-- Totals -->
          <tr>
            <td style="padding:8px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 16px;font-family:Arial,sans-serif;font-size:13px;color:#888;">Subtotal</td>
                  <td align="right" style="padding:8px 16px;font-family:Arial,sans-serif;font-size:13px;color:#1a1a1a;">${formatZARCents(tx.subtotal)}</td>
                </tr>
                <tr>
                  <td style="padding:8px 16px;font-family:Arial,sans-serif;font-size:13px;color:#888;">Shipping</td>
                  <td align="right" style="padding:8px 16px;font-family:Arial,sans-serif;font-size:13px;color:#1a1a1a;">${formatZARCents(tx.shipping)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-family:Georgia,serif;font-size:16px;color:#1a1a1a;font-weight:700;border-top:2px solid #0033A0;">Total</td>
                  <td align="right" style="padding:12px 16px;font-family:Georgia,serif;font-size:16px;color:#0033A0;font-weight:700;border-top:2px solid #0033A0;">${formatZARCents(tx.total)}</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:32px;border-top:1px solid #eee;background-color:#faf9f7;">
              <p style="font-family:Arial,sans-serif;font-size:13px;color:#555;line-height:1.7;margin:0;">
                If you have any questions about your order, simply reply to this email or visit
                <a href="${baseUrl()}/contact" style="color:#FF6B00;">our contact page</a>.
              </p>
              <p style="font-family:Arial,sans-serif;font-size:11px;color:#aaa;margin:16px 0 0;">
                Ezokhetho · Contemporary African Luxury<br/>
                Johannesburg, South Africa
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim()

  return { subject, html }
}

export async function sendOrderAcknowledgement(tx: Transaction): Promise<boolean> {
  const { subject, html } = buildAcknowledgementEmail(tx)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[Acknowledgement Email] No RESEND_API_KEY configured — logging email instead.')
    console.log(`To: ${tx.email} | Subject: ${subject}`)
    return false
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [tx.email],
        subject,
        html,
      }),
    })

    if (!response.ok) {
      throw new Error(`Resend responded with ${response.status}`)
    }

    console.log(`[Acknowledgement Email] Sent to ${tx.email} for order ${tx.id}`)
    return true
  } catch (error) {
    console.error('[Acknowledgement Email] Failed to send:', error)
    return false
  }
}

function baseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://www.ezokhetho.com'
}