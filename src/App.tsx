import { useEffect, useState } from 'react'
import { fetchTransactions } from './api/api'
import { TransactionList } from './components/TransactionList'
import { RootLayout } from './components/layout'
import type { TransactionModel } from './types'

function App() {
  const [transactions, setTransactions] = useState<Array<TransactionModel>>([])

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions(
          'http://localhost:8000/transactions',
        )
        setTransactions(data)
      } catch (error) {
        console.error('Failed to fetch', error)
      }
    }

    getTransactions()
  }, [])

  return (
    <RootLayout>
      <TransactionList transactions={transactions} />
    </RootLayout>
  )
}

export default App
