export type GetBoardResponse = {
  lists: List[]
}

export type List = {
  _id: string
  title: string
  cards: Card[]
}

export type Card = {
  _id: string
  content: string
}
