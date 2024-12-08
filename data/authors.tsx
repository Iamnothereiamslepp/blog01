export const Friends: Friend[] = [
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: '/img/friend/zxuqian.png',
  },
  {
    title: 'RAGroup',
    description: '致力于帮助你',
    website: 'https://blog5.ragroup.us.kg/authors/ragroup',
    avatar: '/img/friend/zxuqian.png',
  },
  {
    title: 'LineXic书屋',
    description: '念念不忘，必有回响',
    website: 'https://linexic.top',
    avatar: '/img/friend/linexic.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
