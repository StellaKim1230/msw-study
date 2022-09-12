import { useState, useEffect } from 'react'
import { Document } from '../types/Document'
import { DocumentCardList } from '../components/DocumentCardList'

export const DocumentListPage = () => {
  const [documents, setDocuments] = useState<Document[]>([])

  useEffect(() => {
    fetch('/documents')
      .then((response) => response.json())
      .then((data) => setDocuments(data))
  }, [])

  return <DocumentCardList documents={documents} />
}
