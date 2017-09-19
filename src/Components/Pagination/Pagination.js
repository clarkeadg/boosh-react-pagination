
/* React */
import React from 'react';
//import { connect } from 'react-redux'

/* Actions */
//import Actions from '../../Actions/Creators'

/* Selectors */
//import { getPageCount } from '../../Selectors/PaginationSelector'

/* Sagas */
//import GetActivitySaga from '../../Sagas/Preloaders/GetActivitySaga'

/* Components */
import { Pagination as ReactPagination, PaginationNext, PaginationPrevious, PaginationItem, PaginationEllipsis } from 'react-foundation';
import { Link } from 'react-router'

class Pagination extends React.Component {

  componentDidMount() {
    //this.props.dispatch(Actions.getActivityAttempt(null, null, null));
  }

  render() {

    let { path, pageNumber, count } = this.props
    let per_page = this.props.per_page || 10;
    let pager = this.props.pager || "numbers";

    //console.log('PAGINATION COMPONENT', this.props, pageNumber, count, path)

    let currentPage = 1;
    let totalPages = Math.ceil(count/per_page);

    let pages = [];
    for(let i = 1; i<=totalPages; i++) {
      if (i === +pageNumber) {
        pages.push(
          <PaginationItem key={i} isCurrent>{i}</PaginationItem>
        );
      } else {
        pages.push(
          <PaginationItem key={i}>
            <Link to={path+i}>{i}</Link>
          </PaginationItem>
        );
      }
    }

    /*pages.push(
      <span key={totalPages+1}>
        Total: {count}
      </span>
    );*/

    if (pager == "numbers") {
      return (
        <ReactPagination aria-label="Pagination">
          { pages }
        </ReactPagination>
      );
    }

    if (pager == "next") {
      if (pageNumber < totalPages) {
        return (
          <ReactPagination aria-label="Pagination" className="pagination-next">
            <PaginationItem>
              <Link to={path+(pageNumber+1)}>Next Page</Link>
            </PaginationItem>
          </ReactPagination>
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

}

Pagination.propTypes = {
  count: React.PropTypes.number,
  pageNumber: React.PropTypes.number,
  path: React.PropTypes.string
}

Pagination.defaultProps = {
  count: 0,
  pageNumber: 1,
  path: "/"
}

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

export default Pagination

