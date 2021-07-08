import videoListReducer from './videoListReducer'
import videoSelectedReducer from './videoSelectedReducer'
import commentsThreadReducer from './commentsThreadReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    videoListReducer,
    videoSelectedReducer,
    commentsThreadReducer
})

export default rootReducer