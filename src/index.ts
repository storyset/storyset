export {
  getDefaults,
  setDefaults,
} from './Utils/defaults'

// -----------------------------------------------------------------------------

export { Story } from './Components/Story'
export { Group } from './Components/Group'
export { Item }  from './Components/Item'

export { story } from './Utils/story'

// -----------------------------------------------------------------------------

export function showDocs () {
  return {
    viewMode: 'docs'
  }
}

export function showCanvas (options?: { disableDocs?: boolean }) {
  return {
    viewMode: 'canvas',
    ...(options?.disableDocs && disableDocs()),
  }
}

export function disableDocs () {
  return {
    docs: { page: null }
  }
}
