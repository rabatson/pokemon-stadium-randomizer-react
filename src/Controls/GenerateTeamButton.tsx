import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setTeamSlot } from '../redux/teamSlice'
import { useCallback, useEffect, useRef } from 'react'
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

    const rollForShiny = useCallback((): boolean => {
        // Upper limit for chances of shiny
        const maxNumber = 4096
        // Number to hit for a shiny
        const minNumber = 1

        const roll = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)

        const isShiny: boolean = roll === minNumber

        if (isShiny) {
            dispatch(incrementShinies())
        }
        return isShiny
    }, [dispatch])

    // Replace a random slot with a magikarp - but let's let it be shiny for fun
    const replaceWithKarp = useCallback((): void => {
        const slot = Math.floor(Math.random() * 5 + 1)
        dispatch(setTeamSlot({ slot, pokemon: { ...magikarp, isShiny: rollForShiny() } }))
    }, [dispatch, rollForShiny])

    const selectPokemon = useCallback((): Pokemon => {
        const selectedID = Math.floor(Math.random() * (maxID - 1) + 1)

        const selectedPokemon: Pokemon | undefined = allPokemon.find(
            (pokemon) => pokemon.id === selectedID,
        )

        if (!selectedPokemon) {
            return selectPokemon()
        }

        return { ...selectedPokemon }
    }, [maxID])

    const generateTeam = useCallback(() => {
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
            // Roll for shiny after generation to prevent the shiny counter from incrementing if a duplicate exists
            pokemon = { ...pokemon, isShiny: rollForShiny() }

            localTeam.push(pokemon)
            dispatch(setTeamSlot({ slot: i, pokemon }))
        }

        if (forceMagikarp) {
            replaceWithKarp()
        }

        dispatch(incrementTeams())
    }, [
        team,
        allowDuplicates,
        forceMagikarp,
        selectPokemon,
        replaceWithKarp,
        rollForShiny,
        dispatch,
    ])

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
