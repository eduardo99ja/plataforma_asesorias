import * as types from '../types/topicTypes'

export const topicListReducer = (state = { topics: [] }, action) => {
  switch (action.type) {
    case types.TOPIC_LIST_REQUEST:
      return { loading: true, topics: [] }
    case types.TOPIC_LIST_SUCCESS:
      return {
        loading: false,
        topics: action.payload,
      }
    case types.TOPIC_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

