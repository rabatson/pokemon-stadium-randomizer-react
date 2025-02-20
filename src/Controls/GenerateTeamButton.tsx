import { Button} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setTeam } from "../redux/teamSlice"
import { useCallback, useEffect } from "react"
import { allPokemon } from "../pokemon/Pokemon"
import { Pokemon } from "../types"
import { RootState } from "../redux/store"

function GenerateTeamButton() {
    const dispatch = useDispatch()
    const { allowGen2, maxID } = useSelector((state: RootState) => state.settings)
    const team: Pokemon[] = useSelector((state: RootState) => state.pokemon.team)

    function rollForShiny(): boolean {
        //upper limit for chances of shiny
        const MAX_NUMBER = 4096
        //number to hit for a shiny
        const MIN_NUMBER = 1

        const roll = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER)

        return roll === MIN_NUMBER
    }

    const selectPokemon = useCallback((): Pokemon => {
        const selectedID = Math.floor(Math.random() * (maxID - 1) + 1)

        const selectedPokemon: Pokemon | undefined = allPokemon.find(
            (pokemon) => pokemon.id === selectedID,
        )

        if (!selectedPokemon) {
            return selectPokemon()
        }

        const isShiny = rollForShiny()

        return { ...selectedPokemon, isShiny }
    }, [maxID, allowGen2])

    const generateTeam = () => {
        const newTeam = Array.from({ length: 6 }, () => selectPokemon())
        
        // probably want to break this up to generate all six slots so it can re-roll duplicates more easily
        dispatch(setTeam(newTeam))
    }

    useEffect(() => {
        if(team.length === 0){
            generateTeam()
        }
    }, [team])

    return (
        <Button variant="contained" onClick={generateTeam}>Generate Team</Button>
    )
}

export default GenerateTeamButton
