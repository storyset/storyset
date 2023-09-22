import React from 'react'

// -----------------------------------------------------------------------------

// const style = {
//   display: 'flex',

//   alignItems: 'center',
//   justifyContent: 'center',

//   border: '1px solid #000',

//   width: '100px',
//   height: '75px',

//   color: '#000',
//   background: '#CCC',

//   fontSize: '11px',
//   fontWeight: 'bold',
//   fontFamily: [
//     '"Nunito Sans"',
//     '-apple-system',
//     '".SFNSText-Regular"',
//     '"San Francisco"',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     '"Helvetica Neue"',
//     'Helvetica',
//     'Arial',
//     'sans-serif'
//   ].join(',')
// }

export interface Props {
  index?: number
}

export const Component = (props: Props): JSX.Element => {
  const { index } = props

  return (
    <div>
      Component
      {typeof index !== 'undefined' && ` ${index}`}
    </div>
  )
}

export interface ListProps {
  children?: any
}

export const List = (props: ListProps): JSX.Element => {
  return (
    <ul>
      {React.Children.map(
        props.children,
        (child, index) => {
          return (
            <li key={index}>
              {child}
            </li>
          )
        }
      )}
    </ul>
  )
}
