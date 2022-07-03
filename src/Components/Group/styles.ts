import { font } from '@Theme'

export const styles = [
  {
    display: 'flex',
    width:   '100%',
    height:  '100%',

    '& .story-group.wrapper': {
      display: 'flex',

      alignItems:     'left',
      justifyContent: 'center',
      flexDirection:  'column',
    },

    '& .story-group.title': {
      ...font,

      display: 'flex',
      alignItems: 'center',

      marginBottom: '1.1em',
      width: '100%',

      '&:before, &:after': {
        content: '""',
        position: 'relative',
        display: 'block',
        flex:    1,
        top: '.1em',
        width: '100%',
        height: '1px',
        background: '#DDD',
      },

      '&:before': {
        marginRight: '.5em',
        // backgroundImage: 'linear-gradient(to left, #DDD, #F2F2F2)',
      },

      '&:after': {
        marginLeft: '.5em',
        // backgroundImage: 'linear-gradient(to right, #DDD, #F2F2F2)',
      },
    },

    '& .story-group.list': {
      listStyle: 'none',

      display: 'flex',

      margin:  0,
      padding: 0,
    },

    '& .story-group.item': {
      display:    'flex',
      alignItems: 'center',
    },
  },
]
