import { createSelector } from 'reselect'

/* Private */

const getCount = (state, props) => state.pagination.count

const pageNumber = (state, props) => {
  return +props.params.pageNumber || 1
}

/* Export */

export const getPageCount = createSelector(
  [ getCount ],
  ( count ) => {
    return count
  }
)

export const getPageNumber = createSelector(
  [ pageNumber ],
  ( number ) => {
    return number
  }
)
