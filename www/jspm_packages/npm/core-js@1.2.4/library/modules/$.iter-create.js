/* */ 
'use strict';
var $ = require('./$'),
    descriptor = require('./$.property-desc'),
    setTag = require('./$.tag'),
    IteratorPrototype = {};
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function() {
  return this;
});
module.exports = function(Constructor, NAME, next) {
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setTag(Constructor, NAME + ' Iterator');
};
