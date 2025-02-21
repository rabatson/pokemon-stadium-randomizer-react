import { Stack, Typography } from '@mui/material'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

function Stats() {
    const { shinies, teams } = useSelector((state: RootState) => state.stats)
    return (
        <Stack direction="column" className="Stats">
            <Typography>
                You have generated {teams} team{teams > 1 ? 's' : ''}.
            </Typography>
            <Typography>You have generated {shinies} Shiny Pokémon.</Typography>
        </Stack>
    )
}

export default Stats
