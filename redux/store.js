import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.slice'


 const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: null
    }
 })

 export default {store}