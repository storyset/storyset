import React from 'react'

import { story, showDocs } from '../..'
import { Component } from '../../Utils/Tests'

import { Item } from '.'

export default story(
  Item,
  { ...showDocs() }
)

export const Default = (): JSX.Element => (
  <Item
    title='Item'
    debug
  >
    <Component />
  </Item>
)
