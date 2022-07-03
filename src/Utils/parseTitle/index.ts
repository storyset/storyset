/**
 * @internal
 */
export const parseTitle = (props?: any) => {
  let hasTitle = false
  let title    = ''

  if (typeof props?.title === 'string') {
    hasTitle = true
    title    = props.title
  }

  return {
    hasTitle,
    title,
  }
}
