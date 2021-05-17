import * as types from '../types/subjectTypes'

export const subjectListReducer = (state = { subjects: [] }, action) => {
  switch (action.type) {
    case types.SUBJECT_LIST_REQUEST:
      return { loading: true, subjects: [] }
    case types.SUBJECT_LIST_SUCCESS:
      return {
        loading: false,
        subjects: action.payload,
      }
    case types.SUBJECT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
