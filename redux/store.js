import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import { postReducer } from "./posts/posts.slice";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
 

  

const store = configureStore({
  reducer: {
    auth:  authReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export default { store, persistor};
