const baseConfig = require('../../config/webpack/path');
const resolveApp = require('../../config/utils').resolveApp;


module.exports = {
  ...baseConfig,
  
  mobileAppTsx: resolveApp('src/apps/mobile/index.tsx'),
  webAppTsx: resolveApp('src/apps/web/index.tsx'),
  htmlTemplate: resolveApp('src/index.html')
};