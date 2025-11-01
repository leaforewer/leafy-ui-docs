'use client'

import type { I18nLangAsyncProps } from '@/i18n'
import { useServerLocale } from '@/hooks'
import ThemeToggle from '@/widgets/theme-toggle'
import LocaleToggle from '@/widgets/locale-toggle'
import { Search } from 'nextra/components'
import { useState } from 'react'
import { Link } from 'next-view-transitions'
import { Menu } from 'lucide-react'
import { GitHubIcon } from 'nextra/icons'
import { CustomSidebar } from './CustomSidebar'


const repo = 'https://github.com/leaforewer/leafy-ui'

interface NavbarDrawerProps {
  lang: string
}

const NavbarDrawer = ({ lang }: NavbarDrawerProps) => {
  return (
    <div className="drawer">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle peer" />
      <div className="drawer-content">
        <label htmlFor="navbar-drawer" aria-label="open sidebar" className="hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer p-2 rounded flex-center">
          <Menu className="size-5" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="navbar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-white dark:bg-gray-900 w-80 min-h-full">
          <CustomSidebar lang={lang} />
        </ul>
      </div>
    </div>
  )
}

export const CustomNavbar = ({ lang, pageMap, searchComponent }: { lang: string, pageMap: any, searchComponent?: React.ReactNode }) => {
  return (
    <>

      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              
              <NavbarDrawer lang={lang} />

              <Link href={`/${lang}`} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                  </svg>
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Leafy UI
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 ml-6">
                <Link 
                  href={`/${lang}/components`}
                  className="text-sm font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
                >
                  Components
                </Link>
              </nav>
            </div>

            <div className="ml-auto mr-2 w-max *:w-fit hidden sm:block">
              {searchComponent}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="View on GitHub"
              >
                <GitHubIcon className="size-5" />
              </a>

              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              <div className="hidden sm:block">
                <LocaleToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}