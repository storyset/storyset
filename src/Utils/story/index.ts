// TODO: add custom path handler (prefix, mutator, custom functions, etc)

import path from 'path'

const story = (title: string, component: any, parameters?: any) => {
  const formattedTitle = path
    .normalize(title)
    .replace(path.normalize('src/'), '')

  return {
    title: formattedTitle,
    ...( component && { component }),
    ...( parameters && { parameters })
  }
}

type StoryFunction = {
  (): any
  storyName?: string
}

type StoryOf = {
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
