import fs from 'fs'
import path from 'path'

const transactionsFile = path.join(process.cwd(), 'src/data/transactions.json')

export interface Transaction {
  id: string
  email: string
  name: string
  items: Array<{ title: string; quantity: number; price: number; color: string; size: string }>
  subtotal: number
  shipping: number
  total: number
  status: 'PENDING' | 'COMPLETE' | 'FAILED'
  createdAt: string
  paymentId?: string
}

export function getTransactions(): Transaction[] {
  try {
    if (!fs.existsSync(transactionsFile)) {
      return []
    }
    const data = fs.readFileSync(transactionsFile, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Failed to read transactions:', error)
    return []
  }
}

export function saveTransactions(transactions: Transaction[]) {
  try {
    fs.writeFileSync(transactionsFile, JSON.stringify(transactions, null, 2), 'utf-8')
  } catch (error) {
    console.error('Failed to write transactions:', error)
  }
}

export function addTransaction(transaction: Transaction) {
  const list = getTransactions()
  list.unshift(transaction)
  saveTransactions(list)
}

export function updateTransactionStatus(id: string, status: 'COMPLETE' | 'FAILED', paymentId?: string) {
  const list = getTransactions()
  const updated = list.map(tx => {
    if (tx.id === id) {
      return { ...tx, status, paymentId }
    }
    return tx
  })
  saveTransactions(updated)
}
