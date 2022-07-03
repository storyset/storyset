// TODO: handle arrays as children (<Story>{[ ... ]}<Story/>) - error out before processing children
// TODO: auto key array of elements similar to List to ignore keys during maps

import { Fragment } from 'react'

/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react'

// -----------------------------------------------------------------------------

import {
  StylingProps,
  AlignProps,
  DirectionProps,
  SpacingProp,
  ChildrenProps,
} from '@Props'

// -----------------------------------------------------------------------------

import {
  parseAlign,
  parseDirection,
  parseSpacing,
  processChildren,
  getDefaults,
  className,
} from '@Utils'

// -----------------------------------------------------------------------------

import { styles } from './styles'


// -----------------------------------------------------------------------------

export interface Props extends
  StylingProps,
  AlignProps,
  DirectionProps,
  SpacingProp,
  ChildrenProps
{
  globalStyles?: any

  stretch?: boolean

  background?: string,
  checkerboard?: boolean

  debug?: any
}

export const Story = (props: Props) => {
  const defaults = getDefaults().Story

  const globalStyles = props.globalStyles ?? defaults.globalStyles

  const {
    hasAlign,
    align,
  } = parseAlign(props, defaults.align)

  const {
    hasDirection,
    isHorizontal,
    isVertical,
    direction,
  } = parseDirection(props, defaults.direction)

  const {
    hasTop,
    hasBottom,
    hasLeft,
    hasRight,
    hasBetween,

    top,
    bottom,
    left,
    right,
    between,
  } = parseSpacing(props, defaults.spacing)

  const {
    numChildren,
    firstChild,
    children,
  } = processChildren(props)

  return (
    <Fragment>
      {globalStyles && <Global styles={globalStyles} />}
      <div
        className={className([
          'storyset',
          'story',
          'container',
          props.class,
          props.className,
        ])}
        css={[
          styles,
          hasAlign && { justifyContent: align },
          props.debug && { outline: '1px dotted red' },
          props.style,
        ]}
      >
        <div
          className={className([
            'storyset',
            'story',
            'wrapper',
          ])}
        >
          {
            numChildren > 1
              // ---------------------------------------------------------------
              ? (
                <ul
                  className={className([
                    'storyset',
                    'story',
                    'list',
                  ])}
                  css={[
                    hasDirection && { flexDirection: direction as any },
                  ]}
                >
                  {children.map(
                    (child, index) => (
                      <li
                        key={index}
                        className={className([
                          'storyset',
                          'story',
                          'item',
                        ])}
                        css={[
                          hasBetween && {
                            '& + &': isVertical
                              ? { marginTop:  between }
                              : { marginLeft: between },
                          },
                        ]}
                      >
                        {child}
                      </li>
                    )
                  )}
                </ul>
              )
              // ---------------------------------------------------------------
              : firstChild
          }
        </div>
      </div>
    </Fragment>
  )
}
