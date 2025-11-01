import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'
import { Globe, MessageSquare, Navigation, Palette, Square, Menu, ChevronDown, MousePointer, RotateCcw } from 'lucide-react'

export default {
  "*": {
    theme: {
      sidebar: false,
    }
  },
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
      pagination: false,
    },
  },
  docs: {
    title: 'Docs',
    type: 'page',
  },
  components: {
    title: 'Components',
    type: 'page',
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        What's New
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
}
