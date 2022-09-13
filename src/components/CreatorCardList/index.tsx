import { EquallyGrid } from '@co-design/core'
import { Creator } from '../../types/Creator'
import { CreatorCard } from '../CreatorCard'

interface Props {
  creators: Creator[]
}

export const CreatorCardList = ({ creators }: Props) => {
  return (
    <EquallyGrid cols={3} spacing="large">
      {creators &&
        creators.length > 0 &&
        creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            id={creator.id}
            avatarUrl={creator.avatarUrl}
            name={creator.name}
            followerCount={creator.followerCount}
            friendCount={creator.friendCount}
          />
        ))}
    </EquallyGrid>
  )
}
