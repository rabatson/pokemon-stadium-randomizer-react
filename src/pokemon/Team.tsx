import Grid from '@mui/material/Grid2'
import PokemonCard from "./PokemonCard";
import { Stack } from '@mui/material';

export default function Team() {
    return (
        <Stack spacing={1} className="team">
            <Stack spacing={1} direction='row'>
                <Grid container size={1}>
                    <PokemonCard id={1} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard id={2} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard id={3} />
                </Grid>
            </Stack>
            <Stack spacing={1} direction='row'>
                <Grid container size={1}>
                    <PokemonCard id={4} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard id={5} />
                </Grid>
                <Grid container size={1}>
                    <PokemonCard id={6} />
                </Grid>
            </Stack>
        </Stack>
    )
}