import { Avatar, useCoTheme } from '@co-design/core'
import { ResponseItem } from '../../types/item'

interface Props {
  item: ResponseItem
}

export const ListItem = ({ item }: Props) => {
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
        <Avatar src={item.avatar} alt="avatar" size={32} />
      </td>
      <td
        style={{
          textAlign: 'left',
          padding: 12,
          borderBottom: `1px solid ${theme.palettes.gray[2]}`,
        }}
      >
        {item.lastName}
      </td>
      <td
        style={{
          textAlign: 'left',
          padding: 12,
          borderBottom: `1px solid ${theme.palettes.gray[2]}`,
        }}
      >
        {item.firstName}
      </td>
      <td
        style={{
          textAlign: 'left',
          padding: 12,
          borderBottom: `1px solid ${theme.palettes.gray[2]}`,
        }}
      >
        {item.age}
      </td>
      <td
        style={{
          textAlign: 'left',
          padding: 12,
          borderBottom: `1px solid ${theme.palettes.gray[2]}`,
        }}
      >
        {item.email}
      </td>
      <td
        style={{
          textAlign: 'left',
          padding: 12,
          borderBottom: `1px solid ${theme.palettes.gray[2]}`,
        }}
      >
        {item.city}
      </td>
    </tr>
  )
}
