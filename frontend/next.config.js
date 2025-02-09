module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 2000, // Check for changes every 2 seconds
      aggregateTimeout: 500, // Small delay before recompiling
      ignored: /node_modules/,
    };
    return config;
  },
};
