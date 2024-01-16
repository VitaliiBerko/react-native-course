import {configureStore} from '@reduxjs/toolkit'


 const store = configureStore({
    reducer: {
        auth: null,
        posts: null
    }
 })

 export default {store}