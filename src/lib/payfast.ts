import crypto from 'crypto'

export interface PayFastFields {
  merchant_id: string
  merchant_key: string
  return_url: string
  cancel_url: string
  notify_url: string
  name_first: string
  name_last: string
  email_address: string
  m_payment_id: string
  amount: string
  item_name: string
  item_description?: string
  custom_str1?: string
}

/**
 * Generate a PayFast MD5 signature from the payment fields.
 * Order matters — fields must be in the exact order PayFast expects.
 * Passphrase is optional but recommended for live accounts.
 */
export function generatePayFastSignature(
  data: Record<string, string>,
  passphrase?: string
): string {
  let queryString = Object.keys(data)
    .filter((key) => data[key] !== '' && data[key] !== undefined)
    .map((key) => `${key}=${encodeURIComponent(data[key]).replace(/%20/g, '+')}`)
    .join('&')

  if (passphrase) {
    queryString += `&passphrase=${encodeURIComponent(passphrase).replace(/%20/g, '+')}`
  }

  return crypto.createHash('md5').update(queryString).digest('hex')
}

/**
 * Build a complete set of PayFast payment fields ready for form submission.
 */
export function buildPayFastPayment({
  orderId,
  amount,
  itemName,
  customer,
  itemDescription,
}: {
  orderId: string
  amount: number
  itemName: string
  itemDescription?: string
  customer: {
    firstName: string
    lastName: string
    email: string
  }
}): { fields: Record<string, string>; actionUrl: string } {
  const isSandbox = process.env.PAYFAST_SANDBOX === 'true'
  const merchantId = process.env.PAYFAST_MERCHANT_ID ?? ''
  const merchantKey = process.env.PAYFAST_MERCHANT_KEY ?? ''
  const passphrase = process.env.PAYFAST_PASSPHRASE ?? undefined
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.ezokhetho.com'

  const actionUrl = 'https://www.payfast.co.za/eng/process';

  const fields: Record<string, string> = {
    merchant_id: merchantId,
    merchant_key: merchantKey,
    return_url: `${baseUrl}/order-successful`,
    cancel_url: `${baseUrl}/cart`,
    notify_url: `${baseUrl}/api/payfast/notify`,
    name_first: customer.firstName,
    name_last: customer.lastName,
    email_address: customer.email,
    m_payment_id: orderId,
    amount: amount.toFixed(2),
    item_name: itemName,
    ...(itemDescription ? { item_description: itemDescription } : {}),
  }

  const signature = generatePayFastSignature(fields, passphrase)
  return { fields: { ...fields, signature }, actionUrl }
}