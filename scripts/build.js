// TODO: turn on minify

const { build } = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const glob = require('globby')

;(async () => {
  await build({
    platform: 'node',
    target: ['node14'],
    format: 'cjs',

    // minify: true,
    sourcemap: true,

    outdir: 'dist',

    entryPoints: await glob([
      'src/**/*.ts',
      'src/**/*.tsx',
      '!src/**/*.stories.*',
      '!src/**/*.test.*'
    ]),

    plugins: [
      nodeExternalsPlugin()
    ]
  })
})()
