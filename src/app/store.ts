import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import onBoardingSlice from './user/onBoardingSlice'

export const store = configureStore({
  reducer:onBoardingSlice
})



export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
