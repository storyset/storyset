import { story, showDocs } from '@storyset'
import { Component } from '@Utils/Tests'

import { Item } from '.'

export default story(
  __dirname,
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
