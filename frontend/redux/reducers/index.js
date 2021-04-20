import { combineReducers } from 'redux'
import { topicListReducer } from './topicReducer'

export default combineReducers({
  topicList: topicListReducer,
})
