import React from 'react'

import { story, showDocs } from '../..'
import { List, Component } from '../../Utils/Tests'

import { Story } from '.'

export default story(
  Story,
  { ...showDocs() }
)

export const Default = (): JSX.Element => (
  <Story>
    <Component index={1} />
    <Component index={2} />
    <Component index={3} />
  </Story>
)

export const Align = (): JSX.Element => (
  <List>
    <Story
      left
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Story>

    <Story
      center
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Story>

    <Story
      right
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Story>
  </List>
)

export const Direction = (): JSX.Element => (
  <List>
    <Story
      left
      horizontal
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Story>

    <Story
      left
      vertical
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Story>
  </List>
)

export const Spacing = (): JSX.Element => (
  <List>
    <Story
      left
      horizontal
      spacing={{ between: '75px' }}
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Story>

    <Story
      left
      vertical
      spacing={{ between: '25px' }}
      debug
    >
      <Component index={1} />
      <Component index={2} />
      <Component index={3} />
    </Story>
  </List>
)

export const Debug = (): JSX.Element => (
  <Story debug>
    <Component index={1} />
    <Component index={2} />
    <Component index={3} />
  </Story>
)
