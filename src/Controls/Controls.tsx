import Grid from '@mui/material/Grid2'
import GenerateTeamButton from './GenerateTeamButton'
import Gen2Checkbox from './AllowGen2Checkbox'

function Controls() {
    return (
        <Grid container className="controls" spacing={1}>
                <GenerateTeamButton />
                <Gen2Checkbox />
        </Grid>
    )
}

export default Controls
