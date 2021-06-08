const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  root: resolveApp('.'),
  dist: resolveApp('./dist'),
  mobileAppTsx: resolveApp('./src/apps/mobile/index.tsx'),
  webAppTsx: resolveApp('./src/apps/web/index.tsx'),
  htmlTemplate: resolveApp('./src/index.html'),

  mobile: resolveApp('./src/apps/mobile'),
  web: resolveApp('./src/apps/web'),
  components: resolveApp('./src/components')
};