const baseConfig = require('../../config/webpack/path');
const resolveApp = require('../../config/utils').resolveApp;

module.exports = {
  ...baseConfig,
  serverAppTs: resolveApp('./src/server.ts')
};