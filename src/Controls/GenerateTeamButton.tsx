import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setTeamSlot } from '../redux/teamSlice'
import { useEffect, useRef } from 'react'
import { allPokemon, magikarp } from '../pokemon/Pokemon'
import { Pokemon } from '../types'
import { RootState } from '../redux/store'
import { incrementShinies, incrementTeams } from '../redux/statsSlice'

function GenerateTeamButton() {
    const dispatch = useDispatch()
    const { maxID, allowDuplicates, forceMagikarp } = useSelector(
        (state: RootState) => state.settings,
    )
    const team: Pokemon[] = useSelector((state: RootState) => state.pokemon.team)
    const teamGeneratedRef = useRef(false)

    function rollForShiny(): boolean {
        // Upper limit for chances of shiny
        const MAX_NUMBER = 4096
        // Number to hit for a shiny
        const MIN_NUMBER = 1

        const roll = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER)

        const isShiny: boolean = roll === MIN_NUMBER

        if (isShiny) {
            dispatch(incrementShinies())
        }
        return isShiny
    }

    // replace a random slot with a magikarp - but let's let it be shiny for fun
    const replaceWithKarp = (): void => {
        const slot = Math.floor(Math.random() * (5 + 0) + 1)
        dispatch(setTeamSlot({ slot, pokemon: { ...magikarp, isShiny: rollForShiny() } }))
    }

    const selectPokemon = (): Pokemon => {
        const selectedID = Math.floor(Math.random() * (maxID - 1) + 1)

        const selectedPokemon: Pokemon | undefined = allPokemon.find(
            (pokemon) => pokemon.id === selectedID,
        )

        if (!selectedPokemon) {
            return selectPokemon()
        }

        return { ...selectedPokemon, isShiny: rollForShiny() }
    }

    const generateTeam = () => {
        const localTeam = [...team]

        for (let i = 0; i < 6; i++) {
            let pokemon: Pokemon

            if (allowDuplicates) {
                pokemon = selectPokemon()
            } else {
                do {
                    pokemon = selectPokemon()
                } while (localTeam.some((p) => p.id === pokemon.id))
            }

            localTeam.push(pokemon)
            dispatch(setTeamSlot({ slot: i, pokemon }))
        }

        if (forceMagikarp) {
            replaceWithKarp()
        }
        dispatch(incrementTeams())
    }

    // Generate a team on initial load
    useEffect(() => {
        if (team.length === 0 && !teamGeneratedRef.current) {
            generateTeam()
            teamGeneratedRef.current = true
        }
    }, [team, generateTeam])

    return (
        <Button variant="contained" onClick={generateTeam}>
            Generate Team
        </Button>
    )
}

export default GenerateTeamButton
