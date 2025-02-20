import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon, PokemonState } from '../types'

const initialState: PokemonState = {
    team: [],
}

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeam: (state: { team: Pokemon[] }, action: PayloadAction<Pokemon[]>) => {
            state.team = action.payload
        },
    },
})

export const { setTeam } = teamSlice.actions
export default teamSlice.reducer
