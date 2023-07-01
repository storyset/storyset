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
  parseAlign,
  parseDebug,
  parseDirection,
  parseSpacing,
  processChildren,
  getDefaults
} from '@Utils'

// -----------------------------------------------------------------------------

import * as styles from './styles'

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
  const defaults = getDefaults().Group

  const { hasDebug } = parseDebug(props)

  const {
    hasTitle,
    title
  } = parseTitle(props)

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
        'story-group-container',
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
          'story-group-wrapper'
        ])}
        style={styles.wrapper}
      >
        {/* ------------------------------------------------------------------ */}
        {hasTitle && (
          <div
            className={className([
              'storyset',
              'story-group-title'
            ])}
            style={styles.title}
          >
            <i
              role='presentation'
              style={styles.titleDecorLineLeft}
            />
            <span style={styles.titleText}>{title}</span>
            <i
              role='presentation'
              style={styles.titleDecorLineRight}
            />
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
                  'story-group-list'
                ])}
                style={{
                  ...styles.list,
                  ...(hasDirection && { flexDirection: direction as any })
                }}
              >
                {children.map(
                  (child, index) => (
                    <li
                      key={index}
                      className={className([
                        'storyset',
                        'story-group-list-item'
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
