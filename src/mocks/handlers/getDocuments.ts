import { faker } from '@faker-js/faker'
import { v4 } from 'uuid'
import { rest } from 'msw'
import { Document } from '../../types/Document'

export const getDocuments = rest.get('/documents', (req, res, ctx) => {
  const documents: Document[] = []

  for (let i = 0; i < 10; i += 1) {
    const document: Document = {
      id: v4(),
      imgSrc: faker.image.imageUrl(),
      title: faker.random.words(3),
      category: faker.random.words(1),
      avatarUrl: faker.image.avatar(),
      memberName: faker.random.words(1),
      audienceTotalCount: parseInt(faker.random.numeric(3), 10),
      viewTotalCount: parseInt(faker.random.numeric(4), 10),
    }

    documents.push(document)
  }

  return res(ctx.status(200), ctx.json(documents))
})
