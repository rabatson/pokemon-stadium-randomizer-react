import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import './App.css'
import Team from './pokemon/Team'
import Controls from './Controls/Controls'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import Stats from './Stats/Stats'

let theme = createTheme()
theme = responsiveFontSizes(theme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2}>
                <Typography variant="h3">Random Pokémon Team Generator</Typography>
                <Grid size={12}>
                    <Controls />
                    <Team />
                </Grid>
                <Grid size={12}>
                    <Stats />
                    <Typography variant="body2">
                        This is a WIP
                        <br />
                        Check it out on{' '}
                        <a href="https://github.com/rabatson/pokemon-stadium-randomizer-react">
                            Github
                        </a>
                    </Typography>
                </Grid>
            </Stack>
        </ThemeProvider>
    )
}

export default App
