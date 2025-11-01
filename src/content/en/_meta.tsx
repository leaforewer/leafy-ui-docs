import { TitleBadge } from "@/components/TitleBadge";

export default {
  index: {
    display: 'hidden',
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