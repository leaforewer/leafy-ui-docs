'use client'

import { usePathname } from 'next/navigation'
import { CustomSidebar } from './CustomSidebar'

interface LayoutWrapperProps {
  children: React.ReactNode
  lang: string
}

export function LayoutWrapper({ children, lang }: LayoutWrapperProps) {
  const pathname = usePathname()
  
  // Show sidebar for docs and components pages
  const showSidebar = pathname.includes('/docs') || pathname.includes('/components')

  if (!showSidebar) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen">
      <CustomSidebar lang={lang} className="hidden md:block not-even:fixed left-0 top-20 overflow-y-auto p-4" />
      <div className="w-full md:flex-1 md:ml-64 min-h-full">
        <div className="max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}