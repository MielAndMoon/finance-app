import type { Transaction, TransactionModel } from '@/types'

export const fetchTransactions = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok) throw new Error('Error getting data')

    const transactions: Array<TransactionModel> = await response.json()
    return transactions
  } catch (error) {
    console.error('Error feching data: ', error)
    throw error
  }
}

export const insertTransaction = async (
  url: string,
  transaction: Transaction,
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })

    if (!response) throw new Error('Error insert transaction')

    const newTransaction: TransactionModel = await response.json()
    return newTransaction
  } catch (error) {
    console.error('Error insert new transaction: ', error)
    throw error
  }
}
