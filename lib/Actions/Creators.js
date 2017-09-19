'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Types = require('./Types');

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* PAGINATION */
var gotPaginationCount = function gotPaginationCount(payload) {
  return { type: _Types2.default.GOT_PAGINATION_COUNT, payload: payload };
};

/**
 Makes available all the action creators we've created.
 */
exports.default = {

  gotPaginationCount: gotPaginationCount

};