/**
 * Ezokhetho — Currency Utility
 * Single source of truth for all price formatting across the site.
 * All prices in data.ts are stored as ZAR (South African Rand) integers.
 */

/**
 * Format a price as ZAR (South African Rand).
 * @example formatZAR(8500) → "R 8 500"
 */
export function formatZAR(amount: number | string): string {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount
  if (isNaN(value)) return 'R —'
  return `R ${value.toLocaleString('en-ZA', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

/**
 * Format a price as ZAR with cents.
 * @example formatZARCents(8500) → "R 8 500.00"
 */
export function formatZARCents(amount: number | string): string {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount
  if (isNaN(value)) return 'R —'
  return `R ${value.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
