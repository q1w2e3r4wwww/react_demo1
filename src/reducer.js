
import { combineReducers } from 'redux'
import { crateReducer } from './index.redux'
import { auth } from './Auth.redux'

// 合并多个reducer
export default combineReducers({crateReducer,auth})