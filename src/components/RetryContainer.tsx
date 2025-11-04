'use client'

import { useState, ReactNode } from 'react'
import { RotateCcw } from 'lucide-react'

interface RetryContainerProps {
  children: ReactNode
  className?: string
}

export function RetryContainer({ children, className = '' }: RetryContainerProps) {
  const [key, setKey] = useState(0)

  const handleRetry = () => {
    setKey(prev => prev + 1)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleRetry}
        className="absolute top-2 right-2 z-10 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        title="Replay Animation"
      >
        <RotateCcw size={16} />
      </button>
      <div key={key}>
        {children}
      </div>
    </div>
  )
}