import * as types from '../types/themeTypes'

export const themeListReducer = (state = { themes: [] }, action) => {
  switch (action.type) {
    case types.THEME_LIST_REQUEST:
      return { loading: true, themes: [] }
    case types.THEME_LIST_SUCCESS:
      return {
        loading: false,
        themes: action.payload,
      }
    case types.THEME_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const themeDetailsReducer = (state = { theme: {} }, action) => {
  switch (action.type) {
    case types.THEME_DETAILS_REQUEST:
      return { loading: true, ...state }
    case types.THEME_DETAILS_SUCCESS:
      return { loading: false, theme: action.payload }
    case types.THEME_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case types.THEME_DETAILS_RESET:
      return { theme: {} }
    default:
      return state
  }
}
