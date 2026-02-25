import { Link } from '@tanstack/react-router'
import { Moon, Sun, Zap } from 'lucide-react'
import { useTheme } from '@/context/theme-context'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
] as const

export function Navbar() {
  const { resolvedTheme, toggleTheme } = useTheme()

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="text-foreground flex items-center gap-2 font-semibold">
          <Zap className="text-primary h-5 w-5" />
          <span>React Template</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={cn(
                  'text-muted-foreground hover:text-foreground rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  '[&.active]:bg-accent [&.active]:text-accent-foreground'
                )}
                activeProps={{ className: 'active' }}
                activeOptions={{ exact: to === '/' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </nav>
    </header>
  )
}
