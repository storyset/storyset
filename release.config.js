/** @type {import('semantic-release').Options} */
module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    ['@semantic-release/exec', {
      prepareCmd: 'npm run build'
    }],
    ['@semantic-release/git', {
      assets: [
        'CHANGELOG*'
      ]
    }],
    ['@semantic-release/npm', {
      pkgRoot: 'dist'
    }]
  ]
}
