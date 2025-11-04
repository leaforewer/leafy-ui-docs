'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Github, Rocket } from 'lucide-react'

import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'

export function SetupHero() {
  const { t, currentLocale } = useLocale()
  const [copied, setCopied] = useState(false)

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText('npm i @leafy-ui/core')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore clipboard failure
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <h1 className={styles.headline}>
          Leafy UI <br className="sm:hidden" /> Design System
        </h1>

        <div
          className={clsx(
            styles.subtitle,
            'text-neutral-600 dark:text-neutral-300'
          )}
        >
          A composable, theme-aware component library for&nbsp;
          <FlipWords
            words={[
              'React',
              'Vue',
              'Astro',
              'Svelte',
              'Angular',
            ]}
          />
          <br />
          Built with{' '}
          <LinkPreview url="https://tailwindcss.com">Tailwind CSS</LinkPreview>,{' '}
          <LinkPreview url="https://lit.dev">Litjs🔥</LinkPreview>
        </div>

        <div className="relative mt-6 mx-auto tooltip w-max" data-tooltip={copied ? 'Copied' : 'Copy'}>
          <button
            onClick={copyCommand}
            className={
              'group pop-btn interactive flex-center gap-2'
            }
          >
            <span>npm i @leafy-ui/core</span>
          </button>
        </div>
      </div>
    </div>
  )
}
