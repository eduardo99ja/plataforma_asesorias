import { combineReducers } from 'redux'
import { topicListReducer } from './topicReducer'
import { subjectListReducer } from './subjectReducer'
import { themeListReducer } from './themeReducer'

export default combineReducers({
  topicList: topicListReducer,
  subjectList: subjectListReducer,
  themeList: themeListReducer,
})
