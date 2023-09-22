const typescript = require('@rollup/plugin-typescript')
const glob = require('glob')

module.exports = {
  input: glob.sync(
    [
      'src/**/*.ts',
      'src/**/*.tsx'
    ],
    {
      ignore:
      [
        'src/**/*.test.ts',
        'src/**/*.stories.tsx'
      ]
    }
  ),

  output: {
    format: 'cjs',
    sourcemap: true,
    preserveModules: true,
    dir: 'dist'
  },

  external: [
    /^@reactory/,
    /^@storyset/,
    /^react/
  ],

  plugins: [
    typescript()
  ]
}
