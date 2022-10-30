import { createSlice } from '@reduxjs/toolkit';
import * as Actions from '../Redux/Actions';
import * as Types from '../Redux/Types';

const initial: Types.PokemonType[] = [];

const PokemonSlice = createSlice({
	Pokemon: Types.PokemonType,
	initialState: initial,
	reducers: {
		AddPokemon: (
			state: Types.PokemonActionModel['payload'],
			action: {
				payload: Types.PokemonActionModel['payload'];
				type: Types.PokemonActionModel['type'];
			}
		) => {
			state = action.payload;
		},
	},
});

export const PokemonReducers = (
	state = initial,
	action: Types.PokemonActionModel
) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_POKEMON':
			console.log('Adding Pokemon to store');
			return [...state, payload];

		default:
			console.log('Reducer Break');
			break;
	}
};
