// Do this as the first thing so that any code reading it knows the right env.
process.env.BUILD_ROLLUP = true;

const fs = require('fs');
const { babel } = require('@rollup/plugin-babel');
const readPkgUp = require('read-pkg-up');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});
const [, packageName] = pkg.name.split('@commercetools-test-data/');
const extensions = ['.js', '.ts', '.tsx'];

const plugins = [
  babel({ extensions, babelHelpers: 'runtime', root: __dirname }),
  // To convert CJS modules to ES6
  commonjs({
    include: 'node_modules/**',
  }),
  nodeResolve({
    extensions,
    mainFields: ['module', 'main', 'jsnext'],
    preferBuiltins: true,
    modulesOnly: true,
  }),
  builtins(),
];

const createConfig = (cliArgs) => {
  return [
    // Bundle for cjs format
    {
      input: cliArgs.input,
      output: {
        format: 'cjs',
        // Determine by the existence of the `--dir` option if the bundle should generate
        // multiple chunks, as `--file` and `--dir` cannot be used together.
        ...(cliArgs.dir
          ? {
              chunkFileNames: `${packageName}-[name]-[hash].cjs.js`,
              entryFileNames: `${packageName}-[name].cjs.js`,
            }
          : {
              file: `dist/${packageName}.cjs.js`,
            }),
        sourcemap: true,
      },
      plugins,
    },
    // Bundle for es format
    {
      input: cliArgs.input,
      output: {
        format: 'es',
        // Determine by the existence of the `--dir` option if the bundle should generate
        // multiple chunks, as `--file` and `--dir` cannot be used together.
        ...(cliArgs.dir
          ? {
              chunkFileNames: `${packageName}-[name]-[hash].es.js`,
              entryFileNames: `${packageName}-[name].es.js`,
            }
          : {
              file: `dist/${packageName}.es.js`,
            }),
        sourcemap: true,
      },
      plugins,
    },
  ];
};

module.exports = createConfig;
