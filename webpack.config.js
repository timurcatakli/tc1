const path = require('path');
const merge = require('webpack-merge');
// This will automatically get the dev/prod config based on process.env.NODE_ENV.
const expoConfig = require('@expo/webpack-config');

const paths = {
  assets: path.resolve(__dirname, 'assets'),
  screens: path.resolve(__dirname, 'screens'),
  shared: path.resolve(__dirname, 'shared'),
};

// Create a loader which can import `.obj` & `.mtl` (popular 3D model files (not popular enough to be part of the default config though... 😏))
const modelLoaderConfiguration = {
  test: /\.(obj|mtl)$/,
  use: {
    loader: 'file-loader',
  },
};

// Expo expects a function so we can pass around options.
module.exports = function(env, argv) {
  return merge(expoConfig(env, argv), {
    resolve: {
      alias: paths,
    },
    module: {
      rules: [modelLoaderConfiguration],
    },
  });
};
