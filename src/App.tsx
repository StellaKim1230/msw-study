import { Container } from '@co-design/core'
import { Routes, Route } from 'react-router-dom'
import { DocumentListPage } from './pages/DocumentListPage'
import { TodoPage } from './pages/TodoPage'

function App() {
  return (
    <Container
      size={1152}
      padding={16}
      co={{ paddingTop: 24, paddingBottom: 24 }}
    >
      <Routes>
        <Route path="/documents" element={<DocumentListPage />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
      </Routes>
    </Container>
  )
}

export default App
