import { defineConfig } from 'astro/config'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {
  transformerMetaHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import sectionize from '@hbsnow/rehype-sectionize'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://beta.omarplayz.eu.org',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    react(),
    icon(),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeHeadingIds,
      rehypeKatex,
      sectionize,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light-high-contrast',
            dark: 'github-dark-high-contrast',
          },
          transformers: [
            transformerNotationDiff(),
            transformerMetaHighlight(),
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 1000,
            }),
          ],
        },
      ],
    ],
    remarkPlugins: [remarkToc, remarkMath, remarkEmoji],
  },
  server: {
    port: 1234,
    host: true,
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
  devToolbar: {
    enabled: false,
  },
  redirects: {
    '/royalpear': 'https://youtube.com/@RoyalPear',
    '/royalpear/': 'https://youtube.com/@RoyalPear',
    '/pearify': 'https://chromewebstore.google.com/detail/youtube-pearify/jafognbanchcefpohggjafiolgfddbmd?authuser=0&hl=en',
    '/pearify/': 'https://chromewebstore.google.com/detail/youtube-pearify/jafognbanchcefpohggjafiolgfddbmd?authuser=0&hl=en',
    '/pearify-firefox': 'https://addons.mozilla.org/en-GB/firefox/addon/youtube-pearify/',
    '/pearify-firefox/': 'https://addons.mozilla.org/en-GB/firefox/addon/youtube-pearify/',
  },
})

