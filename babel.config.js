const path = require('path');

const paths = {
  assets: path.resolve(__dirname, 'assets'),
  screens: path.resolve(__dirname, 'screens'),
  shared: path.resolve(__dirname, 'shared'),
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: paths,
        },
      ],
    ],
  };
};
