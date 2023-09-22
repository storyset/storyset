import { type CSSProperties } from 'react'
import { font } from '../../Theme'

export const container: CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'column'
}

export const title: CSSProperties = {
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'center',

  marginBottom: '12px',
  // width: '100%',

  ...font,

  fontSize: '12px'
}

export const children: CSSProperties = {
  display: 'flex'
}
