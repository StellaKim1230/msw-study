import { useCoTheme, Button, Group, Text } from '@co-design/core'
import { ResponseItem } from '../../types/item'

interface Props {
  item: ResponseItem
  onDelete(id: string): void
}

export const ListItem = ({ item, onDelete }: Props) => {
  const theme = useCoTheme()
  return (
    <tr key={item.id}>
      <td
        style={{
          textAlign: 'left',
          padding: 12,
          borderBottom: `1px solid ${theme.palettes.gray[2]}`,
        }}
      >
        <Group position="apart">
          <Text>{item.todo}</Text>
          <Button
            size="small"
            color="dark"
            variant="text"
            onClick={() => onDelete(item.id)}
          >
            X
          </Button>
        </Group>
      </td>
    </tr>
  )
}
