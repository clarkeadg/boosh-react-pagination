
const Pagination         = require('./Components/Pagination/Pagination');
const PaginationActions  = require('./Actions/Creators');
const PaginationSelector = require('./Selectors/PaginationSelector');
const PaginationReducer  = require('./Reducers/PaginationReducer');

module.exports = {
  Pagination:            Pagination.default,
  PaginationActions:     PaginationActions.default,
  getPageNumber:         PaginationSelector.getPageNumber,
  getPageCount:          PaginationSelector.getPageCount,
  PaginationReducer:     PaginationReducer.default
}
