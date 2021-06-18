const resolveRelativeAppRoot = require('../../../baseConfig/utils/resolvePath').resolveRelativeAppRoot;

module.exports = {
  serverAppTs: resolveRelativeAppRoot('./src/server.ts')
};