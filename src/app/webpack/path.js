const resolveRelativeAppRoot = require('../../../baseConfig/utils/resolvePath').resolveRelativeAppRoot;

module.exports = {
  mobileAppTsx: resolveRelativeAppRoot('src/apps/mobile/index.tsx'),
  webAppTsx: resolveRelativeAppRoot('src/apps/web/index.tsx'),
  htmlTemplate: resolveRelativeAppRoot('src/index.html')
};