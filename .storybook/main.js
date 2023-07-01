// TODO: add configStoryset(): config.node = { ... }
// TODO: configWebpack(): webpackFinal: async config => {}

const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],

  framework: '@storybook/react',

  core: {
    builder: '@storybook/builder-webpack5',
  },

  webpackFinal: async config => {
    // Add __dirname and __filename support to stories -------------------------
    // config.node = {
    //   __dirname:  true,
    //   __filename: true
    // }

    // Handle TypeScript path aliases ------------------------------------------
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),

      new TSConfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]

    return config
  },
}
