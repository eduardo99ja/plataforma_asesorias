import { combineReducers } from 'redux'
import { topicListReducer } from './topicReducer'
import { subjectListReducer } from './subjectReducer'
import { themeListReducer } from './themeReducer'
import { userLoginReducer,userRegisterReducer } from './userReducer'

export default combineReducers({
  topicList: topicListReducer,
  subjectList: subjectListReducer,
  themeList: themeListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})
