import React from 'react'

import { story, showDocs } from '../..'
import { List, Component } from '../../Utils/Tests'

import { Group } from '.'

export default story(
  Group,
  { ...showDocs() }
)

export const Default = (): JSX.Element => (
  <Group
    title='Group'
    debug
  >
    <Component index={1} />
    <Component index={2} />
    <Component index={3} />
  </Group>
)

export const Direction = (): JSX.Element => (
  <List>
    <Group
      title='Group'
      horizontal
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Group>

    <Group
      title='Group'
      vertical
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Group>
  </List>
)

export const Spacing = (): JSX.Element => (
  <List>
    <Group
      title='Group'
      horizontal
      spacing={{ between: '25px' }}
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Group>

    <Group
      title='Group'
      vertical
      spacing={{ between: '25px' }}
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Group>
  </List>
)
