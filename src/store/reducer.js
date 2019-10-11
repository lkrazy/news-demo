import * as actionTypes from './actions'

const initialState = {
  search: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    case actionTypes.UPDATE_DEVICE_TYPE:
      return {
        ...state,
        isMobile: action.payload
      }
    default:
      return state
  }
}

export default reducer
