import { TSpacing } from '@Types'

const _parseSpacing = (spacing: any): {
  hasTop: boolean
  hasBottom: boolean
  hasLeft: boolean
  hasRight: boolean
  hasBetween: boolean
  top: string | number
  bottom: string | number
  left: string | number
  right: string | number
  between: string | number
} => {
  let hasTop = false
  let hasBottom = false
  let hasLeft = false
  let hasRight = false
  let hasBetween = false

  let top: number | string = 0
  let bottom: number | string = 0
  let left: number | string = 0
  let right: number | string = 0
  let between: number | string = 0

  if (typeof spacing === 'number' || typeof spacing === 'string') {
    hasTop =
    hasBottom =
    hasLeft =
    hasRight =
    hasBetween = true

    top =
    bottom =
    left =
    right =
    between = spacing
  } else if (typeof spacing === 'object' && spacing !== null) {
    for (const key of Object.keys(spacing)) {
      const value = spacing[key]

      if (typeof value === 'number' || typeof value === 'string') {
        switch (key) {
          case 'top':
            hasTop = true
            top = value
            break

          case 'bottom':
            hasBottom = true
            bottom = value
            break

          case 'left':
            hasLeft = true
            left = value
            break

          case 'right':
            hasRight = true
            right = value
            break

          case 'vertical':
            hasTop =
            hasBottom = true

            top =
            bottom = value
            break

          case 'horizontal':
            hasLeft =
            hasRight = true

            left =
            right = value
            break

          case 'between':
            hasBetween = true
            between = value
            break
        }
      }
    }
  }

  return {
    hasTop,
    hasBottom,
    hasLeft,
    hasRight,
    hasBetween,

    top,
    bottom,
    left,
    right,
    between
  }
}

export const parseSpacing = (props: any, defaultSpacing?: TSpacing): {
  hasTop: boolean
  hasBottom: boolean
  hasLeft: boolean
  hasRight: boolean
  hasBetween: boolean
  top: string | number
  bottom: string | number
  left: string | number
  right: string | number
  between: string | number
} => {
  let hasTop = false
  let hasBottom = false
  let hasLeft = false
  let hasRight = false
  let hasBetween = false

  let top: number | string = 0
  let bottom: number | string = 0
  let left: number | string = 0
  let right: number | string = 0
  let between: number | string = 0

  if (typeof defaultSpacing !== 'undefined') {
    const spacing = _parseSpacing(defaultSpacing)

    hasTop = spacing.hasTop
    hasBottom = spacing.hasBottom
    hasLeft = spacing.hasLeft
    hasRight = spacing.hasRight
    hasBetween = spacing.hasBetween

    top = spacing.top
    bottom = spacing.bottom
    left = spacing.left
    right = spacing.right
    between = spacing.between
  }

  if ('spacing' in props) {
    const spacing = _parseSpacing(props.spacing)

    hasTop = spacing.hasTop
    hasBottom = spacing.hasBottom
    hasLeft = spacing.hasLeft
    hasRight = spacing.hasRight
    hasBetween = spacing.hasBetween

    top = spacing.top
    bottom = spacing.bottom
    left = spacing.left
    right = spacing.right
    between = spacing.between
  }

  return {
    hasTop,
    hasBottom,
    hasLeft,
    hasRight,
    hasBetween,

    top,
    bottom,
    left,
    right,
    between
  }
}
