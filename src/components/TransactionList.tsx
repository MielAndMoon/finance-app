import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { TransactionModel } from '@/types'

interface Props {
  transactions: Array<TransactionModel>
}

export const TransactionList = ({ transactions }: Props) => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {transactions.map((transaction) => (
          <Card key={transaction.id}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {transaction.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${transaction.amount}</div>
              <p className="text-xs text-muted-foreground">
                {transaction.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}