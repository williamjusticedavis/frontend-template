import { Link } from '@tanstack/react-router'
import { Home, SearchX } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="rounded-full bg-muted p-6">
        <SearchX className="h-12 w-12 text-muted-foreground" />
      </div>
      <div>
        <h1 className="text-7xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mt-2 text-xl font-semibold text-foreground">Page not found</p>
        <p className="mt-2 max-w-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Button asChild>
        <Link to="/">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </div>
  )
}
