import { type CSSProperties } from 'react'
import { font } from '../../Theme'

export const container: CSSProperties = {
  display: 'flex',
  width: '100%',
  height: '100%'
}

export const wrapper: CSSProperties = {
  display: 'flex',

  alignItems: 'left',
  justifyContent: 'center',
  flexDirection: 'column'
}

export const title: CSSProperties = {
  ...font,

  display: 'flex',
  alignItems: 'center',

  marginBottom: '1.1em',
  width: '100%'
}

export const titleText: CSSProperties = {
  ...font
}

export const titleDecorLineLeft: CSSProperties = {
  position: 'relative',
  display: 'block',
  flex: 1,
  top: '.1em',
  width: '100%',
  height: '1px',
  background: '#DDD',
  // backgroundImage: 'linear-gradient(to left, #DDD, #F2F2F2)',

  marginRight: '3px'
}
export const titleDecorLineRight: CSSProperties = {
  position: 'relative',
  display: 'block',
  flex: 1,
  top: '.1em',
  width: '100%',
  height: '1px',
  background: '#DDD',
  // backgroundImage: 'linear-gradient(to right, #DDD, #F2F2F2)',

  marginLeft: '3px'
}

export const list: CSSProperties = {
  listStyle: 'none',

  display: 'flex',

  margin: 0,
  padding: 0
}

export const listItem: CSSProperties = {
  display: 'flex',
  alignItems: 'center'
}
