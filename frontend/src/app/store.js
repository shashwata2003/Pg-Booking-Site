import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../Auth/authSlice'
import goalReducer from '../Goals/goalSlice'
import docReducer from '../Doc/DocSlice'
export const store= configureStore({
    reducer:{
        auth:authReducer,
        goals: goalReducer,
        docs:docReducer,
    },
})