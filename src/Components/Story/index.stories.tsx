import { story, showDocs } from '@storyset'
import { List, Component } from '@Utils/Tests'

import { Story } from '.'

export default story(
  __dirname,
  Story,
  { ...showDocs() }
)

export const Default = () => (
  <Story debug>
    <Component index={1}/>
    <Component index={2}/>
    <Component index={3}/>
  </Story>
)

export const Align = () => (
  <List>
    <Story
      left
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Story>

    <Story
      center
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Story>

    <Story
      right
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Story>
  </List>
)

export const Direction = () => (
  <List>
    <Story
      left
      horizontal
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Story>

    <Story
      left
      vertical
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Story>
  </List>
)

export const Spacing = () => (
  <List>
    <Story
      left
      horizontal
      spacing={{ between: '75px' }}
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Story>

    <Story
      left
      vertical
      spacing={{ between: '25px' }}
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Story>
  </List>
)
