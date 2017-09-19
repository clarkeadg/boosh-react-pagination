'use strict';

var Pagination = require('./Components/Pagination/Pagination');
var PaginationActions = require('./Actions/Creators');
var PaginationSelector = require('./Selectors/PaginationSelector');
var PaginationReducer = require('./Reducers/PaginationReducer');

module.exports = {
  Pagination: Pagination,
  PaginationActions: PaginationActions,
  getPageNumber: PaginationSelector.getPageNumber,
  getPageCount: PaginationSelector.getPageCount,
  PaginationReducer: PaginationReducer.default
};