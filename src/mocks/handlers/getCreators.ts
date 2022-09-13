import { faker } from '@faker-js/faker'
import { v4 } from 'uuid'
import { rest } from 'msw'
import { Creator } from '../../types/Creator'

export const getCreators = rest.get('/creators', (req, res, ctx) => {
  const creators: Creator[] = []

  for (let i = 0; i < 10; i += 1) {
    const creator: Creator = {
      id: v4(),
      avatarUrl: faker.image.avatar(),
      name: faker.random.words(1),
      followerCount: parseInt(faker.random.numeric(1), 10),
      friendCount: parseInt(faker.random.numeric(2), 10),
    }

    creators.push(creator)
  }

  return res(ctx.status(200), ctx.json(creators))
})
