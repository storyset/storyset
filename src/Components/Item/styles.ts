import { font } from '@Theme'

export const styles = [
  {
    display: 'inline-flex',
    flexDirection: 'column',

    // width:   '100%',
    // height:  '100%',

    // '& .story-group.wrapper': {
    //   display: 'flex',

    //   alignItems:     'left',
    //   justifyContent: 'center',
    //   flexDirection:  'column',
    // },

    '& .story-item.title': {
      display: 'flex',

      alignItems: 'center',
      justifyContent: 'center',

      marginBottom: '1.1em',
      // width: '100%',

      ...font,

      fontSize: '12px'
    },

    '& .story-item.children': {
      display: 'flex'
      // width:   '100%',
      // height:  '100%',
    }
  }
]
