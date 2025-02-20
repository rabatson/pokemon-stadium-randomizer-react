import { configureStore } from '@reduxjs/toolkit'
import teamReducer from './teamSlice'
import settingsReducer from './settingsSlice'

export const store = configureStore({
    reducer: {
        pokemon: teamReducer,
        settings: settingsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch