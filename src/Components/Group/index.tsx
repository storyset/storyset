import React from 'react'
import className from '@reactory/class-name'

// -----------------------------------------------------------------------------

import {
  TitleProp,
  StylingProps,
  AlignProps,
  DirectionProps,
  SpacingProp,
  ChildrenProps
} from '@Props'

// -----------------------------------------------------------------------------

import {
  parseTitle,
  // parseAlign,
  // parseDirection,
  // parseSpacing,
  processChildren
  // getDefaults
} from '@Utils'

// -----------------------------------------------------------------------------

// import { styles } from './styles'

// -----------------------------------------------------------------------------

export interface Props extends
  TitleProp,
  StylingProps,
  AlignProps,
  DirectionProps,
  SpacingProp,
  ChildrenProps {

  debug?: any
}

// -----------------------------------------------------------------------------

export const Group = (props: Props): JSX.Element => {
  // const defaults = getDefaults().Group

  const {
    hasTitle,
    title
  } = parseTitle(props)

  // const {
  //   hasAlign,
  //   align,
  // } = parseAlign(props, defaults.align)

  // const {
  //   hasDirection,
  //   isHorizontal,
  //   isVertical,
  //   direction,
  // } = parseDirection(props, defaults.direction)

  // const {
  //   hasTop,
  //   hasBottom,
  //   hasLeft,
  //   hasRight,
  //   hasBetween,

  //   top,
  //   bottom,
  //   left,
  //   right,
  //   between,
  // } = parseSpacing(props, defaults.spacing)

  const {
    numChildren,
    firstChild,
    children
  } = processChildren(props)

  return (
    <div
      className={className([
        'storyset',
        'story-group',
        'container',
        props.className
      ])}
      // css={[
      //   styles,
      //   hasAlign && { justifyContent: align },
      //   props.debug && { outline: '1px dotted red' },
      //   props.style,
      // ]}
    >
      <div
        className={className([
          'storyset',
          'story-group',
          'wrapper'
        ])}
      >
        {/* ------------------------------------------------------------------ */}
        {hasTitle && (
          <div
            className={className([
              'storyset',
              'story-group',
              'title'
            ])}
          >
            {title}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {
          numChildren > 1
            // ---------------------------------------------------------------
            ? (
              <ul
                className={className([
                  'storyset',
                  'story-group',
                  'list'
                ])}
                // css={[
                //   hasDirection && { flexDirection: direction as any },
                // ]}
              >
                {children.map(
                  (child, index) => (
                    <li
                      key={index}
                      className={className([
                        'storyset',
                        'story-group',
                        'item'
                      ])}
                      // css={[
                      //   hasBetween && {
                      //     '& + &': isVertical
                      //       ? { marginTop:  between }
                      //       : { marginLeft: between },
                      //   },
                      // ]}
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
  )
}
