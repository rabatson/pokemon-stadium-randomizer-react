import { Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { RootState } from '../redux/store'
import { Pokemon } from '../types'
import PokemonCard from './PokemonCard'
import { useSelector } from 'react-redux'

export default function Team() {
    const team: Pokemon[] = useSelector((state: RootState) => state.pokemon.team)

    return (
        <Stack spacing={1} className="team">
            <Stack spacing={1} direction="row">
                {team.slice(0, 3).map((pokemon, index) => (
                    <Grid key={index} container size={1}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
            </Stack>
            <Stack spacing={1} direction="row">
                {team.slice(3, 6).map((pokemon, index) => (
                    <Grid key={index + 3} container size={1}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
            </Stack>
        </Stack>
    )
}

