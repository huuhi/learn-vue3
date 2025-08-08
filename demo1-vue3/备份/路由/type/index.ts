interface News {
  id: number
  title: string
  author?: string
  content: string
}

type NewsList = News[]
export type { News, NewsList }