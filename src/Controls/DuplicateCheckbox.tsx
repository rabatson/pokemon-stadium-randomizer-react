import { useDispatch, useSelector } from 'react-redux'
import { setAllowDuplicates } from '../redux/settingsSlice'
import { RootState } from '../redux/store'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function DuplicateCheckbox() {
    const dispatch = useDispatch()
    const { allowDuplicates } = useSelector((state: RootState) => state.settings)

    const onClick = () => {
        dispatch(setAllowDuplicates(!allowDuplicates))
    }

    return (
        <FormGroup aria-label="position" row>
            <FormControlLabel
                control={<Checkbox checked={allowDuplicates} onClick={onClick} />}
                label="Allow Duplicates"
            />
        </FormGroup>
    )
}

export default DuplicateCheckbox
