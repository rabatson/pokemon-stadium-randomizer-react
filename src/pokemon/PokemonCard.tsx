import { Pokemon } from '../types'
import { Card, CardContent, Stack, styled, Typography } from '@mui/material'

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
    },
    '.ShinyMarker': {
        WebkitAnimation: 'rainbow 5s infinite',
    },
    '@-webkit-keyframes rainbow': {
        '0%': { color: '#ffa500' },
        '10%': { color: '#800080' },
        '20%': { color: '#ff0000' },
        '30%': { color: '#5f9ea0' },
        '40%:': { color: '#ffff00' },
        '50%': { color: '#ff7f50' },
        '60%': { color: '#008000' },
        '70%': { color: '#00ffff' },
        '80%': { color: '#ff1493' },
        '90%': { color: '#1e90ff' },
        '100%': { color: '#ffa500' },
    },
})

export default function PokemonCard({ pokemon }: Readonly<PokemonCardProps>) {
    const spriteSrc = pokemon.isShiny
        ? `/sprites/shiny/${pokemon.id}.png`
        : `/sprites/${pokemon.id}.png`

    return (
        <StyledCard className="card">
            <CardContent>
                <Stack direction="row" justifyContent="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {`${pokemon?.name}`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" className="ShinyMarker">
                        {pokemon?.isShiny ? '*' : ''}
                    </Typography>
                </Stack>
                <img src={spriteSrc} />
            </CardContent>
        </StyledCard>
    )
}
