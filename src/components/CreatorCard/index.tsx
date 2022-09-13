interface Props {
  id: string
  avatarUrl?: string
  name: string
  followerCount: number
  friendCount: number
}

export const CreatorCard = ({
  avatarUrl,
  name,
  followerCount,
  friendCount,
}: Props) => {
  return <div>CreatorCard</div>
}
