import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'

import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Footer, LastUpdated, Layout } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { CustomFooter } from '@/components/CustomFooter'
import { CustomNavbar } from '@/components/CustomNavbar'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { useServerLocale } from '@/hooks'

import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'
import { ClientWebComponents } from './_components/ClientWebComponents'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  metadataBase: new URL('https://nextjs-nextra-starter-green.vercel.app'),
  icons: '/img/favicon.svg',
} satisfies Metadata

const repo = 'https://github.com/leaforewer/leafy-ui'

const CustomBanner = async ({ lang }: I18nLangAsyncProps) => {
  const { t } = await useServerLocale(lang)
  return (
    <Banner
      storageKey="starter-banner"
    >
      <div className="flex justify-center items-center gap-1">
        {t('banner.title')}
        {' '}
        <a
          className="max-sm:hidden text-warning hover:underline"
          target="_blank"
          href={repo}
        >
          {t('banner.more')}
        </a>
      </div>
    </Banner>
  )
}

const BaiduTrack = () => {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?d5ad5e04e6af914c01767926567602be";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>
    </>
  )
}


// interface Props {
//   children: ReactNode
//   params: Promise<{ lang: I18nLangKeys }>
// }

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const getterParams = await params

  const { lang } = getterParams as { lang: I18nLangKeys }

  const dictionary = await getDictionary(lang)
  const pageMap = await getPageMap(lang)

  const title = 'Leafy UI - A Tailwind CSS Component Library with Web Components'
  const description = 'Leafy UI is a modern Tailwind CSS component library that leverages Web Components for maximum flexibility and reusability in your projects.'

  const { t } = await useServerLocale(lang)

  return (
    <ViewTransitions>
      <html
        // Not required, but good for SEO
        lang={lang}
        // Required to be set
        // dir="ltr"
        // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
        dir={getDirection(lang)}
        suppressHydrationWarning
      >
        <Head
        // ... Your additional head options
        >
          {/* <title>{asPath !== '/' ? `${normalizePagesResult.title} - ${title}` : title}</title> */}
          <meta property="og:title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <link rel="canonical" href={repo} />
        </Head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="starter-theme-provider"
            disableTransitionOnChange
          >
            <ClientWebComponents />

            <CustomNavbar
              lang={lang}
              pageMap={pageMap}
              searchComponent={
                <Search
                  placeholder={t('search.placeholder')}
                  emptyResult={t('search.noResults')}
                  errorText={t('search.errorText')}
                  loading={t('search.loading')}
                />
              }
            />

            <Layout
              copyPageButton={false}
              banner={
                <CustomBanner lang={lang} />
              }
              lastUpdated={(
                <LastUpdated>
                  {t('lastUpdated')}
                </LastUpdated>
              )}
              editLink={null}
              docsRepositoryBase="https://github.com/leaforewer/leafy-ui"
              footer={(
                <Footer className="bg-background py-5!">
                  <CustomFooter />
                </Footer>
              )}
              i18n={[
                { locale: 'en', name: 'English' },
              ]}
              toc={{
                backToTop: t('backToTop'),
                title: t('pageTitle'),
              }}
              pageMap={pageMap}
              feedback={{ content: '' }}
              sidebar={{
                toggleButton: false,
                defaultOpen: false,
              }}
            // ... Your additional layout options
            >
              <LayoutWrapper lang={lang}>
                {children}
              </LayoutWrapper>
            </Layout>
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-VCR6017LB8" />
        <BaiduTrack />
      </html>
    </ViewTransitions>
  )
}
