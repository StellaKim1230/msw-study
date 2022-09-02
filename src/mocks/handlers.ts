import { rest } from 'msw'

const resultData = { name: 'stella' }

export const handlers = [
  rest.get('/user', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(resultData))
  }),
]
