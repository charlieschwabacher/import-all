var fs = require('fs');
var path = require('path');

module.exports = function(importPath) {
  return fs.readdirSync(importPath)
    .filter(function(fileName) {
      return fileName.match(/\.js$/);
    })
    .map(function(fileName) {
      return require(path.join(importPath, fileName));
    })
    .filter(function(module) {
      return module.__esModule
    })
    .map(function(module) {
      return module.default;
    });
};
