import { EquallyGrid } from '@co-design/core'
import { Document } from '../../types/Document'
import { DocumentCard } from '../DocumentCard'

interface Props {
  documents: Document[]
}

export const DocumentCardList = ({ documents }: Props) => {
  return (
    <EquallyGrid cols={3} spacing="large">
      {documents &&
        documents.length > 0 &&
        documents.map((document) => (
          <DocumentCard
            key={document.id}
            id={document.id}
            imgSrc={document.imgSrc}
            title={document.title}
            category={document.category}
            avatarUrl={document.avatarUrl}
            memberName={document.memberName}
            audienceTotalCount={document.audienceTotalCount}
            viewTotalCount={document.viewTotalCount}
          />
        ))}
    </EquallyGrid>
  )
}
