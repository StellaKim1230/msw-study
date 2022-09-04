import { useCoTheme } from '@co-design/core'
import { ResponseItem } from '../../types/item'
import { ListItem } from './ListItem'

interface Props {
  items: ResponseItem[]
  onDelete(id: string): void
}

export const Items = ({ items, onDelete }: Props) => {
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
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <ListItem key={item.id} item={item} onDelete={onDelete} />
          ))}
      </tbody>
    </table>
  )
}
