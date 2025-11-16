import { configureStore } from "@reduxjs/toolkit"
import linksAndCodeSliceReducer from "./linksAndCodeSlice"
import userSlice from "./userSlice"

const store = configureStore({
    reducer: {
        linksAndCode: linksAndCodeSliceReducer,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store