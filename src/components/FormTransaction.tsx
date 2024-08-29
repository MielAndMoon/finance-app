import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/button'

interface Props {
  children: React.ReactNode
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const FormTransaction = ({ children, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <Card className="border-none lg:max-w-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Add new transaction</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">{children}</CardContent>
        <CardFooter>
          <Button className="w-full">Save</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
