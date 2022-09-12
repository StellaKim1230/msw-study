import {
  Card,
  Group,
  Text,
  Tag,
  Avatar,
  useCoTheme,
  Image,
} from '@co-design/core'
import { EyeFill, People } from '@co-design/icons'
import { Document } from '../../types/Document'
import { countToAbbreviator } from '../../utils'

export const DocumentCard = ({
  id,
  imgSrc,
  title,
  category,
  avatarUrl,
  memberName,
  audienceTotalCount,
  viewTotalCount,
  ...props
}: Document) => {
  const theme = useCoTheme()

  return (
    <Card co={{ maxWidth: 400 }} {...props}>
      <Card.Section>
        <Image src={imgSrc} alt="thumbnail" fit="cover" />
      </Card.Section>
      <Group co={{ marginBottom: 16 }} position="apart">
        <Text block lineClamp={1} co={{ width: 'calc(100% - 120px)' }}>
          {title}
        </Text>
        {category && <Tag color="gray">{category}</Tag>}
      </Group>
      <Group position="apart">
        <Group align="center" spacing={8}>
          <Avatar src={avatarUrl} size={32} />
          <Text size="small" color={theme.palettes.gray[6]}>
            {memberName}
          </Text>
        </Group>
        <Group spacing={8}>
          {audienceTotalCount && (
            <Group spacing={4}>
              <People color={theme.palettes.gray[4]} />
              <Text size="xsmall" color={theme.palettes.gray[4]}>
                {countToAbbreviator(audienceTotalCount)}
              </Text>
            </Group>
          )}
          {audienceTotalCount && viewTotalCount && (
            <Text color={theme.palettes.gray[4]}>·</Text>
          )}
          {viewTotalCount && (
            <Group spacing={4}>
              <EyeFill color={theme.palettes.gray[4]} />
              <Text size="xsmall" color={theme.palettes.gray[4]}>
                {countToAbbreviator(viewTotalCount)}
              </Text>
            </Group>
          )}
        </Group>
      </Group>
    </Card>
  )
}
