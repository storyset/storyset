/**
 * @internal
 */
export const parseAlign = (props?: any, defaultAlign?: string) => {
  let align = defaultAlign ?? ''

  if (props?.align) {
    switch (props.align) {
      case 'left':
      case 'center':
      case 'right':
        align = props.align
    }
  } else {
    if (props?.left === true) {
      align = 'left'

    } else if (props?.center === true) {
      align = 'center'

    } else if (props?.right === true) {
      align = 'right'
    }
  }

  return {
    hasAlign: align !== '',
    align,
  }
}
