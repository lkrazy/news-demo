import { UPDATE_SEARCH } from './actions'

const initialState = {
  search: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}

export default reducer
