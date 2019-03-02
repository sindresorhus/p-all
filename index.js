'use strict';
const pMap = require('p-map');

module.exports = (iterable, options) => pMap(iterable, element => element(), options);
module.exports.default = module.exports;
