import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import type { ChangeEvent } from 'react'

interface Props {
  label: string
  value: string
  type?: 'number'
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputControl = ({ type, label, value, onChange }: Props) => {
  return (
    <div className="grid gap-4">
      <Label htmlFor={label}>
        {label.charAt(0).toUpperCase()}
        {label.slice(1)}
      </Label>
      <Input value={value} id={label} name={label} onChange={onChange} type={type ?? 'text'}/>
    </div>
  )
}
