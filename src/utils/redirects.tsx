import { Redirect, createRedirect } from '@/components/Redirect'
import { ServerRedirect, createServerRedirect } from '@/components/ServerRedirect'

// Client-side redirects (with loading UI)
export const ClientDocsRedirect = createRedirect('/en/docs/introduction', {
  message: 'Redirecting to docs...',
  delay: 500
})

export const ClientComponentsRedirect = createRedirect('/en/components/buttons', {
  message: 'Loading components...',
  showMessage: true
})

// Server-side redirects (immediate, no loading UI)
export const DocsRedirect = createServerRedirect('/en/docs/introduction')
export const ComponentsRedirect = createServerRedirect('/en/components/buttons')

/*
Usage examples in MDX files:

1. Server-side redirect (recommended for better SEO and performance):
```mdx
import { ServerRedirect } from '@/components/ServerRedirect'
<ServerRedirect to="/en/docs/introduction" />
```

2. Client-side redirect with loading UI:
```mdx
import { Redirect } from '@/components/Redirect'
<Redirect 
  to="/en/components/buttons" 
  message="Loading components..." 
  delay={1000}
/>
```

3. Using pre-configured server redirects:
```mdx
import { DocsRedirect } from '@/utils/redirects'
<DocsRedirect />
```

4. Next.js config redirects (in next.config.ts):
These are handled automatically and don't require components.
*/