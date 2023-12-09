export type ErrorResponse = {
    error: Error
}

export type TPokemonList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: TResult[];
}

export type TResult = {
    name: string;
    url: string;
}

export type TPokemon = {
    name: string;
    image: string;
}

export type TPokemons = {
    count: number;
    pokemons: TPokemon[];
    next: string | null;
    previous: string | null;
}

export type TPokemonInfo = {
    name: string;
    image: string;
    sprites: {
        front_default: string
    }
}

export type TPokemonDetails = {
    abilities: Ability[]
    height: number
    id?: number
    name?: string
    sprites?: Sprites
    types?: Type[]
    weight: number,
}

type Ability = {
    ability: {
        name: string
        url: string
    }
    is_hidden: boolean
    slot: number
}

type Sprites = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    other: {
        "official-artwork": {
            front_default: string
            front_shiny: string
          }
      }
}

type Type = {
    slot: number
    type: {
        name: string
        url: string
    }
}