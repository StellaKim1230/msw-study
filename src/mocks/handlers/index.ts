import { getTodos } from './getTodos'
import { postItem } from './postItem'
import { getDocuments } from './getDocuments'
import { getCreators } from './getCreators'

export const handlers = [getTodos, postItem, getDocuments, getCreators]
