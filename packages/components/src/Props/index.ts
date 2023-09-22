import {
  type TAlign,
  type TDirection,
  type TSpacing
} from '../Types'

export interface StylingProps {
  className?: any
  style?: any
}

export interface TitleProp {
  title?: string
}

export interface AlignProps {
  align?: TAlign
  left?: boolean
  center?: boolean
  right?: boolean
}

export interface DirectionProps {
  direction?: TDirection
  horizontal?: boolean
  vertical?: boolean
}

export interface SpacingProp {
  spacing?: TSpacing
}

export interface ChildrenProps {
  of?: any
  children?: any
}
