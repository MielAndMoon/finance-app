import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

interface RootLayoutProps {
  children: React.ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
