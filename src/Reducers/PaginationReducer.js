import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  count: 0,
})

// gotCount
const gotCount = (state, action) =>
  state.merge({ count: action.payload.count })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.GOT_PAGINATION_COUNT]: gotCount
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
