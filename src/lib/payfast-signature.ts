import { createHash } from 'crypto'

export interface PayFastPaymentData {
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

const PAYFAST_PASSPHRASE = process.env.PAYFAST_PASSPHRASE || ''

// PayFast requires fields in this specific order for signature generation
const PAYFAST_FIELD_ORDER = [
  'merchant_id',
  'merchant_key',
  'return_url',
  'cancel_url',
  'notify_url',
  'name_first',
  'name_last',
  'email_address',
  'm_payment_id',
  'amount',
  'item_name',
  'item_description',
  'custom_str1',
] as const

function urlEncode(value: string): string {
  return encodeURIComponent(value.trim()).replace(/%20/g, '+')
}

export function generatePayFastSignature(data: PayFastPaymentData, passphrase = PAYFAST_PASSPHRASE): string {
  const orderedKeys = PAYFAST_FIELD_ORDER.filter((key): key is keyof PayFastPaymentData => {
    const value = data[key];
    return value !== undefined && value !== '';
  });

  const paramString = orderedKeys
    .map((key) => {
      const value = data[key] ?? '';
      return `${key}=${urlEncode(value)}`;
    })
    .join('&');

  const stringToHash = passphrase ? `${paramString}&passphrase=${urlEncode(passphrase)}` : paramString

  return createHash('md5').update(stringToHash).digest('hex')
}

export function createPayFastPaymentData(data: PayFastPaymentData): PayFastPaymentData & { signature: string } {
  const signature = generatePayFastSignature(data)
  return { ...data, signature }
}