// TODO: add custom path handler (prefix, mutator, custom functions, etc)

import { isObject } from '../../Utils'

function story (component: any): any
function story (component: any, parameters?: any): any
function story (title: string, component: any, parameters?: any): any

function story (param1: any, param2?: any, param3?: any): any {
  let title: any = null
  let component: any = null
  let parameters: any = null

  if (typeof param1 !== 'undefined') {
    if (typeof param1 === 'string') {
      title = param1

      if (typeof param2 !== 'undefined') {
        component = param2
      }

      if (isObject(param3)) {
        parameters = param3
      }
    } else {
      component = param1

      if (isObject(param2)) {
        parameters = param2
      }
    }
  }

  if (component === null) {
    throw new Error('A valid component must be passed.')
  }

  return {
    ...(title !== null && { title }),
    component,
    ...(parameters !== null && { parameters })
  }
}

interface StoryFunction {
  (): any
  storyName?: string
}

interface StoryOf {
  (story: StoryFunction): StoryFunction
  (name: string, story: StoryFunction): StoryFunction
}

const storyOf: StoryOf = (param1: any, param2?: any) => {
  let fn: StoryFunction

  if (typeof param1 === 'function') {
    fn = param1
  } else {
    fn = param2

    if (typeof param1 === 'string') {
      fn.storyName = param1
    }
  }

  return fn
}

story.of = storyOf

export { story }
