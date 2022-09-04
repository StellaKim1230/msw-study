import {
  Container,
  Heading,
  Stack,
  Input,
  Group,
  Button,
} from '@co-design/core'
import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import { ResponseItem } from './types/item'

import { Items } from './components/Items'
import { v4 } from 'uuid'

function App() {
  const [items, setItems] = useState<ResponseItem[]>([])
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    fetch('/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setKeyword(e.currentTarget.value)

  const handleClick = useCallback(() => {
    setItems([...items, { id: v4(), todo: keyword }])
    setKeyword('')
  }, [keyword])

  const handleDelete = (id: string) => {
    setItems((old) => old.filter((item) => item.id !== id))
  }

  return (
    <Container
      size={1152}
      padding={16}
      co={{ paddingTop: 24, paddingBottom: 24 }}
    >
      <Stack spacing="large" co={{ textAlign: 'center' }}>
        <Heading level={1} strong>
          Todo
        </Heading>
        <Group position="center">
          <Input value={keyword} co={{ width: 400 }} onChange={handleChange} />
          <Button onClick={handleClick}>할일 입력</Button>
        </Group>
        <Items items={items} onDelete={handleDelete} />
      </Stack>
    </Container>
  )
}

export default App
