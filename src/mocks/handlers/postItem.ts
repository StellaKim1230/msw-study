import { rest } from 'msw'

export const postItem = rest.post('/items', (req, res, ctx) => {
  const item = req.body
  return res(ctx.status(201), ctx.json(item))
})
