import { faker } from '@faker-js/faker'
import { v4 } from 'uuid'
import { rest } from 'msw'
import { ResponseTodo } from '../../types/item'

export const getTodos = rest.get('/todos', (req, res, ctx) => {
  // 가로채는 요청에 응답하려면 응답 기능을 사용하여 모의 응답을 정의해야 한다.
  // req: 요청에 대한 정보
  // res: 응답을 생성하는 기능적 유틸리티
  // ctx: 응답 상태 코드, 헤더, 본문 등을 설정하는데 도움이 된다.
  const todos: ResponseTodo[] = []

  for (let i = 0; i < 10; i += 1) {
    const todo = {
      id: v4(),
      todo: faker.random.words(100),
    }

    todos.push(todo)
  }

  return res(ctx.status(200), ctx.json(todos))
})
