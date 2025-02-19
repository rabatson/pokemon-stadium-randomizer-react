import Grid from '@mui/material/Grid2'
import PokemonCard from './PokemonCard'
import { Stack } from '@mui/material'
import { Pokemon } from '../types'
import { allPokemon, wildcard } from './Pokemon'

export default function Team() {
    // allowGen2 and allowWildCard will be moved into the store when I get to it
    // there will be a shiny count and teams generated count in the store as well
    // the generated team will also be kept in the store

    const allowGen2: boolean = true
    const allowWildCard: boolean = false

    function rollForShiny(): boolean {
        //upper limit for chances of shiny
        const MAX_NUMBER = 4096
        //number to hit for a shiny
        const MIN_NUMBER = 1

        const roll = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER)

        return roll === MIN_NUMBER
    }

    function selectPokemon(): Pokemon {
        let maxID = 150
        if (allowGen2) {
            maxID = 251
        }

        const selectedID = Math.floor(Math.random() * (maxID - 1) + 1)

        const selectedPokemon: Pokemon | undefined = allPokemon.find(
            (pokemon) => pokemon.id === selectedID,
        )

        if (!selectedPokemon) {
            return selectPokemon()
        }

        const isShiny = rollForShiny()

        return { ...selectedPokemon, isShiny }
    }

    return (
        <Stack spacing={1} className="team">
            <Stack spacing={1} direction="row">
                <Grid container size={1}>
                    <PokemonCard pokemon={selectPokemon()} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard pokemon={selectPokemon()} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard pokemon={selectPokemon()} />
                </Grid>
            </Stack>
            <Stack spacing={1} direction="row">
                <Grid container size={1}>
                    <PokemonCard pokemon={selectPokemon()} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard pokemon={selectPokemon()} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard pokemon={selectPokemon()} />
                </Grid>
            </Stack>
        </Stack>
    )
}
