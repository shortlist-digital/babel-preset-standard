const config = {
  presets: [
    [
      require.resolve('babel-preset-env'),
      { modules: false, useBuiltIns: true }
    ],
    require.resolve('babel-preset-react')
  ],
  plugins: [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    require.resolve('babel-plugin-syntax-dynamic-import'),
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    [
      require.resolve('babel-plugin-transform-react-remove-prop-types'),
      {
        mode: 'wrap',
        ignoreFilenames: ['node_modules']
      }
    ]
  )
}

module.exports = config
