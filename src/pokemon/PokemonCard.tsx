import { Pokemon } from '../types'
import { Card, CardContent, styled, Typography } from '@mui/material'

type PokemonCardProps = {
    pokemon: Pokemon
}

const StyledCard = styled(Card)({
    minWidth: '11em',
    background: 'transparent',
    boxShadow: 'none',
    color: '#eff0f1',
    '@media (prefers-color-scheme: light)': {
        color: '#213547',
    }
})

export default function PokemonCard({ pokemon }: Readonly<PokemonCardProps>) {
    const spriteSrc = pokemon.isShiny
        ? `/sprites/shiny/${pokemon.id}.png`
        : `/sprites/${pokemon.id}.png`

    return (
        <StyledCard className="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon?.name}
                </Typography>
                <img src={spriteSrc} />
            </CardContent>
        </StyledCard>
    )
}
