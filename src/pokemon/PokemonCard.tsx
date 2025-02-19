import { allPokemon } from "./Pokemon";
import {Card, CardContent,  Typography} from '@mui/material'

type PokemonCardProps = {
    id: number
}

export default function PokemonCard({id}: Readonly<PokemonCardProps>)
{
    const pokemon = allPokemon.find((p) => p.id === id)
    
    return  (
    <Card sx={{minWidth: '11em'}}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {pokemon?.name}
            </Typography>
            <img src={`/sprites/${id}.png`}/>

        </CardContent>
    </Card>
    )
}