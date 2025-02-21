export type Pokemon = {
    id: number
    name: string
    isShiny?: boolean
}

export type PokemonState = {
    team: Pokemon[]
}

export type SettingsState = {
    maxID: number
    allowGen2: boolean
    allowWildcard: boolean
    allowDuplicates: boolean
    forceMagikarp: boolean
}

export type StatsState = {
    shinies: number
    teams: number
}
