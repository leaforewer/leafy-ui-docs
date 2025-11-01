'use client'

import clsx from 'clsx'
import { useCallback, useEffect } from 'react'
import { Toggle } from '@/components/ui/toggle'

export default function LocaleToggle({
  className,
}: {
  className?: string
}) {
  const forceHideBanner = useCallback(() => {
    const banner = document.querySelector('.nextra-banner')
    if (!banner) {
      return
    }

    const isBannerDismissed = localStorage.getItem('starter-banner')
    if (isBannerDismissed) {
      banner.classList.add('x:hidden')
    }
  }, [])

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        forceHideBanner()
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
    forceHideBanner()
    return () => observer.disconnect()
  }, [forceHideBanner])

  return null
}
