import { story, showDocs } from '@storyset'
import { List, Component } from '@Utils/Tests'

import { Group } from '.'

export default story(
  __dirname,
  Group,
  { ...showDocs() }
)

export const Default = () => (
  <Group
    title='Group'
    debug
  >
    <Component index={1}/>
    <Component index={2}/>
    <Component index={3}/>
  </Group>
)

export const Direction = () => (
  <List>
    <Group
      title='Group'
      horizontal
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Group>

    <Group
      title='Group'
      vertical
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Group>
  </List>
)

export const Spacing = () => (
  <List>
    <Group
      title='Group'
      horizontal
      spacing={{ between: '25px' }}
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Group>

    <Group
      title='Group'
      vertical
      spacing={{ between: '25px' }}
      debug
    >
      <Component index={1}/>
      <Component index={2}/>
      <Component index={3}/>
    </Group>
  </List>
)
