'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface RedirectProps {
  to: string
  replace?: boolean
  delay?: number
  showMessage?: boolean
  message?: string
}

/**
 * A reusable redirect component that redirects to a specified URL
 * @param to - The URL to redirect to
 * @param replace - Whether to replace the current history entry (default: true)
 * @param delay - Delay in milliseconds before redirecting (default: 0)
 * @param showMessage - Whether to show a loading message (default: true)
 * @param message - Custom message to show while redirecting (default: "Redirecting...")
 */
export function Redirect({ 
  to, 
  replace = true, 
  delay = 0, 
  showMessage = true, 
  message = "Redirecting..." 
}: RedirectProps) {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (replace) {
        router.replace(to)
      } else {
        router.push(to)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [router, to, replace, delay])

  if (!showMessage) {
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <div className="text-gray-500 mb-2">{message}</div>
        <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
}

/**
 * Utility function to create a redirect component with pre-configured settings
 * @param to - The URL to redirect to
 * @param options - Additional redirect options
 */
export function createRedirect(to: string, options?: Omit<RedirectProps, 'to'>) {
  return function RedirectComponent() {
    return <Redirect to={to} {...options} />
  }
}

/**
 * Hook to programmatically redirect in components
 * @param to - The URL to redirect to
 * @param options - Redirect options
 */
export function useRedirect(to: string, options?: { replace?: boolean; delay?: number }) {
  const router = useRouter()
  
  const redirect = () => {
    const { replace = true, delay = 0 } = options || {}
    
    if (delay > 0) {
      setTimeout(() => {
        if (replace) {
          router.replace(to)
        } else {
          router.push(to)
        }
      }, delay)
    } else {
      if (replace) {
        router.replace(to)
      } else {
        router.push(to)
      }
    }
  }

  return redirect
}