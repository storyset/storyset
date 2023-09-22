/**
 * @internal
 */
export const parseDebug = (
  props?: any,
  defaultValue?: any
): {
  hasDebug: boolean
  debug: any
} => {
  const debug = defaultValue ?? false

  let hasDebug = false

  if (typeof props?.debug !== 'undefined') {
    hasDebug = props.debug !== false
  }

  return {
    hasDebug,
    debug
  }
}
