import {
  Container,
  Heading,
  Stack,
  Input,
  Group,
  Button,
} from '@co-design/core'
import { useEffect, useState } from 'react'
import './App.css'
import { ResponseItem } from './types/item'

import { Items } from './components/Items'

function App() {
  const [items, setItems] = useState<ResponseItem[]>([])

  useEffect(() => {
    fetch('/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

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
          <Input co={{ width: 400 }} />
          <Button>입력</Button>
        </Group>
        <Items items={items} />
      </Stack>
    </Container>
  )
}

export default App
