export const sampleData: GetBoardResponse = {
  lists: [
    {
      _id: 'list-1',
      title: 'List 1',
      cards: [
        {
          _id: 'list-1-card-1',
          content: 'content 1',
        },
        {
          _id: 'list-1-card-2',
          content: 'content 2',
        },
        {
          _id: 'list-1-card-3',
          content: 'long long long long long long long long long content 3',
        },
      ],
    },
    {
      _id: 'list-2',
      title: 'List 2',
      cards: [
        {
          _id: 'list-2-card-1',
          content: 'content 1',
        },
        {
          _id: 'list-2-card-3',
          content: 'long long long long long long long long long content 3',
        },
      ],
    },
    {
      _id: 'list-3',
      title: 'List 3',
      cards: [
        {
          _id: 'list-3-card-1',
          content: 'content 1',
        },
        {
          _id: 'list-3-card-2',
          content: 'content 2',
        },
        {
          _id: 'list-3-card-3',
          content: 'long long long long long long long long long content 3',
        },
        {
          _id: 'list-3-card-4',
          content: 'long long long long long long long long long content 3',
        },
      ],
    },
  ],
}

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
