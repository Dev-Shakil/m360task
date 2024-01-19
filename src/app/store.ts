import {configureStore} from "@reduxjs/toolkit"
import { authApi } from "services/authApi"
import {setupListeners} from "@reduxjs/toolkit/query/react"
import authReducer from "../features/authSlice"
import { usersApi } from "services/usersApi"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);