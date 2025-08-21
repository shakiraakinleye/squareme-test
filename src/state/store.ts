import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user"

export const RootState = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof RootState.getState>
export type AppDispatch = typeof RootState.dispatch