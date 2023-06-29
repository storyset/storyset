export {
  getDefaults,
  setDefaults
} from './Utils/defaults'

// -----------------------------------------------------------------------------

export { Story } from './Components/Story'
export { Group } from './Components/Group'
export { Item } from './Components/Item'

export { story } from './Utils/story'

// -----------------------------------------------------------------------------

export function showDocs (): { viewMode: string } {
  return {
    viewMode: 'docs'
  }
}

export function showCanvas (options?: { disableDocs?: boolean }): {
  docs?: { page: null } | undefined
  viewMode: string
} {
  return {
    viewMode: 'canvas',
    ...(options?.disableDocs === true && disableDocs())
  }
}

export function disableDocs (): {
  docs: { page: null }
} {
  return {
    docs: { page: null }
  }
}
