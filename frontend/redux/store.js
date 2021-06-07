import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

let userInfoFromStorage
let pupilInfoFromStorage

if (typeof window !== 'undefined') {
  userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}
if (typeof window !== 'undefined') {
  pupilInfoFromStorage = localStorage.getItem('pupilInfo')
    ? JSON.parse(localStorage.getItem('pupilInfo'))
    : null
}
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  pupilRegister: {  pupilInfo: pupilInfoFromStorage },
}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
