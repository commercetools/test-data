module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        // To be able to use `runtime` in Rollup babel plugin
        helpers: true,
        regenerator: true,
      },
    ],
  ],
};
