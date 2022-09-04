import { useCoTheme } from '@co-design/core'
import { ResponseItem } from '../../types/item'
import { ListItem } from './ListItem'

interface Props {
  items: ResponseItem[]
}

export const Items = ({ items }: Props) => {
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
            아바타
          </th>
          <th
            style={{
              textAlign: 'left',
              padding: 12,
              borderBottom: `1px solid ${theme.palettes.gray[2]}`,
            }}
          >
            성
          </th>
          <th
            style={{
              textAlign: 'left',
              padding: 12,
              borderBottom: `1px solid ${theme.palettes.gray[2]}`,
            }}
          >
            이름
          </th>
          <th
            style={{
              textAlign: 'left',
              padding: 12,
              borderBottom: `1px solid ${theme.palettes.gray[2]}`,
            }}
          >
            나이
          </th>
          <th
            style={{
              textAlign: 'left',
              padding: 12,
              borderBottom: `1px solid ${theme.palettes.gray[2]}`,
            }}
          >
            이메일
          </th>
          <th
            style={{
              textAlign: 'left',
              padding: 12,
              borderBottom: `1px solid ${theme.palettes.gray[2]}`,
            }}
          >
            도시
          </th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item) => <ListItem key={item.id} item={item} />)}
      </tbody>
    </table>
  )
}
