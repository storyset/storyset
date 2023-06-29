/**
 * @internal
 */
export const parseDirection = (props?: any, defaultDirection?: string): {
  hasDirection: boolean
  isHorizontal: boolean
  isVertical: boolean
  direction: string
} => {
  let direction = defaultDirection ?? ''

  if (typeof props?.direction === 'string') {
    switch (props?.direction) {
      case 'horizontal':
      case 'vertical':
        direction = props?.direction
    }
  } else {
    if (props?.horizontal === true) {
      direction = 'horizontal'
    } else if (props?.vertical === true) {
      direction = 'vertical'
    }
  }

  let isHorizontal = false
  let isVertical = false

  switch (direction) {
    case 'horizontal':
      isHorizontal = true
      direction = 'row'
      break

    case 'vertical':
      isVertical = true
      direction = 'column'
      break
  }

  return {
    hasDirection: direction !== '',
    isHorizontal,
    isVertical,
    direction
  }
}
