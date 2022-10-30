import { PokemonType } from './Types';

export const addPokemon = (PokemonList: PokemonType[]) => {
	return {
		type: 'ADD_POKEMON',
		payload: PokemonList,
	};
};

// continue for other APIs
