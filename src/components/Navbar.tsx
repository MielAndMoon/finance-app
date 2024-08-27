import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ModeToggle } from './mode-toggle'

export const Navbar = () => {
  return (
    <Card className="border-none flex flex-row justify-between items-center">
      <CardHeader>
        <CardTitle>Finance App</CardTitle>
        <CardDescription>
          Manage your finance a shape simple and easy
        </CardDescription>
      </CardHeader>
      <ModeToggle />
    </Card>
  )
}
