
const resolveApp = require('../utils').resolveApp;

module.exports =  {
  root: resolveApp('.'),
  dist: resolveApp('dist'),
  src: resolveApp('src')
};