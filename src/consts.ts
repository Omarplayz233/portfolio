export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'omarplayz',
  DESCRIPTION:
    'idk what to put here',
  EMAIL: 'hi@dev.omarplayz.eu.org',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://omarplayz.eu.org',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/Omarplayz233', label: 'GitHub' },
  { href: 'https://bsky.app/profile/omarplayz.eu.org', label: 'Bluesky' },
  { href: 'hi@dev.omarplayz.eu.org', label: 'Email' },
]
