import { configureStore } from '@reduxjs/toolkit'

export const RootState = configureStore({
  reducer: {
  },
})

export type RootState = ReturnType<typeof RootState.getState>
export type AppDispatch = typeof RootState.dispatch