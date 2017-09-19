import Types from './Types'

/* PAGINATION */
const gotPaginationCount = (payload) => ({ type: Types.GOT_PAGINATION_COUNT, payload })

/**
 Makes available all the action creators we've created.
 */
export default {

  gotPaginationCount

}
