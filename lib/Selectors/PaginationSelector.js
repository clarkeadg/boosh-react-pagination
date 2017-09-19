'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageNumber = exports.getPageCount = undefined;

var _reselect = require('reselect');

/* Private */

var getCount = function getCount(state, props) {
  return state.pagination.count;
};

var pageNumber = function pageNumber(state, props) {
  return +props.params.pageNumber || 1;
};

/* Export */

var getPageCount = exports.getPageCount = (0, _reselect.createSelector)([getCount], function (count) {
  return count;
});

var getPageNumber = exports.getPageNumber = (0, _reselect.createSelector)([pageNumber], function (number) {
  return number;
});