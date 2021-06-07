import { combineReducers } from 'redux'
import { topicListReducer } from './topicReducer'
import { subjectListReducer } from './subjectReducer'
import { themeListReducer, themeDetailsReducer } from './themeReducer'
import { userLoginReducer, userRegisterReducer } from './userReducer'
import { pupilRegisterReducer } from './pupilReducer'

export default combineReducers({
  topicList: topicListReducer,
  subjectList: subjectListReducer,
  themeList: themeListReducer,
  themeDetails: themeDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  pupilRegister: pupilRegisterReducer
})
