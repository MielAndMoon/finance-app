import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

interface Props {
  child: React.ReactNode
}

export const FormTransaction = () => {
  return (
    <Card className="border-none lg:max-w-2xl">
      <CardHeader>
        <CardTitle className="text-lg">Add new transaction</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-4">
          <Label htmlFor="description">Description</Label>
          <Input id="description" />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="category">Category</Label>
          <Input id="category" />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="date">Date</Label>
          <Input id="date" />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" />
        </div>
        <div className="flex flex-row items-center gap-4">
          <Checkbox id="income" />
          <label htmlFor="income">
            Is income?
          </label>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Save</Button>
      </CardFooter>
    </Card>
  )
}
