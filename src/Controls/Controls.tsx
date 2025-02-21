import Grid from '@mui/material/Grid2'
import GenerateTeamButton from './GenerateTeamButton'
import Gen2Checkbox from './Gen2Checkbox'
import DuplicateCheckbox from './DuplicateCheckbox'
import ForceMagikarpCheckbox from './ForceMagikarpCheckbox'
import { Stack } from '@mui/material'

function Controls() {
    return (
        <Grid container className="controls" spacing={1}>
            <Grid size={12}>
                <GenerateTeamButton />
            </Grid>
            <Stack direction="row">
                <Gen2Checkbox />
                <DuplicateCheckbox />
                <ForceMagikarpCheckbox />
            </Stack>
        </Grid>
    )
}

export default Controls
