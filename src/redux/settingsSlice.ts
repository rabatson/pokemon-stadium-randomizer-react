import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SettingsState } from '../types'

const initialState: SettingsState = {
    maxID: 251,
    allowGen2: true,
    allowWildcard: false,
    allowDuplicates: false,
    forceMagikarp: false,
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
        setAllowDuplicates: (
            state: { allowDuplicates: boolean },
            action: PayloadAction<boolean>,
        ) => {
            state.allowDuplicates = action.payload
        },
        setForceMagikarp: (state: { forceMagikarp: boolean }, action: PayloadAction<boolean>) => {
            state.forceMagikarp = action.payload
        },
    },
})

export const { setMaxID, setAllowGen2, setAllowWildcard, setAllowDuplicates, setForceMagikarp } =
    settingsSlice.actions
export default settingsSlice.reducer
