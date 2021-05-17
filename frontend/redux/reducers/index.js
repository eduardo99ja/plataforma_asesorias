import { combineReducers } from 'redux'
import { topicListReducer } from './topicReducer'
import { subjectListReducer } from './subjectReducer'

export default combineReducers({
  topicList: topicListReducer,
  subjectList: subjectListReducer,
})
