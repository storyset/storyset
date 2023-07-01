import React from 'react'
import className from '@reactory/class-name'

// -----------------------------------------------------------------------------

import {
  TitleProp,
  StylingProps,
  ChildrenProps
} from '@Props'

// -----------------------------------------------------------------------------

import {
  parseDebug,
  parseTitle
} from '@Utils'

// -----------------------------------------------------------------------------

import * as styles from './styles'

// -----------------------------------------------------------------------------

export interface Props extends
  TitleProp,
  StylingProps,
  ChildrenProps {

  debug?: any
}

export const Item = (props: Props): JSX.Element => {
  const { hasDebug } = parseDebug(props)

  const {
    hasTitle,
    title
  } = parseTitle(props)

  return (
    <div
      className={className([
        'storyset',
        'story-item-container',
        props.className
      ])}
      style={{
        ...styles.container,
        ...(hasDebug && { outline: '1px dotted red' }),
        ...props.style
      }}
    >
      {/* ------------------------------------------------------------------ */}
      {hasTitle && (
        <div
          className={className([
            'storyset',
            'story-item-title'
          ])}
          style={{
            ...styles.title
          }}
        >
          {title}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      <div
        className={className([
          'storyset',
          'story-item-children'
        ])}
        style={{
          ...styles.children
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
