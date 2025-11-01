import { redirect } from 'next/navigation'

interface ServerRedirectProps {
  to: string
}

/**
 * Server-side redirect component that performs immediate redirect during SSR
 * @param to - The URL to redirect to
 */
export function ServerRedirect({ to }: ServerRedirectProps) {
  redirect(to)
}

/**
 * Utility function to create a server redirect component
 * @param to - The URL to redirect to
 */
export function createServerRedirect(to: string) {
  return function ServerRedirectComponent() {
    redirect(to)
  }
}