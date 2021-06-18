
const resolveRelativeAppRoot = require('./resolvePath').resolveRelativeAppRoot;

module.exports =  {
  root: resolveRelativeAppRoot('.'),
  dist: resolveRelativeAppRoot('dist'),
  src: resolveRelativeAppRoot('src')
};