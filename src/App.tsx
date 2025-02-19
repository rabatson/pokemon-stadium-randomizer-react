import { Box, Typography } from '@mui/material'
import './App.css'
import Team from './pokemon/Team'

function App() {
    return (
        <Box>
            <Typography variant="h3">Random Pokémon Team Generator for Pokémon Stadium</Typography>
            <Team />
            <Typography variant="body2">This is a WIP</Typography>
        </Box>
    )
}

export default App
