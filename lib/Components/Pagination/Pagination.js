'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFoundation = require('react-foundation');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { connect } from 'react-redux'

/* Actions */
//import Actions from '../../Actions/Creators'

/* Selectors */
//import { getPageCount } from '../../Selectors/PaginationSelector'

/* Sagas */
//import GetActivitySaga from '../../Sagas/Preloaders/GetActivitySaga'

/* Components */
var Pagination = function (_React$Component) {
  (0, _inherits3.default)(Pagination, _React$Component);

  function Pagination() {
    (0, _classCallCheck3.default)(this, Pagination);
    return (0, _possibleConstructorReturn3.default)(this, (Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pagination, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //this.props.dispatch(Actions.getActivityAttempt(null, null, null));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          pageNumber = _props.pageNumber,
          count = _props.count;

      var per_page = this.props.per_page || 10;
      var pager = this.props.pager || "numbers";

      //console.log('PAGINATION COMPONENT', this.props, pageNumber, count, path)

      var currentPage = 1;
      var totalPages = Math.ceil(count / per_page);

      var pages = [];
      for (var i = 1; i <= totalPages; i++) {
        if (i === +pageNumber) {
          pages.push(_react2.default.createElement(
            _reactFoundation.PaginationItem,
            { key: i, isCurrent: true },
            i
          ));
        } else {
          pages.push(_react2.default.createElement(
            _reactFoundation.PaginationItem,
            { key: i },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: path + i },
              i
            )
          ));
        }
      }

      /*pages.push(
        <span key={totalPages+1}>
          Total: {count}
        </span>
      );*/

      if (pager == "numbers") {
        return _react2.default.createElement(
          _reactFoundation.Pagination,
          { 'aria-label': 'Pagination' },
          pages
        );
      }

      if (pager == "next") {
        if (pageNumber < totalPages) {
          return _react2.default.createElement(
            _reactFoundation.Pagination,
            { 'aria-label': 'Pagination', className: 'pagination-next' },
            _react2.default.createElement(
              _reactFoundation.PaginationItem,
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: path + (pageNumber + 1) },
                'Next Page'
              )
            )
          );
        }
      }

      return false;

      /*return (
        <ReactPagination aria-label="Pagination">
          <PaginationPrevious isDisabled>Previous</PaginationPrevious>
          <PaginationItem isCurrent>1</PaginationItem>
          <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
          <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
          <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
          <PaginationEllipsis/>
          <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
          <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
          <PaginationNext><a aria-label="Next page">Next</a></PaginationNext>
        </ReactPagination>
      );*/
    }
  }]);
  return Pagination;
}(_react2.default.Component);
/* React */


Pagination.propTypes = {
  count: _react2.default.PropTypes.number,
  pageNumber: _react2.default.PropTypes.number,
  path: _react2.default.PropTypes.string
};

Pagination.defaultProps = {
  count: 0,
  pageNumber: 1,
  path: "/"

  /*const mapStateToProps = (state, props) => {
    return {
      count: 50 //getPageCount(state, props)
    }
  }*/

  /*function preload(params, req) {
    return [
      [GetActivitySaga, {}]
    ];
  }
  Activity.preload = preload;*/

};exports.default = Pagination;