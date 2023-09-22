/**
 * @default 'center'
 */
export type TAlign =
  'left'
  | 'center'
  | 'right'

/**
 * @default 'horizontal'
 */
export type TDirection =
    'horizontal'
    | 'vertical'

export type TSpacing =
    number
    | string
    | {
      of?: number | string

      top?: number | string
      bottom?: number | string
      left?: number | string
      right?: number | string

      vertical?: number | string
      horizontal?: number | string

      between?: number | string
    }
