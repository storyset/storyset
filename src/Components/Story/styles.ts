export const styles = [
  {
    display: 'flex',
    width:   '100%',
    height:  '100%',

    '& .story.wrapper': {
      display: 'flex',

      alignItems:     'left',
      justifyContent: 'center',
      flexDirection:  'column',
    },

    '& .story.list': {
      listStyle: 'none',

      display: 'flex',

      margin:  0,
      padding: 0,
    },

    '& .story.item': {
      display:    'flex',
      alignItems: 'center',
    },
  },
]
