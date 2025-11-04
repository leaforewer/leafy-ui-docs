export default {
  systemTitle: 'Leafy UI',
  banner: {
    title: '🌿 Leafy UI — framework-agnostic Web Components styled with Tailwind CSS.',
    more: 'Explore Components',
  },
  pageTitle: 'On This Page',
  backToTop: 'Back to top',

  search: {
    placeholder: 'Search...',
    noResults: 'No results found',
    errorText: 'Search error',
    loading: 'Loading...',
  },

  featureSupport: `🔥 Now with {{feature}} support!`,
  lastUpdated: 'Last updated on:',
  getStarted: 'Get Started',

  themeSwitcher: {
    light: 'Light Mode',
    dark: 'Dark Mode',
    lightAria: 'Switch to light mode',
    darkAria: 'Switch to dark mode',
  },

  featureList: [
    {
      title: 'Framework-Agnostic Web Components',
      description:
        'Leafy UI components are native Web Components — they work in any environment that supports HTML, from Astro and React to plain JavaScript.',
    },
    {
      title: 'CSS-First Design System',
      description:
        'Every visual layer is built with pure CSS using Tailwind CSS conventions — style or theme components without needing additional JavaScript frameworks.',
    },
    {
      title: 'Tailwind Utility Semantics',
      description:
        'Leafy UI mirrors the Tailwind utility approach. You can override, extend, or inject custom tokens using familiar Tailwind-style class patterns.',
    },
    {
      title: 'Design Tokens & Variables',
      description:
        'Customize themes globally using CSS variables for colors, radii, spacing, and typography — all automatically respected by components.',
    },
    {
      title: 'Lightweight & Portable',
      description:
        'Zero framework dependencies, tree-shakable builds, and native browser APIs make Leafy UI extremely small and fast.',
    },
    {
      title: 'Dark Mode & Adaptive Themes',
      description:
        'Supports automatic theme switching using system color-scheme detection or custom attributes.',
    },
    {
      title: 'Accessible by Default',
      description:
        'Each element follows the WAI-ARIA design patterns and keyboard-navigation guidelines — accessibility comes built-in.',
    },
    {
      title: 'Easy Integration',
      description:
        'Simply install, import the CSS bundle, and start using custom elements like `<leafy-button>` or `<leafy-card>` in any project.',
    },
    {
      title: 'Developer Friendly Tooling',
      description:
        'Published on npm, versioned with Changesets, and styled for Tailwind CSS v4 — built for modern workflows and open-source collaboration.',
    },
  ],

  featuresDesc:
    'Leafy UI gives you the power of Tailwind CSS with the simplicity of Web Components — design once, use anywhere.',

  faqs: [
    {
      question: 'What exactly is Leafy UI?',
      answer:
        'Leafy UI is a lightweight Web Component library that provides ready-made UI elements styled entirely with Tailwind CSS utilities and custom CSS variables.',
    },
    {
      question: 'Is it framework-specific?',
      answer:
        'No. Leafy UI components are framework-agnostic — you can use them directly in React, Vue, Svelte, Astro, or even static HTML without any wrappers.',
    },
    {
      question: 'How do I install and use it?',
      answer:
        'Install the package with `npm i @leafy-ui/core` and import the CSS bundle. You can then start using components like `<leafy-button>` or `<leafy-card>` right in your markup.',
    },
    {
      question: 'Does it require JavaScript frameworks?',
      answer:
        'No frameworks are required. Components are written as native custom elements using the Web Components API and work out of the box in modern browsers.',
    },
    {
      question: 'Can I customize the look and feel?',
      answer:
        'Yes. Leafy UI uses CSS custom properties and Tailwind tokens. You can override variables or extend Tailwind themes to fit your brand easily.',
    },
    {
      question: 'Is dark mode supported?',
      answer:
        'Yes. Leafy UI components respond to `prefers-color-scheme` automatically and support manual theme toggling via attributes or CSS variables.',
    },
    {
      question: 'What browsers are supported?',
      answer:
        'Leafy UI targets all modern evergreen browsers that support the Web Components standard, including Chrome, Edge, Safari, and Firefox.',
    },
    {
      question: 'Can I use it inside React or Astro projects?',
      answer:
        'Absolutely. Import the package, include its CSS, and use custom tags like `<leafy-button />` directly inside your JSX or Astro templates.',
    },
    {
      question: 'Is it open source?',
      answer:
        'Yes — Leafy UI is open-source and licensed under MIT. Contributions, issue reports, and feature ideas are all welcome on GitHub.',
    },
  ],
}
