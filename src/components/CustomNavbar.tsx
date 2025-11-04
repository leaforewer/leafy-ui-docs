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
        <div className="menu bg-white dark:bg-neutral-900 w-80 min-h-full">
          <CustomSidebar lang={lang} />
        </div>
      </div>
    </div>
  )
}

export const CustomNavbar = ({ lang, pageMap, searchComponent }: { lang: string, pageMap: any, searchComponent?: React.ReactNode }) => {
  const navItems = [
    {
      label: "Docs",
      href: `/${lang}/docs`,
    },
    {
      label: "Components",
      href: `/${lang}/components`,
    }
  ]
  return (
    <>

      <header className="sticky top-0 z-40 w-full bg-gradient-to-t from-transparent to-neutral-200/95 dark:to-neutral-900 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">

              <NavbarDrawer lang={lang} />

              <Link href={`/${lang}`} className="flex items-center gap-3">
                <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Leafy UI
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 ml-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
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