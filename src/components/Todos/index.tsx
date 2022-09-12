import { useCoTheme } from '@co-design/core'
import { ResponseTodo } from '../../types/item'
import { ListItem } from './ListItem'

interface Props {
  todos: ResponseTodo[]
  onDelete(id: string): void
}

export const Todos = ({ todos, onDelete }: Props) => {
  const theme = useCoTheme()
  return (
    <table>
      <thead>
        <tr>
          <th
            style={{
              textAlign: 'left',
              padding: 12,
              borderBottom: `1px solid ${theme.palettes.gray[2]}`,
            }}
          >
            할일
          </th>
        </tr>
      </thead>
      <tbody>
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <ListItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
      </tbody>
    </table>
  )
}
