/** @jsxImportSource @emotion/react */

// -----------------------------------------------------------------------------

import {
  TitleProp,
  StylingProps,
  ChildrenProps,
} from '@Props'

// -----------------------------------------------------------------------------

import {
  parseTitle,
  className,
} from '@Utils'

// -----------------------------------------------------------------------------

const titleStyle = {
  marginBottom: '1.25em',
  textAlign: 'center',

  color: 'black',
  fontWeight: '600',
}

// -----------------------------------------------------------------------------

import { styles } from './styles'

// -----------------------------------------------------------------------------

export interface Props extends
  TitleProp,
  StylingProps,
  ChildrenProps
{
  debug?: any
}

export const Item = (props: Props) => {
  const {
    hasTitle,
    title,
  } = parseTitle(props)

  return (
    <div
      className={className([
        'storyset',
        'story-item',
        'container',
        props.class,
        props.className,
      ])}
      css={[
        styles,
        props.debug && { outline: '1px dotted red' },
        props.style,
      ]}
    >
      {/* ------------------------------------------------------------------ */}
      {hasTitle && (
        <div
          className={className([
            'storyset',
            'story-item',
            'title',
          ])}
        >
          {title}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      <div
        className={className([
          'storyset',
          'story-item',
          'children',
        ])}
      >
        {props.children}
      </div>
    </div>
  )
}
