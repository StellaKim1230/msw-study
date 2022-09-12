import { Heading, Stack, Input, Group, Button } from '@co-design/core'
import React, { useCallback, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { Todos } from '../components/Todos'
import { ResponseTodo } from '../types/item'

export const TodoPage = () => {
  const [todos, setTodos] = useState<ResponseTodo[]>([])
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    fetch('/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
  }, [])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setKeyword(e.currentTarget.value)

  const handleClick = useCallback(() => {
    setTodos([...todos, { id: v4(), todo: keyword }])
    setKeyword('')
  }, [keyword])

  const handleDelete = (id: string) => {
    setTodos((old) => old.filter((item) => item.id !== id))
  }

  return (
    <Stack spacing="large" co={{ textAlign: 'center' }}>
      <Heading level={1} strong>
        Todo
      </Heading>
      <Group position="center">
        <Input value={keyword} co={{ width: 400 }} onChange={handleChange} />
        <Button onClick={handleClick}>할일 입력</Button>
      </Group>
      <Todos todos={todos} onDelete={handleDelete} />
    </Stack>
  )
}
