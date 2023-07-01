import { type CSSProperties } from 'react'

export const container: CSSProperties = {
  display: 'flex',

  width: '100%',
  height: '100%'
}

export const wrapper: CSSProperties = {
  display: 'flex',

  flexDirection: 'column',

  alignItems: 'left',
  justifyContent: 'center'
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
