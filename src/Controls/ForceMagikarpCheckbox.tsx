import { useDispatch, useSelector } from 'react-redux'
import { setForceMagikarp } from '../redux/settingsSlice'
import { RootState } from '../redux/store'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function ForceMagikarpCheckbox() {
    const dispatch = useDispatch()
    const { forceMagikarp } = useSelector((state: RootState) => state.settings)

    const onClick = () => {
        dispatch(setForceMagikarp(!forceMagikarp))
    }

    return (
        <FormGroup aria-label="position" row>
            <FormControlLabel
                control={<Checkbox checked={forceMagikarp} onClick={onClick} />}
                label="Force Magikarp"
            />
        </FormGroup>
    )
}

export default ForceMagikarpCheckbox
