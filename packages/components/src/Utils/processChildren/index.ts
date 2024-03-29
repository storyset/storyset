import {
  type ReactNode,
  isValidElement
} from 'react'

const _processChild = (child: any): any => {
  if (typeof child !== 'undefined') {
    if (Array.isArray(child)) {
      return child.map(
        child => _processChild(child)
      )
    } else if (typeof child === 'object') {
      if (isValidElement(child)) {
        return child
      }
    }
  }

  return null
}

/**
 * @internal
 */
export const processChildren = (props: any): {
  hasChildren: boolean
  numChildren: number
  firstChild: ReactNode
  children: ReactNode[]
} => {
  const children = props.children ?? props.of

  const processedChildren: ReactNode[] =
    [_processChild(children)]
      .flat(10)
      .filter(child => child !== null)

  // if (!processedChildren) {
  //   processedChildren = []
  // }

  return {
    hasChildren: processedChildren.length > 0,
    numChildren: processedChildren.length,

    firstChild: processedChildren.length > 0
      ? processedChildren[0]
      : null,

    children: processedChildren
  }
}
