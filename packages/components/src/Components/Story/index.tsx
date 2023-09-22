import React from 'react'

// TODO: handle arrays as children (<Story>{[ ... ]}<Story/>) - error out before processing children
// TODO: auto key array of elements similar to List to ignore keys during maps

import className from '@reactory/class-name'

// -----------------------------------------------------------------------------

import {
  StylingProps,
  AlignProps,
  DirectionProps,
  SpacingProp,
  ChildrenProps
} from '../../Props'

// -----------------------------------------------------------------------------

import {
  getDefaults,
  parseAlign,
  parseDebug,
  parseDirection,
  parseSpacing,
  processChildren
} from '../../Utils'

// -----------------------------------------------------------------------------

import * as styles from './styles'

// -----------------------------------------------------------------------------

export interface Props extends
  StylingProps,
  AlignProps,
  DirectionProps,
  SpacingProp,
  ChildrenProps {

  globalStyles?: any
  stretch?: boolean
  background?: string
  checkerboard?: boolean

  debug?: any
}

export const Story = (props: Props): JSX.Element => {
  const defaults = getDefaults().Story

  // const globalStyles = props.globalStyles ?? defaults.globalStyles

  const { hasDebug } = parseDebug(props)

  const {
    hasAlign,
    align
  } = parseAlign(props, defaults.align)

  const {
    hasDirection,
    isVertical,
    direction
  } = parseDirection(props, defaults.direction)

  const {
    hasBetween,
    between
  } = parseSpacing(props, defaults.spacing)

  const {
    numChildren,
    firstChild,
    children
  } = processChildren(props)

  return (
    <div
      className={className([
        'storyset',
        'story-container',
        props.className
      ])}
      style={{
        ...styles.container,
        ...(hasAlign && { justifyContent: align }),
        ...(hasDebug && { outline: '1px dotted red' }),
        ...props.style
      }}
    >
      <div
        className={className([
          'storyset',
          'story-wrapper'
        ])}
        style={{
          ...styles.wrapper
        }}
      >
        {
          numChildren > 1
            // -----------------------------------------------------------------
            ? (
              <ul
                className={className([
                  'storyset',
                  'story-list'
                ])}
                style={{
                  ...styles.list,
                  ...(hasDirection && { flexDirection: direction as any })
                }}
              >
                {children.map(
                  (child, index) => {
                    return (
                      <li
                        key={index}
                        className={className([
                          'storyset',
                          'story-list-item'
                        ])}
                        style={{
                          ...styles.listItem,
                          ...(index > 0 && hasBetween && {
                            ...(isVertical
                              ? { marginTop: between }
                              : { marginLeft: between }
                            )
                          })
                        }}
                      >
                        {child}
                      </li>
                    )
                  }
                )}
              </ul>
              )
            // -----------------------------------------------------------------
            : firstChild
        }
      </div>
    </div>
  )
}
