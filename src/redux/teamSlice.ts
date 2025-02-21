import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon, PokemonState } from '../types'

const initialState: PokemonState = {
    team: [],
}

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeamSlot: (
            state: { team: Pokemon[] },
            action: PayloadAction<{ slot: number; pokemon: Pokemon }>,
        ) => {
            const { slot, pokemon } = action.payload
            if (slot >= 0 && slot <= 5) {
                state.team[slot] = pokemon
            }
        },
    },
})

export const { setTeamSlot } = teamSlice.actions
export default teamSlice.reducer
