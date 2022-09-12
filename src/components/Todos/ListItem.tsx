import { useCoTheme, Button, Group, Text } from '@co-design/core'
import { ResponseTodo } from '../../types/item'

interface Props {
  todo: ResponseTodo
  onDelete(id: string): void
}

export const ListItem = ({ todo, onDelete }: Props) => {
  const theme = useCoTheme()
  return (
    <tr key={todo.id}>
      <td
        style={{
          textAlign: 'left',
          padding: 12,
          borderBottom: `1px solid ${theme.palettes.gray[2]}`,
        }}
      >
        <Group position="apart">
          <Text>{todo.todo}</Text>
          <Button
            size="small"
            color="dark"
            variant="text"
            onClick={() => onDelete(todo.id)}
          >
            X
          </Button>
        </Group>
      </td>
    </tr>
  )
}
