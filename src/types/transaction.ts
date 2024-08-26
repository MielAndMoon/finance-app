export interface Transaction {
  amount: number
  category: string
  description: string
  is_income: boolean
  date: string
}

export interface TransactionModel extends Transaction {
  id: number
}
