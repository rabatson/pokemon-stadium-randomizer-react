import { createSlice } from '@reduxjs/toolkit'
import { StatsState } from '../types'

const initialState: StatsState = {
    shinies: 0,
    teams: 0,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        incrementShinies: (state: { shinies: number }) => {
            state.shinies += 1
        },
        incrementTeams: (state: { teams: number }) => {
            state.teams += 1
        },
    },
})

export const { incrementShinies, incrementTeams } = settingsSlice.actions
export default settingsSlice.reducer
