import { addons } from '@storybook/addons'

addons.setConfig({
  sidebar: {
    showRoots: true,
  },
})

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
