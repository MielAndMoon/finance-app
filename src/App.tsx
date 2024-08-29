import { type ChangeEvent, useEffect, useState } from 'react'
import { fetchTransactions } from './api/api'
import { TransactionList } from './components/TransactionList'
import { RootLayout } from './components/layout'
import type { Transaction, TransactionModel } from './types'
import { FormTransaction } from './components/FormTransaction'
import { Checkbox } from '@/components/ui/checkbox'
import { InputControl } from './components/InputControl'
import { Navbar } from './components/Navbar'

function App() {
  const [transactions, setTransactions] = useState<Array<TransactionModel>>([])
  const [formTransaction, setFormTransaction] = useState<Transaction>({
    amount: 0,
    category: '',
    description: '',
    is_income: false,
    date: '',
  })

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormTransaction({
      ...formTransaction,
      [e.target.name]: e.target.value,
    })
  }

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setFormTransaction({
      ...formTransaction,
      amount: e.target.valueAsNumber,
    })
  }

  const handleChecked = (checked: boolean) => {
    setFormTransaction({
      ...formTransaction,
      is_income: checked,
    })
  }

  return (
    <RootLayout>
      <div className="grid px-12">
        <Navbar />
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <FormTransaction onSubmit={}>
            <InputControl
              label="description"
              onChange={handleChange}
              value={formTransaction.description}
            />
            <InputControl
              label="category"
              onChange={handleChange}
              value={formTransaction.category}
            />
            <InputControl
              label="date"
              onChange={handleChange}
              value={formTransaction.date}
            />
            <InputControl
              label="amount"
              onChange={handleAmount}
              value={formTransaction.amount.toString()}
              type="number"
            />
            <div className="flex flex-row items-center gap-4">
              <Checkbox
                id="income"
                name="income"
                checked={formTransaction.is_income}
                onCheckedChange={handleChecked}
              />
              <label htmlFor="income">Is income?</label>
            </div>
          </FormTransaction>
          <TransactionList transactions={transactions} />
        </section>
      </div>
    </RootLayout>
  )
}

export default App
