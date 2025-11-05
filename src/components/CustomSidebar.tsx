'use client'

import { usePathname } from 'next/navigation'
import {
    FileText,
    Code,
    ChevronDown,
    MousePointer,
    Square,
    ChevronDown as AccordionIcon,
    Menu,
    RotateCcw,
    Navigation,
    MessageSquare,
    Palette,
    SquareStack,
    Text,
    LetterText,
    SquareArrowDown
} from 'lucide-react'
import { Link } from 'next-view-transitions'

interface NavItem {
    title: string
    href: string
    icon?: React.ReactNode
    children?: NavItem[]
}

const navigationData: NavItem[] = [
    {
        title: 'Getting Started',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />,
        children: [
            {
                title: 'Introduction',
                href: '/docs/introduction',
            },
            {
                title: 'Install',
                href: '/docs/install',
            },
        ]
    },
    {
        title: 'Components',
        href: '/components',
        icon: <Code className="w-4 h-4" />,
        children: [
            {
                title: 'Buttons',
                href: '/components/buttons',
                icon: <MousePointer className="w-4 h-4" />,
            },
            {
                title: 'Pop Buttons',
                href: '/components/pop-buttons',
                icon: <MousePointer className="w-4 h-4" />,
            },
            {
                title: 'Modals',
                href: '/components/modals',
                icon: <Square className="w-4 h-4" />,
            },
            {
                title: 'Carousel',
                href: '/components/carousel',
                icon: <RotateCcw className="w-4 h-4" />,
            },
            {
                title: 'Product Image Slider',
                href: '/components/product-image-slider',
                icon: <RotateCcw className="w-4 h-4" />,
            },
            {
                title: 'Typewriter',
                href: '/components/type-writer',
                icon: <LetterText className="w-4 h-4" />,
            },
            {
                title: 'Dropdowns',
                href: '/components/dropdowns',
                icon: <Menu className="w-4 h-4" />,
            },
            {
                title: 'Accordions',
                href: '/components/accordions',
                icon: <AccordionIcon className="w-4 h-4" />,
            },
            {
                title: 'Steps',
                href: '/components/steps',
                icon: <Navigation className="w-4 h-4" />,
            },
            {
                title: 'Tabs',
                href: '/components/tabs',
                icon: <SquareStack className="w-4 h-4" />,
            },
            {
                title: 'Tooltips',
                href: '/components/tooltips',
                icon: <MessageSquare className="w-4 h-4" />,
            },
            {
                title: 'Product Options',
                href: '/components/product-options',
                icon: <Square className="w-4 h-4" />,
            },
            {
                title: 'Animated Lists',
                href: '/components/animated-lists',
                icon: <Navigation className="w-4 h-4" />,
            },
            {
                title: 'Reveal on Scroll',
                href: '/components/reveal',
                icon: <SquareArrowDown className="w-4 h-4" />,
            },
            {
                title: 'Indicator',
                href: '/components/indicator',
                icon: <Navigation className="w-4 h-4" />,
            },
            {
                title: 'Loaders',
                href: '/components/loaders',
                icon: <RotateCcw className="w-4 h-4" />,
            },
            {
                title: 'Swap',
                href: '/components/swap',
                icon: <RotateCcw className="w-4 h-4" />,
            },
        ]
    }
]

interface CustomSidebarProps {
    lang?: string
    className?: string
}

export function CustomSidebar({ lang = 'en', className }: CustomSidebarProps) {
    const pathname = usePathname()

    const isActive = (href: string) => {
        const currentPath = pathname.replace(`/${lang}`, '')
        return currentPath === href || currentPath.startsWith(href + '/')
    }

    const renderNavItem = (item: NavItem, depth = 0, withConnector = false) => {
        const hasChildren = !!item.children?.length
        const active = isActive(item.href)

        const connector =
            withConnector
                ? "before:content-[''] before:absolute before:left-[-16px] before:top-4 before:w-4 before:h-px before:bg-neutral-200 dark:before:bg-neutral-700"
                : ""

        if (hasChildren) {
            return (
                <li key={item.href} className={`relative ${connector}`}>
                    <details open className="group">
                        <summary className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer list-none ${active ? 'bg-neutral-100 dark:bg-neutral-800 font-medium' : ''}`}>
                            <div className="flex items-center gap-2 w-full">
                                {item.icon}
                                <span className="flex-1 text-left">{item.title}</span>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </div>
                        </summary>

                        <ul className="ml-6 mt-1 space-y-1 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-neutral-200 dark:before:bg-neutral-700">
                            {item.children!.map(child => renderNavItem(child, depth + 1, true))}
                        </ul>
                    </details>
                </li>
            )
        }

        return (
            <li key={item.href} className={`relative ${connector}`}>
                <Link
                    href={`/${lang}${item.href}`}
                    className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 ${active ? 'bg-neutral-100 dark:bg-neutral-800 font-medium text-blue-600 dark:text-blue-400' : ''}`}
                >
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    }

    return (
        <div className={`w-72 h-screen z-20 ${className ?? ''}`}>
            <nav>
                <ul className="space-y-1">
                    {navigationData.map(item => renderNavItem(item, 0))}
                </ul>
            </nav>
        </div>
    )
}