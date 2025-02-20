import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SettingsState } from '../types'

const initialState: SettingsState = {
    maxID: 251,
    allowGen2: true,
    allowWildcard: false,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setMaxID: (state: { maxID: number }, action: PayloadAction<number>) => {
            state.maxID = action.payload
        },
        setAllowGen2: (state: { allowGen2: boolean }, action: PayloadAction<boolean>) => {
            state.allowGen2 = action.payload
        },
        setAllowWildcard: (state: { allowWildcard: boolean }, action: PayloadAction<boolean>) => {
            state.allowWildcard = action.payload
        },
    },
})

export const { setMaxID, setAllowGen2, setAllowWildcard } = settingsSlice.actions
export default settingsSlice.reducer
