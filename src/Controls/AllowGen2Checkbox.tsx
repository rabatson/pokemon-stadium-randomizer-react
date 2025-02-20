import { useDispatch, useSelector } from 'react-redux'
import { setAllowGen2, setMaxID } from '../redux/settingsSlice'
import { RootState } from '../redux/store'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function Gen2Checkbox() {
    const dispatch = useDispatch()
    const { allowGen2 } = useSelector((state: RootState) => state.settings)

    const onClick = () => {
        const newValue = !allowGen2

        if (newValue) {
            dispatch(setMaxID(251))
        } else {
            dispatch(setMaxID(151))
        }

        dispatch(setAllowGen2(newValue))
    }

    return (
        <FormGroup aria-label="position" row>
            <FormControlLabel
                control={<Checkbox checked={allowGen2} onClick={onClick} />}
                label="Allow Gen2"
            />
        </FormGroup>
    )
}

export default Gen2Checkbox
