import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.slice'
import { postReducer } from './posts/posts.slice'


 const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postReducer
    }
 })

 export default {store}